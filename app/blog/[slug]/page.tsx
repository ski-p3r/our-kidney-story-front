import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, MessageSquare, Eye, Facebook, Twitter, Linkedin, Copy, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, you would fetch this based on the slug
const post = {
  id: 1,
  title: "Nemo quaerat accusantium repellendus magnam occaecati deleniti.",
  slug: "nemo-quaerat-accusantium-repellendus-magnam-occaecati-deleniti",
  content: `Dolores a eos consectetur adipisci. Inventore dolor dolor.

Nesciunt aut similique expedita fugiat tempora. Aliquam iure temporibus doloribus magnam veniam minus necessitatibus. Quae molestias sequi accusamus distinctio.

Suscipit adipisci consequatur porro odio nam nemo. Laborum soluta sunt.

At pariatur labore doloremque. Neque occaecati libero esse quod. Consequatur exercitationem vel suscipit ratione itaque beatae.

Commodi praesentium iusto. Occaecati ratione iusto.

Eius eligendi dolor consequatur quasi autem unde. Ullam iusto odio.

Ab dolore repellendus sed tenetur vel. Aspernatur ullam commodi eaque odit. Tempore nobis magni sequi itaque.

Sapiente autem et expedita. Maiores eligendi libero inventore. Itaque excepturi animi voluptas facilis voluptate. Ab sit commodi temporibus libero iure.`,
  thumbnail_url: "https://picsum.photos/seed/blog0/1200/600",
  author: {
    id: 1,
    email: "admin@ourkidneystory.com",
    first_name: "Admin",
    last_name: "User",
    role: "ADMIN",
    city: "Mumbai",
    avatar_url: "",
    created_at: "2025-05-10T18:21:52.170627Z",
  },
  tags: [
    { id: 6, name: "mental health" },
    { id: 7, name: "support" },
    { id: 9, name: "treatment" },
  ],
  published: true,
  views: 285,
  comment_count: 9,
  created_at: "2025-05-10T18:22:15.461501Z",
  updated_at: "2025-05-11T08:43:57.564968Z",
}

// Mock related posts
const relatedPosts = [
  {
    id: 5,
    title: "Molestias voluptatibus minima occaecati adipisci.",
    slug: "molestias-voluptatibus-minima-occaecati-adipisci",
    thumbnail_url: "https://picsum.photos/seed/blog4/800/400",
    created_at: "2025-05-10T18:22:15.577124Z",
  },
  {
    id: 6,
    title: "Consequatur quia quos suscipit mollitia ratione.",
    slug: "consequatur-quia-quos-suscipit-mollitia-ratione",
    thumbnail_url: "https://picsum.photos/seed/blog5/800/400",
    created_at: "2025-05-10T18:22:15.607384Z",
  },
  {
    id: 8,
    title: "Blanditiis minima sit exercitationem optio et beatae.",
    slug: "blanditiis-minima-sit-exercitationem-optio-et-beatae",
    thumbnail_url: "https://picsum.photos/seed/blog7/800/400",
    created_at: "2025-05-10T18:22:15.641599Z",
  },
]

