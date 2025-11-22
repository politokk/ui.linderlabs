"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  } from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const modelsByProvider = {
  anthropic: [
    { value: "anthropic/claude-opus-4.1", label: "Claude Opus 4.1" },
    { value: "anthropic/claude-opus-4", label: "Claude Opus 4" },
    { value: "anthropic/claude-sonnet-4.5", label: "Claude Sonnet 4.5" },
    { value: "anthropic/claude-sonnet-4", label: "Claude Sonnet 4" },
    { value: "anthropic/claude-3.7-sonnet", label: "Claude 3.7 Sonnet" },
    { value: "anthropic/claude-3.5-sonnet", label: "Claude 3.5 Sonnet" },
    {
      value: "anthropic/claude-3.5-sonnet-20240620",
      label: "Claude 3.5 Sonnet (2024-06-20)",
    },
    { value: "anthropic/claude-3.5-haiku", label: "Claude 3.5 Haiku" },
    { value: "anthropic/claude-3-opus", label: "Claude 3 Opus" },
    { value: "anthropic/claude-3-haiku", label: "Claude 3 Haiku" },
  ],
  openai: [
    { value: "openai/o4-mini", label: "O4 Mini" },
    { value: "openai/o3", label: "O3" },
    { value: "openai/o3-mini", label: "O3 Mini" },
    { value: "openai/o1", label: "O1" },
    { value: "openai/gpt-5-pro", label: "GPT-5 Pro" },
    { value: "openai/gpt-5", label: "GPT-5" },
    { value: "openai/gpt-5-codex", label: "GPT-5 Codex" },
    { value: "openai/gpt-5-mini", label: "GPT-5 Mini" },
    { value: "openai/gpt-5-nano", label: "GPT-5 Nano" },
    { value: "openai/gpt-4.1", label: "GPT-4.1" },
    { value: "openai/gpt-4.1-mini", label: "GPT-4.1 Mini" },
    { value: "openai/gpt-4.1-nano", label: "GPT-4.1 Nano" },
    { value: "openai/gpt-4o", label: "GPT-4o" },
    { value: "openai/gpt-4o-mini", label: "GPT-4o Mini" },
    { value: "openai/gpt-4-turbo", label: "GPT-4 Turbo" },
    { value: "openai/gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
    { value: "openai/gpt-3.5-turbo-instruct", label: "GPT-3.5 Turbo Instruct" },
    { value: "openai/gpt-oss-120b", label: "GPT OSS 120B" },
    { value: "openai/gpt-oss-20b", label: "GPT OSS 20B" },
    { value: "openai/text-embedding-3-large", label: "Text Embedding 3 Large" },
    { value: "openai/text-embedding-3-small", label: "Text Embedding 3 Small" },
    { value: "openai/text-embedding-ada-002", label: "Text Embedding Ada 002" },
  ],
  google: [
    { value: "google/gemini-2.5-pro", label: "Gemini 2.5 Pro" },
    { value: "google/gemini-2.5-flash", label: "Gemini 2.5 Flash" },
    { value: "google/gemini-2.5-flash-lite", label: "Gemini 2.5 Flash Lite" },
    {
      value: "google/gemini-2.5-flash-preview-09-2025",
      label: "Gemini 2.5 Flash Preview",
    },
    {
      value: "google/gemini-2.5-flash-lite-preview-09-2025",
      label: "Gemini 2.5 Flash Lite Preview",
    },
    { value: "google/gemini-2.5-flash-image", label: "Gemini 2.5 Flash Image" },
    { value: "google/gemini-2.0-flash", label: "Gemini 2.0 Flash" },
    { value: "google/gemini-2.0-flash-lite", label: "Gemini 2.0 Flash Lite" },
    { value: "google/gemma-2-9b", label: "Gemma 2 9B" },
    { value: "google/text-embedding-005", label: "Text Embedding 005" },
    {
      value: "google/text-multilingual-embedding-002",
      label: "Text Multilingual Embedding 002",
    },
    { value: "google/gemini-embedding-001", label: "Gemini Embedding 001" },
  ],
  xai: [
    { value: "xai/grok-4", label: "Grok 4" },
    { value: "xai/grok-4-fast-reasoning", label: "Grok 4 Fast Reasoning" },
    {
      value: "xai/grok-4-fast-non-reasoning",
      label: "Grok 4 Fast Non-Reasoning",
    },
    { value: "xai/grok-code-fast-1", label: "Grok Code Fast 1" },
    { value: "xai/grok-3", label: "Grok 3" },
    { value: "xai/grok-3-mini", label: "Grok 3 Mini" },
    { value: "xai/grok-3-mini-fast", label: "Grok 3 Mini Fast" },
    { value: "xai/grok-3-fast", label: "Grok 3 Fast" },
    { value: "xai/grok-2", label: "Grok 2" },
    { value: "xai/grok-2-vision", label: "Grok 2 Vision" },
  ],
  meta: [
    { value: "meta/llama-4-maverick", label: "Llama 4 Maverick" },
    { value: "meta/llama-4-scout", label: "Llama 4 Scout" },
    { value: "meta/llama-3.3-70b", label: "Llama 3.3 70B" },
    { value: "meta/llama-3.2-90b", label: "Llama 3.2 90B" },
    { value: "meta/llama-3.2-11b", label: "Llama 3.2 11B" },
    { value: "meta/llama-3.2-3b", label: "Llama 3.2 3B" },
    { value: "meta/llama-3.2-1b", label: "Llama 3.2 1B" },
    { value: "meta/llama-3.1-70b", label: "Llama 3.1 70B" },
    { value: "meta/llama-3.1-8b", label: "Llama 3.1 8B" },
    { value: "meta/llama-3-70b", label: "Llama 3 70B" },
    { value: "meta/llama-3-8b", label: "Llama 3 8B" },
  ],
  deepseek: [
    { value: "deepseek/deepseek-v3.2-exp", label: "DeepSeek V3.2 Exp" },
    {
      value: "deepseek/deepseek-v3.2-exp-thinking",
      label: "DeepSeek V3.2 Exp Thinking",
    },
    { value: "deepseek/deepseek-v3.1", label: "DeepSeek V3.1" },
    {
      value: "deepseek/deepseek-v3.1-terminus",
      label: "DeepSeek V3.1 Terminus",
    },
    { value: "deepseek/deepseek-v3.1-base", label: "DeepSeek V3.1 Base" },
    { value: "deepseek/deepseek-v3", label: "DeepSeek V3" },
    { value: "deepseek/deepseek-r1", label: "DeepSeek R1" },
    {
      value: "deepseek/deepseek-r1-distill-llama-70b",
      label: "DeepSeek R1 Distill Llama 70B",
    },
  ],
  mistral: [
    { value: "mistral/magistral-medium-2506", label: "Magistral Medium 2506" },
    { value: "mistral/magistral-medium", label: "Magistral Medium" },
    { value: "mistral/magistral-small-2506", label: "Magistral Small 2506" },
    { value: "mistral/magistral-small", label: "Magistral Small" },
    { value: "mistral/mistral-large", label: "Mistral Large" },
    { value: "mistral/mistral-medium", label: "Mistral Medium" },
    { value: "mistral/mistral-small", label: "Mistral Small" },
    { value: "mistral/pixtral-large", label: "Pixtral Large" },
    { value: "mistral/pixtral-12b", label: "Pixtral 12B" },
    { value: "mistral/codestral", label: "Codestral" },
    { value: "mistral/devstral-small", label: "Devstral Small" },
    { value: "mistral/ministral-8b", label: "Ministral 8B" },
    { value: "mistral/ministral-3b", label: "Ministral 3B" },
    {
      value: "mistral/mixtral-8x22b-instruct",
      label: "Mixtral 8x22B Instruct",
    },
    { value: "mistral/codestral-embed", label: "Codestral Embed" },
    { value: "mistral/mistral-embed", label: "Mistral Embed" },
  ],
  perplexity: [
    { value: "perplexity/sonar-pro", label: "Sonar Pro" },
    { value: "perplexity/sonar-reasoning-pro", label: "Sonar Reasoning Pro" },
    { value: "perplexity/sonar-reasoning", label: "Sonar Reasoning" },
    { value: "perplexity/sonar", label: "Sonar" },
  ],
  amazon: [
    { value: "amazon/nova-pro", label: "Nova Pro" },
    { value: "amazon/nova-lite", label: "Nova Lite" },
    { value: "amazon/nova-micro", label: "Nova Micro" },
    { value: "amazon/titan-embed-text-v2", label: "Titan Embed Text V2" },
  ],
  vercel: [
    { value: "vercel/v0-1.5-md", label: "V0 1.5 MD" },
    { value: "vercel/v0-1.0-md", label: "V0 1.0 MD" },
  ],
}

