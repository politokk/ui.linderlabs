'use client';
import { cva } from 'class-variance-authority';
import { Moon, Sun, Airplay } from 'lucide-react';
import { useTheme } from 'next-themes';
import { type HTMLAttributes, useLayoutEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const itemVariants = cva(
  'size-6.5 rounded-full p-1.5 text-fd-muted-foreground',
  {
    variants: {
      active: {
        true: 'bg-primary-foreground text-primary',
        false: 'text-fd-muted-foreground',
      },
    },
  },
);

const full = [
  ['light', Sun] as const,
  ['dark', Moon] as const,
];

export function ModeToggle({
  className,
  mode = 'light-dark',
  ...props
}: HTMLAttributes<HTMLElement> & {
  mode?: 'light-dark' | 'light-dark-system';
}) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  const container = cn(
    'inline-flex items-center rounded-lg border p-0',
    className,
  );

  if (mode === 'light-dark-system') {
    const value = mounted ? resolvedTheme : null;

    return (
      <button
        className={container}
        aria-label={`Toggle Theme`}
        onClick={() => setTheme(value === 'light' ? 'dark' : 'light')}
        data-theme-toggle=""
        {...props}
      >
        {full.map(([key, Icon]) => {
          return (
            <Icon
              key={key}
              {...(key === 'dark' && value === key && { fill: "currentColor" })}
              className={cn(itemVariants({ active: value === key }))}
            />
          );
        })}
      </button>
    );
  }

  const value = mounted ? theme : null;

  return (
    <div className={container} data-theme-toggle="" {...props}>
      {full.map(([key, Icon]) => (
        <button
          key={key}
          aria-label={key}
          className={cn(itemVariants({ active: value === key }))}
          onClick={() => setTheme(key)}
        >
          <Icon 
            className="size-full" 
            {...(key === 'dark' && value === key && { fill: "currentColor" })}
          />
        </button>
      ))}
    </div>
  );
}