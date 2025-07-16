"use client"

import type React from "react"

import { useState, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MarkdownEditor } from "@/components/markdown-editor"
import { ImageUpload } from "@/components/image-upload"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, AlertTriangle, CheckCircle2, Info, User, FileText, ImageIcon, Check, X } from "lucide-react"
import Link from "next/link"

// Sample tags for the tag selector
const AVAILABLE_TAGS = [
  "dialysis",
  "transplant",
  "diet",
  "medication",
  "exercise",
  "mental health",
  "support",
  "caregiving",
  "treatment",
  "research",
  "lifestyle",
  "nutrition",
  "wellness",
  "community",
  "diagnosis",
  "recovery",
  "family",
  "technology",
  "advocacy",
  "education",
]

export default function ShareStoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-12 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#22AA86]/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#22AA86]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="container relative z-10">
            <Link href="/stories" className="inline-flex items-center text-muted-foreground hover:text-[#22AA86] mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to stories
            </Link>

            <div className="max-w-3xl mx-auto">
              <div className="inline-block mb-6">
                <div className="flex items-center">
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full mr-2"></div>
                  <span className="text-[#22AA86] font-medium text-sm tracking-wider">SHARE YOUR STORY</span>
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full ml-2"></div>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Share Your <span className="text-[#22AA86]">Kidney Health Journey</span>
              </h1>

              <p className="text-muted-foreground mb-8">
                Your story can inspire, educate, and support others in the kidney community. Share your experiences,
                challenges, and triumphs to help others on their journey.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <StoryForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function StoryForm() {
  const [activeTab, setActiveTab] = useState("story")
  const [storyContent, setStoryContent] = useState("")
  const [title, setTitle] = useState("")
  const [summary, setSummary] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [authorEmail, setAuthorEmail] = useState("")
  const [authorBio, setAuthorBio] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLDivElement>(null)

  const handleImageChange = (file: File | null) => {
    setImage(file)

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setImagePreview(null)
    }
  }

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    let isValid = true

    // Basic validation
    if (!title.trim()) {
      newErrors.title = "Title is required"
      isValid = false
    }

    if (!summary.trim()) {
      newErrors.summary = "Summary is required"
      isValid = false
    } else if (summary.length > 200) {
      newErrors.summary = "Summary must be 200 characters or less"
      isValid = false
    }

    if (!storyContent.trim()) {
      newErrors.content = "Story content is required"
      isValid = false
    }

    if (!authorName.trim()) {
      newErrors.authorName = "Author name is required"
      isValid = false
    }

    if (!authorEmail.trim()) {
      newErrors.authorEmail = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(authorEmail)) {
      newErrors.authorEmail = "Please enter a valid email address"
      isValid = false
    }

    if (selectedTags.length === 0) {
      newErrors.tags = "Please select at least one tag"
      isValid = false
    }

    if (!agreedToTerms) {
      newErrors.terms = "You must agree to the terms"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      // Scroll to the first error
      if (formRef.current) {
        const firstErrorElement = formRef.current.querySelector("[data-error='true']")
        if (firstErrorElement) {
          firstErrorElement.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      }
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus("success")
      // Reset form after successful submission
      setTitle("")
      setSummary("")
      setStoryContent("")
      setAuthorName("")
      setAuthorEmail("")
      setAuthorBio("")
      setSelectedTags([])
      setImage(null)
      setImagePreview(null)
      setAgreedToTerms(false)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === "success") {
    return (
      <Card className="border-green-200 dark:border-green-800/30 shadow-sm">
        <CardContent className="pt-6 pb-8 px-6 md:p-8 flex flex-col items-center text-center">
          <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-800/30 flex items-center justify-center mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Story Submitted Successfully!</h2>
          <p className="text-green-600 dark:text-green-500 mb-6 max-w-lg mx-auto">
            Thank you for sharing your story with our community. Your experience will help inspire others on their
            kidney health journey.
          </p>
          <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4 mb-6 w-full max-w-md">
            <h3 className="font-medium text-green-700 dark:text-green-400 mb-2">What happens next?</h3>
            <ul className="text-sm text-green-600 dark:text-green-500 text-left space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Our team will review your story within 3-5 business days</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>You'll receive an email notification when your story is published</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>We may contact you if we have any questions or need clarification</span>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 justify-center">
            <Link href="/stories">
              <Button
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
              >
                View All Stories
              </Button>
            </Link>
            <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => setSubmitStatus("idle")}>
              Share Another Story
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div ref={formRef}>
      {submitStatus === "error" && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-red-700 dark:text-red-400">Error Submitting Story</h4>
            <p className="text-red-600 dark:text-red-500">
              There was a problem submitting your story. Please try again or contact support if the issue persists.
            </p>
          </div>
        </div>
      )}

      <Card className="shadow-sm">
        <CardContent className="p-0">
          <Tabs defaultValue="story" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b px-6 py-3">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="story" className="data-[state=active]:bg-[#22AA86]/10">
                  <FileText className="h-4 w-4 mr-2" />
                  Story Details
                </TabsTrigger>
                <TabsTrigger value="author" className="data-[state=active]:bg-[#22AA86]/10">
                  <User className="h-4 w-4 mr-2" />
                  Author Info
                </TabsTrigger>
                <TabsTrigger value="media" className="data-[state=active]:bg-[#22AA86]/10">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Media & Tags
                </TabsTrigger>
              </TabsList>
            </div>

            <form onSubmit={handleSubmit}>
              <TabsContent value="story" className="p-6 space-y-6 mt-0">
                <div className="space-y-1.5" data-error={errors.title ? "true" : "false"}>
                  <Label htmlFor="title" className={`text-base ${errors.title ? "text-red-500" : ""}`}>
                    Story Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Give your story a meaningful title"
                    className={`${errors.title ? "border-red-500" : ""}`}
                  />
                  {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>

                <div className="space-y-1.5" data-error={errors.summary ? "true" : "false"}>
                  <Label htmlFor="summary" className={`text-base ${errors.summary ? "text-red-500" : ""}`}>
                    Summary <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Provide a brief summary of your story (max 200 characters)"
                    className={`resize-none ${errors.summary ? "border-red-500" : ""}`}
                    maxLength={200}
                  />
                  <div className="flex justify-between text-xs">
                    <p className={errors.summary ? "text-red-500" : "text-muted-foreground"}>
                      {errors.summary || "A short summary that will appear in story listings"}
                    </p>
                    <p className={summary.length > 180 ? "text-amber-500" : "text-muted-foreground"}>
                      {summary.length}/200
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5" data-error={errors.content ? "true" : "false"}>
                  <Label htmlFor="story-content" className={`text-base ${errors.content ? "text-red-500" : ""}`}>
                    Your Story <span className="text-red-500">*</span>
                  </Label>
                  <div className={errors.content ? "ring-1 ring-red-500 rounded-lg" : ""}>
                    <MarkdownEditor
                      value={storyContent}
                      onChange={setStoryContent}
                      placeholder="Share your kidney health journey here..."
                      minHeight="400px"
                    />
                  </div>
                  {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
                </div>

                <div className="flex justify-between pt-4">
                  <Button type="button" variant="outline" disabled>
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setActiveTab("author")}
                    className="bg-[#22AA86] hover:bg-[#1c8f70]"
                  >
                    Next: Author Info
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="author" className="p-6 space-y-6 mt-0">
                <div className="space-y-1.5" data-error={errors.authorName ? "true" : "false"}>
                  <Label htmlFor="author-name" className={`text-base ${errors.authorName ? "text-red-500" : ""}`}>
                    Your Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="author-name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Enter your full name"
                    className={`${errors.authorName ? "border-red-500" : ""}`}
                  />
                  {errors.authorName && <p className="text-red-500 text-sm">{errors.authorName}</p>}
                </div>

                <div className="space-y-1.5" data-error={errors.authorEmail ? "true" : "false"}>
                  <Label htmlFor="author-email" className={`text-base ${errors.authorEmail ? "text-red-500" : ""}`}>
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="author-email"
                    type="email"
                    value={authorEmail}
                    onChange={(e) => setAuthorEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className={`${errors.authorEmail ? "border-red-500" : ""}`}
                  />
                  {errors.authorEmail ? (
                    <p className="text-red-500 text-sm">{errors.authorEmail}</p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Your email will not be displayed publicly. We'll use it to notify you when your story is
                      published.
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="author-bio" className="text-base">
                    Short Bio <span className="text-muted-foreground font-normal">(optional)</span>
                  </Label>
                  <Textarea
                    id="author-bio"
                    value={authorBio}
                    onChange={(e) => setAuthorBio(e.target.value)}
                    placeholder="Tell us a bit about yourself"
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    A brief description that will appear alongside your story (max 150 characters)
                  </p>
                </div>

                <div className="flex justify-between pt-4">
                  <Button type="button" variant="outline" onClick={() => setActiveTab("story")}>
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setActiveTab("media")}
                    className="bg-[#22AA86] hover:bg-[#1c8f70]"
                  >
                    Next: Media & Tags
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="media" className="p-6 space-y-6 mt-0">
                <div className="space-y-1.5">
                  <Label htmlFor="featured-image" className="text-base">
                    Featured Image <span className="text-muted-foreground font-normal">(recommended)</span>
                  </Label>
                  <div className="mt-1.5">
                    <ImageUpload value={image} previewUrl={imagePreview} onChange={handleImageChange} />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    A compelling image can make your story more engaging. Recommended size: 1200×600 pixels.
                  </p>
                </div>

                <div className="space-y-1.5" data-error={errors.tags ? "true" : "false"}>
                  <Label htmlFor="tags" className={`text-base ${errors.tags ? "text-red-500" : ""}`}>
                    Tags <span className="text-red-500">*</span>
                  </Label>
                  <div className="border rounded-md p-3">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedTags.length > 0 ? (
                        selectedTags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-[#22AA86]/10 hover:bg-[#22AA86]/20 text-[#22AA86] cursor-pointer"
                            onClick={() => toggleTag(tag)}
                          >
                            {tag}
                            <X className="h-3 w-3 ml-1" />
                          </Badge>
                        ))
                      ) : (
                        <div className="text-sm text-muted-foreground italic">No tags selected</div>
                      )}
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-sm font-medium mb-2">Select from common tags:</p>
                      <div className="flex flex-wrap gap-2">
                        {AVAILABLE_TAGS.filter((tag) => !selectedTags.includes(tag))
                          .slice(0, 15)
                          .map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="cursor-pointer hover:bg-muted"
                              onClick={() => toggleTag(tag)}
                            >
                              {tag}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  </div>
                  {errors.tags && <p className="text-red-500 text-sm">{errors.tags}</p>}
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 rounded-lg p-4 flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-700 dark:text-blue-400">Before you submit</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-500">
                      All stories are reviewed by our team before publishing to ensure they meet our community
                      guidelines. We may reach out to you for clarification or minor edits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2" data-error={errors.terms ? "true" : "false"}>
                  <Checkbox
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    className={errors.terms ? "border-red-500" : ""}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className={`text-sm font-medium leading-none ${errors.terms ? "text-red-500" : ""}`}
                    >
                      I agree to the terms and conditions <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-muted-foreground">
                      By submitting, you agree that your story may be shared on our platform and potentially in other
                      kidney health educational materials.{" "}
                      <Link href="/legal/terms-of-service" className="text-[#22AA86] hover:underline">
                        View Terms
                      </Link>
                    </p>
                    {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button type="button" variant="outline" onClick={() => setActiveTab("author")}>
                    Back
                  </Button>
                  <Button type="submit" className="bg-[#22AA86] hover:bg-[#1c8f70]" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Story"}
                  </Button>
                </div>
              </TabsContent>
            </form>
          </Tabs>
        </CardContent>
      </Card>

      <div className="mt-8 bg-muted/30 dark:bg-muted/10 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Story Submission Guidelines</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-[#22AA86]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="h-4 w-4 text-[#22AA86]" />
            </div>
            <div>
              <h3 className="font-medium">Be authentic and personal</h3>
              <p className="text-sm text-muted-foreground">
                Share your genuine experiences, emotions, and insights. Personal stories resonate most with readers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-[#22AA86]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="h-4 w-4 text-[#22AA86]" />
            </div>
            <div>
              <h3 className="font-medium">Focus on your journey</h3>
              <p className="text-sm text-muted-foreground">
                Include challenges you've faced, how you've overcome them, and what you've learned along the way.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-[#22AA86]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="h-4 w-4 text-[#22AA86]" />
            </div>
            <div>
              <h3 className="font-medium">Respect privacy and medical boundaries</h3>
              <p className="text-sm text-muted-foreground">
                Avoid sharing specific medical advice or criticizing healthcare providers. Focus on your personal
                experience.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-[#22AA86]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="h-4 w-4 text-[#22AA86]" />
            </div>
            <div>
              <h3 className="font-medium">Include a message of hope</h3>
              <p className="text-sm text-muted-foreground">
                Even if your journey has been difficult, try to include insights or moments that might inspire others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
