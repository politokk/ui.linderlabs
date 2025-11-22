import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { CheckIcon, XIcon } from "lucide-react"

interface SetPasswordBlockProps extends React.ComponentProps<"div"> {
  onBackClick?: () => void
  onSetPasswordClick?: () => void
}

export function SetPasswordBlock({
  className,
  onBackClick,
  onSetPasswordClick,
  ...props
}: SetPasswordBlockProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Set your password</CardTitle>
          <CardDescription>
            Create a strong password for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => {
            e.preventDefault()
            onSetPasswordClick?.()
          }}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="password">New password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  required
                />
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-3 w-3" />
                    <span>At least 8 characters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XIcon className="h-3 w-3" />
                    <span>One uppercase letter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XIcon className="h-3 w-3" />
                    <span>One lowercase letter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XIcon className="h-3 w-3" />
                    <span>One number</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XIcon className="h-3 w-3" />
                    <span>One special character</span>
                  </div>
                </div>
              </Field>
              <Field>
                <FieldLabel htmlFor="confirm-password">Confirm password</FieldLabel>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                />
                <FieldDescription className="text-destructive">
                  Passwords do not match
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" className="w-full">
                  Set password
                </Button>
                <Button variant="ghost" type="button" className="w-full" onClick={onBackClick}>
                  Back to sign in
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}