// Mock comments
const comments = [
  {
    id: 1,
    user: {
      name: "Rahul Sharma",
      avatar: "https://i.pravatar.cc/150?img=1",
      role: "PATIENT",
    },
    content:
      "This article was incredibly helpful. I've been struggling with managing my diet since my diagnosis, and the tips here are practical and easy to follow.",
    created_at: "2025-05-11T10:23:15.461501Z",
    likes: 5,
  },
  {
    id: 2,
    user: {
      name: "Priya Patel",
      avatar: "https://i.pravatar.cc/150?img=5",
      role: "CAREGIVER",
    },
    content:
      "As a caregiver for my father who has CKD, I found this information invaluable. Would love to see more content about supporting family members through their treatment journey.",
    created_at: "2025-05-11T12:45:22.461501Z",
    likes: 3,
  },
  {
    id: 3,
    user: {
      name: "Dr. Anand Gupta",
      avatar: "https://i.pravatar.cc/150?img=3",
      role: "HEALTHCARE",
    },
    content:
      "I appreciate the accuracy of the medical information presented here. It's important for patients to have access to reliable resources like this.",
    created_at: "2025-05-11T14:12:05.461501Z",
    likes: 8,
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Format date to readable format
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Format content with paragraphs
  const formatContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mb-6">
        {paragraph}
      </p>
    ))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background to-muted/30 pt-8 pb-16">
          <div className="container">
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-[#22AA86] mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag.id} className="bg-[#22AA86] text-white">
                  {tag.name}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">{post.title}</h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-[#22AA86]/20">
                  <AvatarImage
                    src={post.author.avatar_url || "/placeholder.svg"}
                    alt={`${post.author.first_name} ${post.author.last_name}`}
                  />
                  <AvatarFallback className="bg-[#22AA86]/10 text-[#22AA86]">
                    {post.author.first_name[0]}
                    {post.author.last_name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">
                    {post.author.first_name} {post.author.last_name}
                  </div>
                  <div className="text-xs text-muted-foreground">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.created_at)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{post.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{post.comment_count} comments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 bg-background">
          <div className="container">
            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src={post.thumbnail_url || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <article className="prose dark:prose-invert max-w-none lg:prose-lg mb-12">
                  {formatContent(post.content)}
                </article>

                {/* Share Section */}
                <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-6 mb-12">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="text-lg font-medium">Share this article</h3>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>

                  <div className="space-y-6 mb-8">
                    {comments.map((comment) => (
                      <div key={comment.id} className="bg-muted/30 dark:bg-muted/10 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
                            <AvatarFallback className="bg-[#22AA86]/10 text-[#22AA86]">
                              {comment.user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="font-medium">{comment.user.name}</div>
                                <div className="text-xs text-muted-foreground flex items-center gap-2">
                                  <span>{comment.user.role}</span>
                                  <span>•</span>
                                  <span>{formatDate(comment.created_at)}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm mb-2">{comment.content}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <button className="hover:text-[#22AA86]">Like ({comment.likes})</button>
                              <button className="hover:text-[#22AA86]">Reply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Comment Form */}
                  <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-4">Leave a comment</h4>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Input placeholder="Your name" />
                        </div>
                        <div>
                          <Input placeholder="Your email" type="email" />
                        </div>
                      </div>
                      <div>
                        <Textarea placeholder="Your comment" className="min-h-[120px]" />
                      </div>
                      <Button className="bg-[#22AA86] hover:bg-[#1c8f70]">Post Comment</Button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="space-y-8">
                  {/* Author Bio */}
                  <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">About the Author</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16 border-2 border-[#22AA86]/20">
                        <AvatarImage
                          src={post.author.avatar_url || "/placeholder.svg"}
                          alt={`${post.author.first_name} ${post.author.last_name}`}
                        />
                        <AvatarFallback className="bg-[#22AA86]/10 text-[#22AA86] text-xl">
                          {post.author.first_name[0]}
                          {post.author.last_name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-lg">
                          {post.author.first_name} {post.author.last_name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {post.author.role} • {post.author.city}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Passionate about kidney health education and patient advocacy. Dedicated to providing reliable
                      information to help patients and caregivers navigate their kidney health journey.
                    </p>
                    <Button variant="outline" className="w-full">
                      View All Posts
                    </Button>
                  </div>

                  {/* Related Posts */}
                  <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                          <div className="group flex gap-3 items-start">
                            <img
                              src={relatedPost.thumbnail_url || "/placeholder.svg"}
                              alt={relatedPost.title}
                              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                            />
                            <div>
                              <h4 className="font-medium group-hover:text-[#22AA86] transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">{formatDate(relatedPost.created_at)}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-[#22AA86] rounded-xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                    <p className="text-white/80 mb-4">Get the latest kidney health articles delivered to your inbox.</p>
                    <form className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        className="bg-white/20 border-white/30 placeholder:text-white/60 text-white"
                      />
                      <Button className="w-full bg-white text-[#22AA86] hover:bg-white/90">Subscribe</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Articles Section */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">More Articles You Might Like</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <div key={post.id} className="bg-background rounded-xl overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.thumbnail_url || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#22AA86] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{formatDate(post.created_at)}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="text-[#22AA86] hover:text-[#1c8f70] p-0">
                        Read More
                        <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/blog">
                <Button className="bg-[#22AA86] hover:bg-[#1c8f70]">View All Articles</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
