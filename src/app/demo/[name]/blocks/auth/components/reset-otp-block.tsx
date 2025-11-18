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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

interface ResetOtpBlockProps extends React.ComponentProps<"div"> {
  onBackClick?: () => void
  onVerifyClick?: () => void
}

export function ResetOtpBlock({
  className,
  onBackClick,
  onVerifyClick,
  ...props
}: ResetOtpBlockProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Enter reset code</CardTitle>
          <CardDescription>
            We sent a code to{" "}
            <span className="font-medium text-foreground">name@example.com</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => {
            e.preventDefault()
            onVerifyClick?.()
          }}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="otp">Reset code</FieldLabel>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <FieldDescription>
                  Didn&apos;t receive the code?{" "}
                  <button type="button" className="underline underline-offset-4">
                    Resend code
                  </button>
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" className="w-full">
                  Verify code
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