import type { ComponentProps, HTMLAttributes } from "react"
import type { UIMessage } from "ai"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
    } from "@/components/ui/avatar"
import { MessageCircleIcon, UserIcon } from "lucide-react"

export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  from: UIMessage["role"]
}

export const Message = ({
  className,
  from,
  children,
  ...props
}: MessageProps) => (
  <div
    className={cn(
      "group mr-3 mb-4 flex gap-3",
      from === "user" ? "is-user justify-end" : "is-assistant justify-start",
      className
    )}
    {...props}
  >
    <div
      className={cn(
        "flex gap-3",
        from === "user" ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Avatar className="h-7 w-7 flex-shrink-0">
        {from === "user" ? (
          <>
            <AvatarImage
              src="/images/authors/linderlabs/linderlabs.jpg"
              alt="User"
            />
            <AvatarFallback>
              <UserIcon className="h-4 w-4" />
            </AvatarFallback>
          </>
        ) : (
          <AvatarFallback className="bg-primary-foreground text-primary border-primary-500 border">
              <MessageCircleIcon className="text-primary h-4 w-4" />
          </AvatarFallback>
        )}
      </Avatar>

      <div className="flex max-w-[80%] flex-col gap-2">{children}</div>
    </div>
  </div>
)

const messageContentVariants = cva(
  "flex flex-col gap-2 overflow-hidden rounded-lg text-sm",
  {
    variants: {
      variant: {
        contained: [
          "px-4 py-2",
          "group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground group-[.is-user]:rounded-[20px] group-[.is-user]:rounded-tr-[5px]",
          "group-[.is-assistant]:bg-muted/60 group-[.is-assistant]:text-foreground",
        ],
        flat: [
          "group-[.is-user]:bg-muted/60 group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-foreground",
          "group-[.is-assistant]:text-foreground",
        ],
      },
    },
    defaultVariants: {
      variant: "contained",
    },
  }
)

export type MessageContentProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof messageContentVariants>

export const MessageContent = ({
  children,
  className,
  variant,
  ...props
}: MessageContentProps) => (
  <div
    className={cn(messageContentVariants({ variant, className }))}
    {...props}
  >
    {children}
  </div>
)

export type MessageAvatarProps = ComponentProps<typeof Avatar> & {
  src: string
  name?: string
}

export const MessageAvatar = ({
  src,
  name,
  className,
  ...props
}: MessageAvatarProps) => (
  <Avatar className={cn("ring-border size-8 ring-1", className)} {...props}>
    <AvatarImage alt="" className="mt-0 mb-0" src={src} />
    <AvatarFallback>{name?.slice(0, 2) || "ME"}</AvatarFallback>
  </Avatar>
)
