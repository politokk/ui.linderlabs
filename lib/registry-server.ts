import "server-only";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { registryItemFileSchema, registryItemSchema } from "@/lib/schema";
import { type Style } from "@/lib/styles";
import registry from "@/registry";

function getFileTarget(file: z.infer<typeof registryItemFileSchema>) {
  let target = file.target;

  if (!target || target === "") {
    const fileName = file.path.split("/").pop();
    if (
      file.type === "registry:block" ||
      file.type === "registry:component" ||
      file.type === "registry:example"
    ) {
      target = `components/${fileName}`;
    }

    if (file.type === "registry:ui") {
      target = `components/ui/${fileName}`;
    }

    if (file.type === "registry:hook") {
      target = `hooks/${fileName}`;
    }

    if (file.type === "registry:lib") {
      target = `lib/${fileName}`;
    }
  }

  return target ?? "";
}

export async function getRegistryItem(name: string, styleName: Style["name"]) {
  let item = registry.items.find((c: any) => c.name === name);

  // If not found in registry, try to load from demo files directly
  if (!item) {
    const demoPath = `app/demo/[name]/examples/${name}.tsx`;
    try {
      const filePath = path.join(process.cwd(), demoPath);
      const content = await fs.readFile(filePath, "utf8");
      
      // Create a synthetic registry item for the demo
      // Return the demo file directly with content
      return {
        name,
        type: "registry:example",
        files: [
          {
            path: demoPath,
            type: "registry:example",
            target: `app/examples/${name}.tsx`,
            content,
          },
        ],
      } as any;
    } catch (error) {
      console.warn(`Demo file not found: ${demoPath}`);
      return null;
    }
  }

  // Fail early before doing expensive file operations.
  const result = registryItemSchema.safeParse(item);
  if (!result.success) {
    return null;
  }

  let files: typeof result.data.files = [];
  
  if (item.files) {
    for (const file of item.files) {
      try {
        const filePath = path.join(process.cwd(), file.path);
        const content = await fs.readFile(filePath, "utf8");
        const target = (file as any).target || getFileTarget(file);

        files.push({
          ...file,
          path: file.path,
          content,
          target,
        });
      } catch (error) {
        console.warn(`File not found: ${file.path}`);
        const target = (file as any).target || getFileTarget(file);
        
        files.push({
          ...file,
          path: file.path,
          content: `// Component placeholder for ${file.path}\nexport default function Component() {\n  return <div>Component ${name} is not yet implemented</div>\n}`,
          target,
        });
      }
    }
  }

  const parsed = registryItemSchema.safeParse({
    ...result.data,
    files,
  });

  if (!parsed.success) {
    console.error(parsed.error.message);
    return null;
  }

  return parsed.data;
}

// File tree utilities
export type FileTree = {
  name: string;
  path?: string;
  children?: FileTree[];
};

export function createFileTreeForRegistryItemFiles(
  files: Array<{ path: string; target?: string }>
) {
  const root: FileTree[] = [];

  for (const file of files) {
    const path = file.target ?? file.path;
    const parts = path.split("/");
    let currentLevel = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isFile = i === parts.length - 1;
      const existingNode = currentLevel.find((node) => node.name === part);

      if (existingNode) {
        if (isFile) {
          // Update existing file node with full path
          existingNode.path = path;
        } else {
          // Move to next level in the tree
          currentLevel = existingNode.children!;
        }
      } else {
        const newNode: FileTree = isFile
          ? { name: part, path }
          : { name: part, children: [] };

        currentLevel.push(newNode);

        if (!isFile) {
          currentLevel = newNode.children!;
        }
      }
    }
  }

  return root;
}

// Resolve all registry dependencies recursively
export async function resolveRegistryDependencies(
  itemName: string,
  styleName: Style["name"],
  visited: Set<string> = new Set()
): Promise<z.infer<typeof registryItemFileSchema>[]> {
  // Prevent infinite recursion
  if (visited.has(itemName)) {
    return [];
  }
  visited.add(itemName);

  const item = await getRegistryItem(itemName, styleName);
  if (!item) {
    return [];
  }

  // Ensure files have correct targets
  const filesWithTargets = (item.files || []).map((file: any) => {
    const target = (file as any).target || getFileTarget(file);
    return {
      ...file,
      target,
    };
  });

  let allFiles: z.infer<typeof registryItemFileSchema>[] = [...filesWithTargets];

  // Recursively resolve registry dependencies
  if (item.registryDependencies) {
    for (const dep of item.registryDependencies) {
      // Skip URLs (external dependencies)
      if (dep.startsWith('http://') || dep.startsWith('https://')) {
        continue;
      }
      
      const depFiles = await resolveRegistryDependencies(
        dep,
        styleName,
        visited
      );
      allFiles = [...allFiles, ...depFiles];
    }
  }

  return allFiles;
}

// Get all files including dependencies for a registry item
export async function getRegistryItemWithDependencies(
  name: string,
  styleName: Style["name"]
) {
  const item = await getRegistryItem(name, styleName);
  if (!item) {
    return null;
  }

  const allFiles = await resolveRegistryDependencies(name, styleName);

  // Remove duplicates based on target path
  const uniqueFiles = allFiles.filter(
    (file, index, self) =>
      index ===
      self.findIndex((f) => (f.target || f.path) === (file.target || file.path))
  );

  return {
    ...item,
    files: uniqueFiles,
  };
}

