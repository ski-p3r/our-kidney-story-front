import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Heart, MessageSquare, Share2, Calendar, Clock, ThumbsUp, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"

// Mock data for the story
const story = {
  id: "1",
  title: "My Transplant Journey: A New Beginning",
  content: `
## The Diagnosis

When I was first diagnosed with kidney disease, I was in complete shock. I had always been healthy, active, and suddenly my world was turned upside down. The doctor explained that my kidneys were functioning at only 15% capacity, and I would need to start dialysis soon.

### Starting Dialysis

Dialysis became my new normal. Three times a week, four hours each session. It was exhausting, both physically and mentally. I tried to maintain a positive attitude, but there were days when it felt impossible.

> "The hardest part wasn't the procedure itself, but the way it limited my life. I couldn't travel freely, couldn't make spontaneous plans, and was constantly tired."

## The Wait for a Transplant

Getting on the transplant list was a mix of hope and anxiety. The average wait time in India is 5-7 years, and every day felt like an eternity. My family members were tested, but unfortunately, none were compatible donors.

### The Call That Changed Everything

After 5 years on dialysis, I received the call that would change my life. My sister, who had been determined to help me despite our initial incompatibility, had found a paired donation program. Through this program, she would donate her kidney to another patient, and their donor would donate to me.

The surgery was scheduled for the following week. I remember feeling a mix of excitement, gratitude, and fear.

## Recovery and New Beginnings

The transplant surgery went smoothly, and I woke up feeling different almost immediately. The recovery wasn't easy - there were medication adjustments, frequent check-ups, and a constant fear of rejection. But with each passing day, I felt stronger.

Now, three years post-transplant, I've been able to:

- Return to work full-time
- Travel to places I'd always dreamed of visiting
- Start volunteering with kidney patient support groups
- Enjoy simple pleasures like swimming and hiking

## Lessons Learned

This journey has taught me so much about resilience, gratitude, and the importance of community. I've learned to:

1. Take nothing for granted
2. Find joy in small moments
3. Build a support network
4. Advocate for my health
5. Give back to others facing similar challenges

> [!NOTE]
> If you're considering becoming a living donor, please know that your gift can transform someone's life completely. The paired donation program is an incredible option when direct donation isn't possible.

> [!WARNING]
> Always follow your doctor's advice regarding medication. Skipping immunosuppressants, even for a day, can put your transplant at risk.

Here's a simple table showing my lab values before and after transplant:

| Test | Before Transplant | 1 Month After | Current |
| ---- | ----------------- | ------------- | ------- |
| Creatinine | 8.2 mg/dL | 1.4 mg/dL | 1.1 mg/dL |
| eGFR | 8 mL/min | 58 mL/min | 72 mL/min |
| BUN | 62 mg/dL | 18 mg/dL | 14 mg/dL |

\`\`\`javascript
// A simple function I created to track my medication schedule
function reminderSystem() {
  const medications = [
    { name: "Tacrolimus", timeOfDay: ["8:00", "20:00"] },
    { name: "Mycophenolate", timeOfDay: ["8:00", "14:00", "20:00"] },
    { name: "Prednisone", timeOfDay: ["8:00"] }
  ];
  
  // Set up alerts for each medication
  medications.forEach(med => {
    med.timeOfDay.forEach(time => {
      setAlert(med.name, time);
    });
  });
}
\`\`\`

---

If you're reading this and are on your own kidney health journey, please know that you're not alone. There are communities of support, medical advancements happening every day, and reasons to remain hopeful.
  `,
  author: {
    name: "Rahul Verma",
    image: "/indian-man-30s.png",
    bio: "Kidney transplant recipient, advocate for organ donation awareness, and software engineer from Mumbai.",
  },
  publishedAt: "2023-08-15T10:30:00Z",
  readingTime: "8 min read",
  tags: ["transplant", "dialysis", "recovery", "hope"],
  likes: 142,
  comments: 28,
  image: "/kidney-transplant-journey.png",
  relatedStories: [
    {
      id: "2",
      title: "Supporting My Father Through Dialysis",
      excerpt:
        "When my father was diagnosed with kidney failure, our family had to adapt quickly. Here's how we navigated the challenges of home dialysis...",
      author: "Priya S.",
      image: "/dialysis-care.png",
      tags: ["caregiving", "dialysis", "family"],
    },
    {
      id: "3",
      title: "How I Adapted to a Kidney-Friendly Diet",
      excerpt:
        "Changing my diet was one of the hardest parts of managing CKD. Here's how I found joy in kidney-friendly cooking while maintaining my cultural food traditions...",
      author: "Ananya P.",
      image: "/kidney-friendly-diet.png",
      tags: ["diet", "nutrition", "lifestyle"],
    },
    {
      id: "4",
      title: "Early Signs I Missed: My CKD Diagnosis Story",
      excerpt:
        "Looking back, there were warning signs I ignored for months. I'm sharing my experience to help others catch kidney disease early...",
      author: "Vikram M.",
      image: "/kidney-disease-diagnosis.png",
      tags: ["diagnosis", "awareness", "symptoms"],
    },
  ],
  comments: [
    {
      id: "c1",
      author: {
        name: "Meera K.",
        image: "/avatar-1.png",
      },
      content:
        "Thank you for sharing your journey, Rahul. My brother is currently on the transplant waiting list, and your story gives us hope. The paired donation program is something we hadn't considered - I'll definitely look into this option!",
      date: "3 days ago",
      likes: 12,
    },
    {
      id: "c2",
      author: {
        name: "Dr. Patel",
        image: "/avatar-2.png",
      },
      content:
        "As a nephrologist, I appreciate you sharing your experience so candidly. Patient stories like yours help others understand the emotional and physical journey of kidney disease and transplantation. The paired donation program has been a game-changer for many of my patients as well.",
      date: "1 week ago",
      likes: 24,
    },
    {
      id: "c3",
      author: {
        name: "Sanjay V.",
        image: "/avatar-3.png",
      },
      content:
        "I'm currently in my second year of dialysis and some days are really tough. Reading about your successful transplant gives me hope to keep going. If you don't mind me asking, how did you manage the mental health aspects during the waiting period?",
      date: "1 week ago",
      likes: 8,
    },
  ],
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
            <div className="text-blue-800 dark:text-blue-300">{children.toString().replace("[!NOTE]", "")}</div>
          </div>
        </div>
      )
    } else if (childrenString.includes("[!WARNING]")) {
      return (
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4 rounded-r-md">
          <div className="flex items-start gap-2">
            <div className="text-amber-800 dark:text-amber-300">{children.toString().replace("[!WARNING]", "")}</div>
          </div>
        </div>
      )
    } else if (childrenString.includes("[!TIP]")) {
      return (
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-4 rounded-r-md">
          <div className="flex items-start gap-2">
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

export default function StoryDetailPage({ params }: { params: { id: string } }) {
  // Redirect if someone tries to access /stories/share through the dynamic route
  if (params.id === "share") {
    // This is a server component, so we can't use client-side navigation
    // Instead, we'll display a message
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Incorrect Route</h1>
        <p className="mb-4">You're trying to access the share story page through an incorrect route.</p>
        <Link href="/stories/share" className="text-[#22AA86] hover:underline">
          Go to Share Story page
        </Link>
      </div>
    )
  }

  // In a real app, you would fetch the story data based on the ID
  const storyId = params.id

  // Format date
  const publishDate = new Date(story.publishedAt)
  const formattedDate = publishDate.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background to-muted/30 pt-8 pb-16">
          <div className="container">
            <Link href="/stories" className="inline-flex items-center text-muted-foreground hover:text-[#22AA86] mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to stories
            </Link>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {story.tags.map((tag) => (
                  <Badge key={tag} className="bg-[#22AA86]/10 text-[#22AA86] hover:bg-[#22AA86]/20">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{story.title}</h1>

              <div className="flex items-center gap-4 mb-8">
                <Avatar className="h-12 w-12 border-2 border-[#22AA86]/20">
                  <AvatarImage src={story.author.image || "/placeholder.svg"} alt={story.author.name} />
                  <AvatarFallback>{story.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{story.author.name}</div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {formattedDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {story.readingTime}
                    </div>
                  </div>
                </div>
              </div>

              {story.image && (
                <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-8">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-4 md:gap-8">
                {/* Story Content */}
                <div className="flex-1">
                  <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw, rehypeSanitize]}
                      components={components}
                    >
                      {story.content}
                    </ReactMarkdown>
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t">
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Heart className="h-4 w-4" />
                        <span>{story.likes}</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <MessageSquare className="h-4 w-4" />
                        <span>{story.comments.length}</span>
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>

                  <Separator className="my-8" />

                  {/* Author Bio */}
                  <div className="bg-muted/30 dark:bg-muted/10 rounded-lg p-6 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16 border-2 border-[#22AA86]/20">
                        <AvatarImage src={story.author.image || "/placeholder.svg"} alt={story.author.name} />
                        <AvatarFallback>{story.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg">{story.author.name}</h3>
                        <p className="text-muted-foreground">{story.author.bio}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View All Stories by {story.author.name}
                    </Button>
                  </div>

                  {/* Comments Section */}
                  <div>
                    <h3 className="text-xl font-bold mb-6">Comments ({story.comments.length})</h3>

                    <div className="space-y-6 mb-8">
                      {story.comments.map((comment) => (
                        <div key={comment.id} className="border-b pb-6">
                          <div className="flex items-start gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={comment.author.image || "/placeholder.svg"} alt={comment.author.name} />
                              <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <div className="font-medium">{comment.author.name}</div>
                                <div className="text-xs text-muted-foreground">{comment.date}</div>
                              </div>
                              <p className="text-sm mb-2">{comment.content}</p>
                              <div className="flex items-center gap-4">
                                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs gap-1">
                                  <ThumbsUp className="h-3 w-3" />
                                  <span>{comment.likes}</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                                  Reply
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Comment Form */}
                    <div className="bg-muted/30 dark:bg-muted/10 rounded-lg p-4">
                      <h4 className="font-medium mb-4">Leave a Comment</h4>
                      <div className="flex gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>Y</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <textarea
                            className="w-full p-3 rounded-lg border bg-background min-h-[100px] text-sm"
                            placeholder="Share your thoughts..."
                          ></textarea>
                          <div className="flex justify-end mt-2">
                            <Button className="bg-[#22AA86] hover:bg-[#1c8f70]">
                              <Send className="h-4 w-4 mr-2" />
                              Post Comment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Stories Section */}
        <section className="py-12 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Stories</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {story.relatedStories.map((relatedStory) => (
                  <Card key={relatedStory.id} className="overflow-hidden">
                    <div className="relative h-40">
                      <Image
                        src={relatedStory.image || "/placeholder.svg"}
                        alt={relatedStory.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {relatedStory.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs bg-[#22AA86]/5 text-[#22AA86] border-[#22AA86]/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="font-bold mb-2 line-clamp-2">{relatedStory.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{relatedStory.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-muted-foreground">By {relatedStory.author}</div>
                        <Link href={`/stories/${relatedStory.id}`}>
                          <Button variant="link" size="sm" className="h-auto p-0 text-[#22AA86]">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
