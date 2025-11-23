"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import { useChat } from "@ai-sdk/react"
import {
  BarChartIcon,
  BookOpenIcon,
  BoxIcon,
  BrainIcon,
  CalculatorIcon,
  CodeSquareIcon,
  GraduationCapIcon,
  LightbulbIcon,
  MessageSquareIcon,
  NotepadTextIcon,
  PenToolIcon,
  SearchIcon,
} from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import {
  Action,
  Actions,
} from "./components/actions"
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "./components/conversation"
  import { Loader } from "./components/loader"
import {
  Message,
  MessageContent,
} from "./components/message"
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputAttachmentsCombobox,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputHeader,
  PromptInputModelSelect,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputSpeechButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
  type PromptInputMessage,
} from "./components/prompt-input"
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "./components/reasoning"
import { Response } from "./components/response"
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "./components/sources"
import {
  Suggestion,
  Suggestions,
} from "./components/suggestion"  
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { RefreshCcwIcon } from "lucide-react"
import { AudioLinesIcon } from "lucide-react"
import { VolumeIcon } from "lucide-react"
import { CheckIcon, CopyIcon, ThumbsUpIcon, ThumbsDownIcon, UserIcon, XIcon, EditIcon } from "lucide-react"

// Using ModelSelector component - no need for hardcoded models array

const suggestions = [
  { icon: BarChartIcon, text: "Analyze data", color: "#76d0eb" },
  { icon: BoxIcon, text: "Surprise me", color: "#76d0eb" },
  { icon: NotepadTextIcon, text: "Summarize text", color: "#ea8444" },
  { icon: CodeSquareIcon, text: "Write code", color: "#6c71ff" },
  { icon: GraduationCapIcon, text: "Get advice", color: "#76d0eb" },
  { icon: LightbulbIcon, text: "Brainstorm ideas", color: "#f59e0b" },
  { icon: BookOpenIcon, text: "Explain concept", color: "#10b981" },
  { icon: MessageSquareIcon, text: "Ask a question", color: "#8b5cf6" },
  { icon: PenToolIcon, text: "Write content", color: "#ef4444" },
  { icon: CalculatorIcon, text: "Solve math", color: "#06b6d4" },
]

// Demo messages to show the chatbot interface with sample conversation
const demoMessages = [
  {
    id: "demo-1",
    role: "user" as const,
    parts: [
      {
        type: "text" as const,
        text: "How can I use this chatbot component in my own project? Can I open it directly in V0?",
      },
    ],
  },
  {
    id: "demo-2",
    role: "assistant" as const,
    parts: [
      {
        type: "text" as const,
        text: 'Absolutely! You can open this component directly in V0 by visiting https://ui-linderlabs.vercel.app/chatbot and clicking the "Open in V0" button. This will let you customize the block immediately.',
      },
    ],
  },
]

