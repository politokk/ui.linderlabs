"use client"

import { useState } from "react"

import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ButtonGroupExportDemo() {
  const [exportType, setExportType] = useState("pdf")

  return (
    <ButtonGroup>
      <Input placeholder="filename" />
      <Select value={exportType} onValueChange={setExportType}>
        <SelectTrigger>
          <SelectValue asChild>
            <span>{exportType}</span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem value="pdf">pdf</SelectItem>
          <SelectItem value="xlsx">xlsx</SelectItem>
          <SelectItem value="csv">csv</SelectItem>
          <SelectItem value="json">json</SelectItem>
        </SelectContent>
      </Select>
    </ButtonGroup>
  )
}