"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Code,
  LinkIcon,
  ImageIcon,
  Heading1,
  Heading2,
  Heading3,
  CheckSquare,
  Minus,
  Table,
  HelpCircle,
  Eye,
  Edit,
  FileCode,
  AlertTriangle,
  Info,
  CheckCircle,
  Strikethrough,
} from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  minHeight?: string
}

export function MarkdownEditor({
  value,
  onChange,
  placeholder = "Write here...",
  minHeight = "300px",
}: MarkdownEditorProps) {
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write")
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [selectionStart, setSelectionStart] = useState(0)
  const [selectionEnd, setSelectionEnd] = useState(0)

  // Track selection changes
  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    const handleSelectionChange = () => {
      setSelectionStart(textarea.selectionStart)
      setSelectionEnd(textarea.selectionEnd)
    }

    textarea.addEventListener("select", handleSelectionChange)
    textarea.addEventListener("click", handleSelectionChange)
    textarea.addEventListener("keyup", handleSelectionChange)

    return () => {
      textarea.removeEventListener("select", handleSelectionChange)
      textarea.removeEventListener("click", handleSelectionChange)
      textarea.removeEventListener("keyup", handleSelectionChange)
    }
  }, [])

  // Handle keyboard shortcuts
  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case "b":
            e.preventDefault()
            formatText("bold")
            break
          case "i":
            e.preventDefault()
            formatText("italic")
            break
          case "k":
            e.preventDefault()
            formatText("link")
            break
          case "1":
            if (e.shiftKey) {
              e.preventDefault()
              formatText("h1")
            }
            break
          case "2":
            if (e.shiftKey) {
              e.preventDefault()
              formatText("h2")
            }
            break
          case "3":
            if (e.shiftKey) {
              e.preventDefault()
              formatText("h3")
            }
            break
          case "`":
            e.preventDefault()
            formatText("code")
            break
          case "e":
            if (e.shiftKey) {
              e.preventDefault()
              setActiveTab(activeTab === "write" ? "preview" : "write")
            }
            break
        }
      }
    }

    textarea.addEventListener("keydown", handleKeyDown)
    return () => textarea.removeEventListener("keydown", handleKeyDown)
  }, [selectionStart, selectionEnd, activeTab])

  const formatText = (type: string) => {
    if (!textareaRef.current) return

    const textarea = textareaRef.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)
    let formattedText = ""
    let cursorOffset = 0
    let newCursorPos = 0

    switch (type) {
      case "bold":
        formattedText = `**${selectedText}**`
        cursorOffset = 2
        break
      case "italic":
        formattedText = `*${selectedText}*`
        cursorOffset = 1
        break
      case "strikethrough":
        formattedText = `~~${selectedText}~~`
        cursorOffset = 2
        break
      case "h1":
        // Check if we're at the start of a line
        if (start === 0 || value.charAt(start - 1) === "\n") {
          formattedText = `# ${selectedText}`
          cursorOffset = 2
        } else {
          // Insert a newline first
          formattedText = `\n# ${selectedText}`
          cursorOffset = 3
        }
        break
      case "h2":
        if (start === 0 || value.charAt(start - 1) === "\n") {
          formattedText = `## ${selectedText}`
          cursorOffset = 3
        } else {
          formattedText = `\n## ${selectedText}`
          cursorOffset = 4
        }
        break
      case "h3":
        if (start === 0 || value.charAt(start - 1) === "\n") {
          formattedText = `### ${selectedText}`
          cursorOffset = 4
        } else {
          formattedText = `\n### ${selectedText}`
          cursorOffset = 5
        }
        break
      case "link":
        formattedText = `[${selectedText || "Link text"}](url)`
        if (selectedText) {
          newCursorPos = start + selectedText.length + 3 // Position cursor at the url
        } else {
          newCursorPos = start + 1 // Position cursor at "Link text"
        }
        break
      case "image":
        formattedText = `![${selectedText || "Image description"}](url)`
        if (selectedText) {
          newCursorPos = start + selectedText.length + 4 // Position cursor at the url
        } else {
          newCursorPos = start + 2 // Position cursor at "Image description"
        }
        break
      case "quote":
        // Handle multiline quotes
        if (selectedText.includes("\n")) {
          const lines = selectedText.split("\n")
          formattedText = lines.map((line) => (line ? `> ${line}` : `>`)).join("\n")
        } else {
          if (start === 0 || value.charAt(start - 1) === "\n") {
            formattedText = `> ${selectedText}`
          } else {
            formattedText = `\n> ${selectedText}`
          }
        }
        cursorOffset = 2
        break
      case "code":
        if (selectedText.includes("\n")) {
          formattedText = `\`\`\`\n${selectedText}\n\`\`\``
          cursorOffset = 4
        } else {
          formattedText = `\`${selectedText}\``
          cursorOffset = 1
        }
        break
      case "unordered-list":
        if (selectedText.includes("\n")) {
          const lines = selectedText.split("\n")
          formattedText = lines.map((line) => (line ? `- ${line}` : line)).join("\n")
        } else {
          if (start === 0 || value.charAt(start - 1) === "\n") {
            formattedText = `- ${selectedText}`
          } else {
            formattedText = `\n- ${selectedText}`
          }
        }
        cursorOffset = 2
        break
      case "ordered-list":
        if (selectedText.includes("\n")) {
          const lines = selectedText.split("\n")
          formattedText = lines.map((line, i) => (line ? `${i + 1}. ${line}` : line)).join("\n")
        } else {
          if (start === 0 || value.charAt(start - 1) === "\n") {
            formattedText = `1. ${selectedText}`
          } else {
            formattedText = `\n1. ${selectedText}`
          }
        }
        cursorOffset = 3
        break
      case "task-list":
        if (selectedText.includes("\n")) {
          const lines = selectedText.split("\n")
          formattedText = lines.map((line) => (line ? `- [ ] ${line}` : line)).join("\n")
        } else {
          if (start === 0 || value.charAt(start - 1) === "\n") {
            formattedText = `- [ ] ${selectedText}`
          } else {
            formattedText = `\n- [ ] ${selectedText}`
          }
        }
        cursorOffset = 6
        break
      case "hr":
        if (start === 0 || value.charAt(start - 1) === "\n") {
          formattedText = `---\n${selectedText}`
        } else {
          formattedText = `\n---\n${selectedText}`
        }
        cursorOffset = 4
        break
      case "table":
        formattedText = `| Header 1 | Header 2 | Header 3 |\n| -------- | -------- | -------- |\n| Cell 1   | Cell 2   | Cell 3   |\n| Cell 4   | Cell 5   | Cell 6   |`
        cursorOffset = 0
        break
      case "info":
        formattedText = `> [!NOTE]\n> ${selectedText || "This is an informational note."}`
        cursorOffset = 0
        break
      case "warning":
        formattedText = `> [!WARNING]\n> ${selectedText || "This is a warning note."}`
        cursorOffset = 0
        break
      case "success":
        formattedText = `> [!TIP]\n> ${selectedText || "This is a success tip."}`
        cursorOffset = 0
        break
    }

    const newValue = value.substring(0, start) + formattedText + value.substring(end)
    onChange(newValue)

    // Set cursor position after formatting
    setTimeout(() => {
      textarea.focus()
      if (newCursorPos) {
        textarea.setSelectionRange(newCursorPos, newCursorPos)
      } else if (selectedText) {
        textarea.setSelectionRange(start, start + formattedText.length)
      } else {
        textarea.setSelectionRange(start + cursorOffset, start + cursorOffset)
      }
    }, 0)
  }

  // Custom components for ReactMarkdown
  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "")
      return !inline && match ? (
        <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div" {...props}>
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={`${className} bg-muted px-1.5 py-0.5 rounded text-sm font-mono`} {...props}>
          {children}
        </code>
      )
    },
    blockquote({ node, children, ...props }: any) {
      // Check for GitHub-style alerts
      const childrenString = String(children)
      if (childrenString.includes("[!NOTE]")) {
        return (
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4 rounded-r-md">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="text-blue-800 dark:text-blue-300">{children.toString().replace("[!NOTE]", "")}</div>
            </div>
          </div>
        )
      } else if (childrenString.includes("[!WARNING]")) {
        return (
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4 rounded-r-md">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div className="text-amber-800 dark:text-amber-300">{children.toString().replace("[!WARNING]", "")}</div>
            </div>
          </div>
        )
      } else if (childrenString.includes("[!TIP]")) {
        return (
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-4 rounded-r-md">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
              <div className="text-green-800 dark:text-green-300">{children.toString().replace("[!TIP]", "")}</div>
            </div>
          </div>
        )
      } else {
        return (
          <blockquote className="border-l-4 border-[#22AA86] pl-4 italic my-4 text-muted-foreground" {...props}>
            {children}
          </blockquote>
        )
      }
    },
    a({ node, children, ...props }: any) {
      return (
        <a className="text-[#22AA86] hover:underline" {...props}>
          {children}
        </a>
      )
    },
    img({ node, ...props }: any) {
      return <img className="max-w-full rounded-md my-4" {...props} />
    },
    table({ node, children, ...props }: any) {
      return (
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-border" {...props}>
            {children}
          </table>
        </div>
      )
    },
    th({ node, children, ...props }: any) {
      return (
        <th className="border border-border bg-muted px-4 py-2 text-left font-medium" {...props}>
          {children}
        </th>
      )
    },
    td({ node, children, ...props }: any) {
      return (
        <td className="border border-border px-4 py-2" {...props}>
          {children}
        </td>
      )
    },
    li({ node, children, ordered, checked, ...props }: any) {
      if (typeof checked === "boolean") {
        return (
          <li className="flex items-start gap-2 my-1" {...props}>
            <input type="checkbox" checked={checked} readOnly className="mt-1" />
            <span>{children}</span>
          </li>
        )
      }
      return (
        <li className="my-1" {...props}>
          {children}
        </li>
      )
    },
    h1({ node, children, ...props }: any) {
      return (
        <h1 className="text-2xl font-bold mt-6 mb-4" {...props}>
          {children}
        </h1>
      )
    },
    h2({ node, children, ...props }: any) {
      return (
        <h2 className="text-xl font-bold mt-5 mb-3" {...props}>
          {children}
        </h2>
      )
    },
    h3({ node, children, ...props }: any) {
      return (
        <h3 className="text-lg font-bold mt-4 mb-2" {...props}>
          {children}
        </h3>
      )
    },
    hr({ node, ...props }: any) {
      return <hr className="my-6 border-t border-border" {...props} />
    },
    p({ node, children, ...props }: any) {
      return (
        <p className="my-3" {...props}>
          {children}
        </p>
      )
    },
  }

  return (
    <div className="border rounded-md overflow-hidden">
      <Tabs
        defaultValue="write"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "write" | "preview")}
      >
        <div className="flex items-center justify-between border-b bg-muted/40 px-4">
          <TabsList className="h-12 bg-transparent p-0">
            <TabsTrigger
              value="write"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#22AA86] rounded-none px-4 h-12"
            >
              <Edit className="h-4 w-4 mr-2" />
              Write
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#22AA86] rounded-none px-4 h-12"
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center">
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => window.open("https://www.markdownguide.org/cheat-sheet/", "_blank")}
                  >
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Markdown Help</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <TabsContent value="write" className="p-0 m-0">
          <div className="bg-muted/40 border-b px-2 py-1 flex flex-wrap items-center gap-1">
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("h1")}>
                    <Heading1 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Heading 1 (Ctrl+Shift+1)</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("h2")}>
                    <Heading2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Heading 2 (Ctrl+Shift+2)</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("h3")}>
                    <Heading3 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Heading 3 (Ctrl+Shift+3)</TooltipContent>
              </Tooltip>

              <div className="h-4 w-px bg-border mx-1" />

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("bold")}>
                    <Bold className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Bold (Ctrl+B)</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("italic")}>
                    <Italic className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Italic (Ctrl+I)</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("strikethrough")}>
                    <Strikethrough className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Strikethrough</TooltipContent>
              </Tooltip>

              <div className="h-4 w-px bg-border mx-1" />

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => formatText("unordered-list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Bullet List</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("ordered-list")}>
                    <ListOrdered className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Numbered List</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("task-list")}>
                    <CheckSquare className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Task List</TooltipContent>
              </Tooltip>

              <div className="h-4 w-px bg-border mx-1" />

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("quote")}>
                    <Quote className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Quote</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("code")}>
                    <Code className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Code (Ctrl+`)</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("link")}>
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Link (Ctrl+K)</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("image")}>
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Image</TooltipContent>
              </Tooltip>

              <div className="h-4 w-px bg-border mx-1" />

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("hr")}>
                    <Minus className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Horizontal Rule</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("table")}>
                    <Table className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Table</TooltipContent>
              </Tooltip>

              <div className="h-4 w-px bg-border mx-1" />

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("info")}>
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Info Note</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("warning")}>
                    <AlertTriangle className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Warning Note</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => formatText("success")}>
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Success Note</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full p-4 focus:outline-none resize-none bg-background font-mono text-sm"
            style={{ minHeight }}
          />
        </TabsContent>

        <TabsContent value="preview" className="p-0 m-0">
          <div className="p-4" style={{ minHeight }}>
            {value ? (
              <ReactMarkdown
                className="prose dark:prose-invert max-w-none"
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                components={components}
              >
                {value}
              </ReactMarkdown>
            ) : (
              <div className="text-muted-foreground italic flex items-center justify-center h-full">
                Nothing to preview
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted/40 border-t px-3 py-2 text-xs text-muted-foreground flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileCode className="h-3.5 w-3.5" />
          <span>Markdown supported</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{value.length} characters</span>
          <span>•</span>
          <button
            type="button"
            className="text-primary hover:underline"
            onClick={() => setActiveTab(activeTab === "write" ? "preview" : "write")}
          >
            {activeTab === "write" ? "Preview" : "Write"}
          </button>
          <span className="text-xs">
            <kbd className="px-1 py-0.5 bg-muted rounded border text-[10px] font-mono">Ctrl+Shift+E</kbd>
          </span>
        </div>
      </div>
    </div>
  )
}