const ChatBotDemo = () => {
  const [input, setInput] = useState("")
  const [model, setModel] = useState<string>("anthropic/claude-sonnet-4.5")
  const [webSearch, setWebSearch] = useState(false)
  const [reasoning, setReasoning] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { messages, sendMessage, status, regenerate, stop, setMessages } =
    useChat()

  // Track if we've initialized demo messages to prevent auto-scroll
  const [demoInitialized, setDemoInitialized] = useState(false)

  // Initialize demo messages on component mount
  useEffect(() => {
    if (messages.length === 0 && !demoInitialized) {
      setMessages(demoMessages)
      setDemoInitialized(true)
    }
  }, [messages.length, setMessages, demoInitialized])

  // Action states
  const [likedMessages, setLikedMessages] = useState<Record<string, boolean>>(
    {}
  )
  const [dislikedMessages, setDislikedMessages] = useState<
    Record<string, boolean>
  >({})
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [readingMessageId, setReadingMessageId] = useState<string | null>(null)
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null)
  const [editText, setEditText] = useState("")
  const [chatCreatedAt, setChatCreatedAt] = useState<Date>(new Date())

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text)
    const hasAttachments = Boolean(message.files?.length)

    if (!(hasText || hasAttachments)) {
      return
    }

    sendMessage(
      {
        text: message.text || "Sent with attachments",
        files: message.files,
      },
      {
        body: {
          model: model,
          webSearch: webSearch,
          reasoning: reasoning,
        },
      }
    )
    setInput("")
  }

  const handleCopy = async (messageId: string, text: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(messageId)
    toast.success("Copied to clipboard")
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleLike = (messageId: string) => {
    const isCurrentlyLiked = likedMessages[messageId]

    setLikedMessages((prev) => ({
      ...prev,
      [messageId]: !prev[messageId],
    }))

    if (!isCurrentlyLiked) {
      setDislikedMessages((prev) => ({
        ...prev,
        [messageId]: false,
      }))
      toast.success("Feedback received: Liked")
    } else {
      toast.info("Like removed")
    }
  }

  const handleDislike = (messageId: string) => {
    const isCurrentlyDisliked = dislikedMessages[messageId]

    setDislikedMessages((prev) => ({
      ...prev,
      [messageId]: !prev[messageId],
    }))

    if (!isCurrentlyDisliked) {
      setLikedMessages((prev) => ({
        ...prev,
        [messageId]: false,
      }))
      toast.success("Feedback received: Disliked")
    } else {
      toast.info("Dislike removed")
    }
  }

  const handleReadAloud = (messageId: string, text: string) => {
    if (readingMessageId === messageId) {
      window.speechSynthesis.cancel()
      setReadingMessageId(null)
      return
    }

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)

    utterance.onstart = () => {
      setReadingMessageId(messageId)
    }

    utterance.onend = () => {
      setReadingMessageId(null)
    }

    utterance.onerror = () => {
      setReadingMessageId(null)
    }

    window.speechSynthesis.speak(utterance)
  }

  const handleEdit = (messageId: string, content: string) => {
    setEditText(content)
    setEditingMessageId(messageId)
  }

  const handleSaveEdit = (messageId: string) => {
    if (editText.trim()) {
      toast.success("Message updated!")
      setEditingMessageId(null)
      setEditText("")
      // Here you would update the actual message in your chat system
    } else {
      toast.error("Message cannot be empty")
    }
  }

  const handleCancelEdit = () => {
    setEditingMessageId(null)
    setEditText("")
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  return (
    <TooltipProvider>
      <div className="relative mx-auto size-full h-screen max-w-4xl pt-2 pb-6">
        <div className="flex h-full flex-col">
          {/* Chat Date Badge */}
          <div className="mt-4 mb-4 flex justify-center">
            <Badge variant="defaultOutline">
              {chatCreatedAt.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              ,{" "}
              {chatCreatedAt.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
              })}
            </Badge>
          </div>
          <Conversation className="h-full" initial={false}>
            <ConversationContent>
              {messages.map((message, index) => {
                const isLastMessage = index === messages.length - 1
                const isLastAssistantMessage =
                  isLastMessage && message.role === "assistant"

                return (
                  <div key={message.id} className="group">
                    {message.role === "assistant" ? (
                      <>
                        {/* Sources */}
                        {message.parts.filter(
                          (part) => part.type === "source-url"
                        ).length > 0 && (
                          <Sources>
                            <SourcesTrigger
                              count={
                                message.parts.filter(
                                  (part) => part.type === "source-url"
                                ).length
                              }
                            />
                            {message.parts
                              .filter((part) => part.type === "source-url")
                              .map((part, i) => {
                                if (part.type === "source-url" && "url" in part) {
                                  return (
                                    <SourcesContent key={`${message.id}-${i}`}>
                                      <Source
                                        key={`${message.id}-${i}`}
                                        href={part.url}
                                        title={part.url}
                                      />
                                    </SourcesContent>
                                  )
                                }
                                return null
                              })}
                          </Sources>
                        )}

                        {/* Message parts */}
                        {message.parts.map((part, i) => {
                          switch (part.type) {
                            case "text":
                              return (
                                <Fragment key={`${message.id}-${i}`}>
                                  <Message from={message.role}>
                                    <MessageContent>
                                      <Response>{part.text}</Response>
                                    </MessageContent>
                                  </Message>
                                </Fragment>
                              )
                            case "reasoning":
                              return (
                                <Reasoning
                                  key={`${message.id}-${i}`}
                                  className="w-full"
                                  isStreaming={
                                    status === "streaming" &&
                                    i === message.parts.length - 1 &&
                                    message.id === messages.at(-1)?.id
                                  }
                                >
                                  <ReasoningTrigger />
                                  <ReasoningContent>
                                    {part.text}
                                  </ReasoningContent>
                                </Reasoning>
                              )
                            default:
                              return null
                          }
                        })}

                        {/* Actions for assistant messages */}
                        <Actions className="ml-11">
                          {isLastAssistantMessage && (
                            <Action
                              onClick={() => regenerate()}
                              tooltip="Regenerate"
                            >
                              <RefreshCcwIcon className="text-muted-foreground h-3.5 w-3.5" />
                            </Action>
                          )}

                          <Action
                            onClick={() => {
                              const textPart = message.parts.find(
                                (p) => p.type === "text"
                              )
                              if (textPart && textPart.type === "text") {
                                handleReadAloud(message.id, textPart.text)
                              }
                            }}
                            tooltip={
                              readingMessageId === message.id
                                ? "Stop reading"
                                : "Read aloud"
                            }
                          >
                            {readingMessageId === message.id ? (
                              <AudioLinesIcon className="text-primary h-3.5 w-3.5 animate-pulse" />
                            ) : (
                              <VolumeIcon className="text-muted-foreground h-3.5 w-3.5" />
                            )}
                          </Action>

                          <Action
                            onClick={() => {
                              const textPart = message.parts.find(
                                (p) => p.type === "text"
                              )
                              if (textPart && textPart.type === "text") {
                                handleCopy(message.id, textPart.text)
                              }
                            }}
                            tooltip={
                              copiedId === message.id ? "Copied!" : "Copy"
                            }
                          >
                            {copiedId === message.id ? (
                              <CheckIcon className="text-primary h-3.5 w-3.5" />
                            ) : (
                              <CopyIcon className="text-muted-foreground h-3.5 w-3.5" />
                            )}
                          </Action>

                          <Action
                            onClick={() => handleLike(message.id)}
                            tooltip="Like"
                            variant="like"
                          >
                            <ThumbsUpIcon
                              className={`h-3.5 w-3.5 ${
                                likedMessages[message.id]
                                  ? "[&_svg]:stroke-emerald-500 [&_svg]:text-emerald-500"
                                  : "text-muted-foreground"
                              }`}
                            />
                          </Action>

                          <Action
                            onClick={() => handleDislike(message.id)}
                            tooltip="Dislike"
                            variant="dislike"
                          >
                            <ThumbsDownIcon
                              className={`h-3.5 w-3.5 ${
                                dislikedMessages[message.id]
                                  ? "[&_svg]:text-destructive [&_svg]:stroke-destructive"
                                  : "text-muted-foreground"
                              }`}
                            />
                          </Action>
                        </Actions>
                      </>
                    ) : (
                      /* User message with actions to the left */
                      <div
                        className={cn("group mr-3 mb-4 flex justify-end gap-3")}
                      >
                        <div className="flex flex-row-reverse gap-3">
                          <Avatar className="h-7 w-7 flex-shrink-0">
                            <AvatarImage
                              src="/images/authors/linderlabs/linderlabs.jpg"
                              alt="User"
                            />
                            <AvatarFallback>
                              <UserIcon className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex max-w-[80%] flex-col gap-2">
                            <div className="flex flex-col items-end gap-1">
                              {editingMessageId === message.id ? (
                                <Textarea
                                  value={editText}
                                  onChange={(e) => setEditText(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (
                                      e.key === "Enter" &&
                                      (e.ctrlKey || e.metaKey)
                                    ) {
                                      e.preventDefault()
                                      handleSaveEdit(message.id)
                                    } else if (e.key === "Escape") {
                                      e.preventDefault()
                                      handleCancelEdit()
                                    }
                                  }}
                                  className="min-h-[60px] max-w-full resize-none text-sm"
                                  placeholder="Edit message..."
                                  autoFocus
                                />
                              ) : (
                                <>
                                  <div className="bg-primary text-primary-foreground rounded-[20px] rounded-tr-[5px] px-4 py-2 text-sm">
                                    {message.parts.find(
                                      (p) => p.type === "text"
                                    )?.type === "text" &&
                                      message.parts.find(
                                        (p) => p.type === "text"
                                      )?.text}
                                  </div>

                                  {/* Timestamp - shows on hover */}
                                  <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                                    <span className="text-muted-foreground ml-auto text-xs whitespace-nowrap">
                                      {new Date().toLocaleTimeString([], {
                                        hour: "numeric",
                                        minute: "2-digit",
                                      })}
                                    </span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Actions for user messages - positioned to the left */}
                          <Actions
                            className={`mt-2 self-start ${
                              editingMessageId === message.id
                                ? "opacity-100"
                                : ""
                            }`}
                          >
                            {editingMessageId === message.id ? (
                              <>
                                <Action
                                  onClick={handleCancelEdit}
                                  tooltip="Cancel (Esc)"
                                  variant="dislike"
                                >
                                  <XIcon className="text-muted-foreground h-3.5 w-3.5" />
                                </Action>

                                <Action
                                  onClick={() => handleSaveEdit(message.id)}
                                  tooltip="Save (Ctrl+Enter)"
                                  disabled={
                                    editText.trim() === "" ||
                                    editText.trim() ===
                                      (message.parts.find(
                                        (p) => p.type === "text"
                                      )?.type === "text" &&
                                        message.parts.find(
                                          (p) => p.type === "text"
                                        )?.text)
                                  }
                                >
                                  <CheckIcon
                                    className={`h-3.5 w-3.5 ${
                                      editText.trim() === "" ||
                                      editText.trim() ===
                                        (message.parts.find(
                                          (p) => p.type === "text"
                                        )?.type === "text" &&
                                          message.parts.find(
                                            (p) => p.type === "text"
                                          )?.text)
                                        ? "text-muted-foreground"
                                        : "text-primary"
                                    }`}
                                  />
                                </Action>
                              </>
                            ) : (
                              <>
                                <Action
                                  onClick={() => {
                                    const textPart = message.parts.find(
                                      (p) => p.type === "text"
                                    )
                                    if (textPart && textPart.type === "text") {
                                      handleEdit(message.id, textPart.text)
                                    }
                                  }}
                                  tooltip="Edit"
                                >
                                  <EditIcon className="text-muted-foreground h-3.5 w-3.5" />
                                </Action>

                                <Action
                                  onClick={() => {
                                    const textPart = message.parts.find(
                                      (p) => p.type === "text"
                                    )
                                    if (textPart && textPart.type === "text") {
                                      handleCopy(message.id, textPart.text)
                                    }
                                  }}
                                  tooltip={
                                    copiedId === message.id ? "Copied!" : "Copy"
                                  }
                                >
                                  {copiedId === message.id ? (
                                      <CheckIcon className="text-primary h-3.5 w-3.5" />
                                  ) : (
                                    <CopyIcon className="text-muted-foreground h-3.5 w-3.5" />
                                  )}
                                </Action>
                              </>
                            )}
                          </Actions>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
              {status === "submitted" && <Loader />}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>
          <Separator className="my-4" />
          <Suggestions>
            {suggestions.map(({ icon: Icon, text, color }) => (
              <Suggestion
                className="font-normal"
                key={text}
                onClick={() => handleSuggestionClick(text)}
                suggestion={text}
              >
                {Icon && <Icon size={16} style={{ color }} />}
                {text}
              </Suggestion>
            ))}
          </Suggestions>

          <PromptInput
            onSubmit={handleSubmit}
            className="mt-4"
            globalDrop
            multiple
          >
            <PromptInputHeader>
              <PromptInputAttachments>
                {(attachment) => <PromptInputAttachment data={attachment} />}
              </PromptInputAttachments>
            </PromptInputHeader>
            <PromptInputBody>
              <PromptInputTextarea
                onChange={(e) => setInput(e.target.value)}
                ref={textareaRef}
                value={input}
              />
            </PromptInputBody>
            <PromptInputFooter>
              <PromptInputTools>
                <PromptInputModelSelect
                  value={model}
                  onValueChange={setModel}
                  filterProviders={[
                    "anthropic",
                    "openai",
                    "google",
                    "xai",
                    "deepseek",
                    "perplexity",
                  ]}
                />
                <PromptInputActionMenu>
                  <PromptInputActionMenuTrigger />
                  <PromptInputActionMenuContent>
                    <PromptInputActionAddAttachments />
                  </PromptInputActionMenuContent>
                </PromptInputActionMenu>
                <PromptInputSpeechButton
                  onTranscriptionChange={setInput}
                  textareaRef={textareaRef}
                />

                <Tooltip>
                  <TooltipTrigger asChild>
                    <PromptInputButton
                      variant={webSearch ? "foreground" : "ghost"}
                      onClick={() => setWebSearch(!webSearch)}
                    >
                      <SearchIcon />
                    </PromptInputButton>
                  </TooltipTrigger>
                  <TooltipContent>
                    {webSearch ? "Disable web search" : "Enable web search"}
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <PromptInputButton
                      variant={reasoning ? "foreground" : "ghost"}
                      onClick={() => setReasoning(!reasoning)}
                    >
                      <BrainIcon />
                    </PromptInputButton>
                  </TooltipTrigger>
                  <TooltipContent>
                    {reasoning ? "Disable reasoning" : "Enable reasoning"}
                  </TooltipContent>
                </Tooltip>
              </PromptInputTools>

              <Tooltip>
                <TooltipTrigger asChild>
                  <PromptInputSubmit
                    disabled={
                      !input && status !== "submitted" && status !== "streaming"
                    }
                    status={status}
                    stop={stop}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  {status === "submitted" || status === "streaming"
                    ? "Stop generation"
                    : "Send message"}
                </TooltipContent>
              </Tooltip>
            </PromptInputFooter>
          </PromptInput>
        </div>
      </div>
    </TooltipProvider>
  )
}

export default ChatBotDemo
