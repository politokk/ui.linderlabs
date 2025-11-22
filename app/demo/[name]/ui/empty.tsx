

import {
  IconBell,
  IconBookmark,
  IconCloud,
  IconFolderCode,
} from "@tabler/icons-react"
import { SearchIcon, UserIcon, UsersIcon } from "lucide-react"

import { EmptyInputGroup } from "@/components/demos/empty/empty-input-group"
import { EmptyOutline } from "@/components/demos/empty/empty-outline"
import { EmptyIcon } from "@/components/demos/empty/empty-icon"
import { EmptyDemo } from "@/components/demos/empty/empty-demo"
import { EmptyMuted } from "@/components/demos/empty/empty-background"
import { EmptyAvatar } from "@/components/demos/empty/empty-avatar"
import { EmptyAvatarGroup } from "@/components/demos/empty/empty-avatar-group"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "empty/empty-demo",
    icon: <IconFolderCode />,
    component: EmptyDemo,
  },
  {
    name: "empty/empty-input-group",
    icon: <SearchIcon />,
    component: EmptyInputGroup,
  },
  {
    name: "empty/empty-outline",
    icon: <IconCloud />,
    component: EmptyOutline,
  },
  {
    name: "empty/empty-icon",
    icon: <IconBookmark />,
    component: EmptyIcon,
  },
  {
    name: "empty/empty-background",
    icon: <IconBell />,
    component: EmptyMuted,
  },
  {
    name: "empty/empty-avatar",
    icon: <UserIcon />,
    component: EmptyAvatar,
  },
  {
    name: "empty/empty-avatar-group",
    icon: <UsersIcon />,
    component: EmptyAvatarGroup,
  },
]

export default async function EmptyPage() {
  

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 mt-15">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((comp) => (
          <ComponentDisplay
            key={comp.name}
            path={comp.name}
            icon={comp.icon}
            className="w-full max-w-md mx-auto py-0"
          >
            <comp.component />
          </ComponentDisplay>
        ))}
      </div>
    </div>
  )
}