const providerLabels = {
  anthropic: "Anthropic",
  openai: "OpenAI",
  google: "Google",
  xai: "xAI",
  meta: "Meta",
  deepseek: "DeepSeek",
  alibaba: "Alibaba",
  mistral: "Mistral",
  perplexity: "Perplexity",
  zai: "ZAI",
  amazon: "Amazon",
  cohere: "Cohere",
  moonshotai: "MoonshotAI",
  vercel: "Vercel",
  meituan: "Meituan",
  morph: "Morph",
  voyage: "Voyage",
  inception: "Inception",
}

const providerIcons = {
  anthropic: Icons.claude,
  openai: Icons.openai,
  google: Icons.gemini,
  amazon: Icons.nova,
  xai: Icons.xai,
  meta: Icons.meta,
  deepseek: Icons.deepseek,
  mistral: Icons.mistral,
  perplexity: Icons.perplexity,
  vercel: Icons.v0,
}

interface ModelSelectorProps {
  value?: string
  onValueChange?: (value: string) => void
  filterProviders?: string[]
  disabled?: boolean
}

export function ModelSelector({
  value: controlledValue,
  onValueChange,
  filterProviders,
  disabled = false,
}: ModelSelectorProps = {}) {
  const [open, setOpen] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState(
    "anthropic/claude-sonnet-4.5"
  )

  const value = controlledValue ?? internalValue
  const setValue = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)
  }

  const getModelLabel = (modelValue: string) => {
    for (const provider in modelsByProvider) {
      const model = modelsByProvider[
        provider as keyof typeof modelsByProvider
      ].find((m) => m.value === modelValue)
      if (model) return model.label
    }
    return ""
  }

  const getProviderFromValue = (modelValue: string) => modelValue.split("/")[0]

  const getCurrentIcon = () => {
    const provider = getProviderFromValue(value)
    const ProviderIcon = providerIcons[provider as keyof typeof providerIcons]
    return ProviderIcon ? (
      <ProviderIcon className="h-4 w-4" />
    ) : (
      <ChevronsUpDown className="h-4 w-4" />
    )
  }

  const filteredProviders = filterProviders
    ? Object.entries(modelsByProvider).filter(([provider]) =>
        filterProviders.includes(provider)
      )
    : Object.entries(modelsByProvider)

  return (
    <Tooltip>
      <Popover open={open} onOpenChange={setOpen}>
        {/* This Button is BOTH the TooltipTrigger and PopoverTrigger */}
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="iconSm"
              aria-label={getModelLabel(value) || "Select AI model"}
              disabled={disabled}
            >
              {getCurrentIcon()}
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>

        <PopoverContent className="w-[280px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search models..." className="h-9" />
            <CommandList>
              <CommandEmpty>No model found.</CommandEmpty>
              {filteredProviders.map(([provider, models]) => {
                const ProviderIcon =
                  providerIcons[provider as keyof typeof providerIcons]
                return (
                  <CommandGroup
                    key={provider}
                    heading={
                      providerLabels[provider as keyof typeof providerLabels]
                    }
                  >
                    {models.map((model) => (
                      <CommandItem
                        key={model.value}
                        value={model.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue)
                          setOpen(false)
                        }}
                      >
                        {ProviderIcon && (
                          <ProviderIcon className="mr-2 h-4 w-4 shrink-0" />
                        )}
                        {model.label}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            value === model.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )
              })}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Tooltip content stays outside Popover as a sibling of TooltipTrigger */}
      <TooltipContent>{getModelLabel(value)}</TooltipContent>
    </Tooltip>
  )
}
