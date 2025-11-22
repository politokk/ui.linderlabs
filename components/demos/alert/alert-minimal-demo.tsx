import {
    Alert,
    AlertDescription,
  } from "@/components/ui/alert"
  
  export function AlertMinimalDemo() {
    return (
      <Alert>
        <AlertDescription>
          This one has a description only. No title. No icon.
        </AlertDescription>
      </Alert>
    )
  }