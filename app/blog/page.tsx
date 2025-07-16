import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, MessageSquare, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, you would fetch this from your API
const blogPosts = [
  {
    id: 12,
    title: "Ullam quasi tenetur quae eum.",
    slug: "ullam-quasi-tenetur-quae-eum",
    content:
      "Voluptate perspiciatis perspiciatis suscipit beatae. Minima ex fugit quibusdam.\n\nOdit quis veritatis quo sed. Reiciendis reiciendis optio a molestiae. Vel iure reprehenderit facere necessitatibus.\n\nEveniet quod tenetur culpa repellat tempora facere. Neque saepe provident provident non perferendis enim eius.",
    thumbnail_url: "https://picsum.photos/seed/blog11/800/400",
    author: {
      id: 1,
      first_name: "Admin",
      last_name: "User",
      role: "ADMIN",
      avatar_url: "",
    },
    tags: [
      { id: 13, name: "wellness" },
      { id: 14, name: "community" },
    ],
    published: true,
    views: 482,
    comment_count: 6,
    created_at: "2025-05-10T18:22:15.708613Z",
  },
  {
    id: 10,
    title: "Architecto quaerat in eligendi.",
    slug: "architecto-quaerat-in-eligendi",
    content:
      "Nemo harum a pariatur at. Dolores libero explicabo voluptate praesentium minus.\n\nNesciunt aperiam dicta. Nobis sunt voluptate reiciendis. Dicta odit dolorum quam exercitationem quis accusantium. Atque sed voluptates necessitatibus ab culpa.",
    thumbnail_url: "https://picsum.photos/seed/blog9/800/400",
    author: {
      id: 1,
      first_name: "Admin",
      last_name: "User",
      role: "ADMIN",
      avatar_url: "",
    },
    tags: [
      { id: 3, name: "diet" },
      { id: 11, name: "lifestyle" },
      { id: 14, name: "community" },
    ],
    published: true,
    views: 454,
    comment_count: 5,
    created_at: "2025-05-10T18:22:15.673403Z",
  },
  {
    id: 8,
    title: "Blanditiis minima sit exercitationem optio et beatae.",
    slug: "blanditiis-minima-sit-exercitationem-optio-et-beatae",
    content:
      "Cupiditate numquam blanditiis molestias repellat iure. Culpa debitis nisi distinctio iusto.\n\nOmnis iure quam eius sapiente. Minus possimus aliquid quo.",
    thumbnail_url: "https://picsum.photos/seed/blog7/800/400",
    author: {
      id: 1,
      first_name: "Admin",
      last_name: "User",
      role: "ADMIN",
      avatar_url: "",
    },
    tags: [{ id: 11, name: "lifestyle" }],
    published: true,
    views: 467,
    comment_count: 5,
    created_at: "2025-05-10T18:22:15.641599Z",
  },
  {
    id: 6,
    title: "Consequatur quia quos suscipit mollitia ratione.",
    slug: "consequatur-quia-quos-suscipit-mollitia-ratione",
    content:
      "Sequi nostrum non ratione quas. Possimus nulla impedit cupiditate.\n\nBeatae aliquid ipsa quo id molestias commodi. Cum non in et eum provident fugiat. Impedit sit deleniti ratione autem.",
    thumbnail_url: "https://picsum.photos/seed/blog5/800/400",
    author: {
      id: 1,
      first_name: "Admin",
      last_name: "User",
      role: "ADMIN",
      avatar_url: "",
    },
    tags: [
      { id: 1, name: "dialysis" },
      { id: 2, name: "transplant" },
      { id: 4, name: "medication" },
    ],
    published: true,
    views: 293,
    comment_count: 4,
    created_at: "2025-05-10T18:22:15.607384Z",
  },
  {
    id: 5,
    title: "Molestias voluptatibus minima occaecati adipisci.",
    slug: "molestias-voluptatibus-minima-occaecati-adipisci",
    content:
      "Autem deserunt molestias saepe inventore. Non voluptas quisquam ipsam ea natus earum commodi.\n\nSapiente non animi cupiditate eius. Ea ea in numquam. Maxime porro dolorum nemo neque accusantium.",
    thumbnail_url: "https://picsum.photos/seed/blog4/800/400",
    author: {
      id: 1,
      first_name: "Admin",
      last_name: "User",
      role: "ADMIN",
      avatar_url: "",
    },
    tags: [
      { id: 6, name: "mental health" },
      { id: 12, name: "nutrition" },
      { id: 13, name: "wellness" },
    ],
    published: true,
    views: 128,
    comment_count: 11,
    created_at: "2025-05-10T18:22:15.577124Z",
  },
  {
    id: 3,
    title: "Consequuntur molestias fugiat iusto.",
    slug: "consequuntur-molestias-fugiat-iusto",
    content:
      "Nam vel inventore ex repellat unde doloremque. Commodi doloremque voluptates accusamus mollitia voluptas dicta. Repellendus praesentium voluptatum natus ipsa.",
    thumbnail_url: "https://picsum.photos/seed/blog2/800/400",
    author: {
      id: 1,
      first_name: "Admin",
      last_name: "User",
      role: "ADMIN",
      avatar_url: "",
    },
    tags: [{ id: 4, name: "medication" }],
    published: true,
    views: 379,
    comment_count: 2,
    created_at: "2025-05-10T18:22:15.535547Z",
  },
]

// All unique tags from blog posts
const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags.map((tag) => tag.name)))).sort()

export default function BlogPage() {
  // Format date to readable format
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Get excerpt from content
  const getExcerpt = (content: string, maxLength = 150) => {
    const plainText = content.replace(/\n/g, " ")
    if (plainText.length <= maxLength) return plainText
    return plainText.substring(0, maxLength) + "..."
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#22AA86]/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#22AA86]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center">
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full mr-2"></div>
                  <span className="text-[#22AA86] font-medium text-sm tracking-wider">BLOG & RESOURCES</span>
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full ml-2"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Insights for Your <span className="text-[#22AA86]">Kidney Health Journey</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Expert articles, patient stories, and the latest research to help you navigate kidney health with
                confidence.
              </p>

              <form className="relative max-w-xl mx-auto">
                <Input type="text" placeholder="Search articles..." className="pl-4 pr-12 py-6 rounded-xl" />
                <Button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-[#22AA86] hover:bg-[#1c8f70] rounded-lg"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-3/4">
                {/* Featured Post */}
                <div className="mb-12">
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img
                      src={blogPosts[0].thumbnail_url || "/placeholder.svg"}
                      alt={blogPosts[0].title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {blogPosts[0].tags.map((tag) => (
                          <Badge key={tag.id} className="bg-[#22AA86]/90 text-white backdrop-blur-sm">
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-3">{blogPosts[0].title}</h2>
                      <p className="text-white/80 mb-4 line-clamp-2">{getExcerpt(blogPosts[0].content)}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(blogPosts[0].created_at)}</span>
                          <span className="mx-2">•</span>
                          <Eye className="h-4 w-4" />
                          <span>{blogPosts[0].views} views</span>
                          <span className="mx-2">•</span>
                          <MessageSquare className="h-4 w-4" />
                          <span>{blogPosts[0].comment_count} comments</span>
                        </div>
                        <Link href={`/blog/${blogPosts[0].slug}`}>
                          <Button className="bg-white text-[#22AA86] hover:bg-white/90">Read More</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.slice(1).map((post) => (
                    <div key={post.id} className="bg-muted/30 dark:bg-muted/10 rounded-xl overflow-hidden group">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={post.thumbnail_url || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag.id} className="bg-[#22AA86]/90 text-white backdrop-blur-sm">
                              {tag.name}
                            </Badge>
                          ))}
                          {post.tags.length > 2 && (
                            <Badge className="bg-black/50 text-white backdrop-blur-sm">+{post.tags.length - 2}</Badge>
                          )}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#22AA86] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{getExcerpt(post.content)}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-muted-foreground text-xs">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(post.created_at)}</span>
                            <span className="mx-1">•</span>
                            <MessageSquare className="h-3 w-3" />
                            <span>{post.comment_count}</span>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="ghost" size="sm" className="text-[#22AA86] hover:text-[#1c8f70] p-0">
                              Read More
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="rounded-lg">
                      <ArrowRight className="h-4 w-4 rotate-180" />
                    </Button>
                    <Button variant="outline" className="rounded-lg bg-[#22AA86] text-white hover:bg-[#1c8f70]">
                      1
                    </Button>
                    <Button variant="outline" className="rounded-lg">
                      2
                    </Button>
                    <Button variant="outline" className="rounded-lg">
                      3
                    </Button>
                    <span className="mx-1">...</span>
                    <Button variant="outline" className="rounded-lg">
                      8
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-lg">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="space-y-8">
                  {/* Categories */}
                  <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Kidney Health</span>
                        <Badge variant="outline">12</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Diet & Nutrition</span>
                        <Badge variant="outline">8</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Treatment Options</span>
                        <Badge variant="outline">15</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Mental Wellbeing</span>
                        <Badge variant="outline">7</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Caregiver Support</span>
                        <Badge variant="outline">5</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Research & News</span>
                        <Badge variant="outline">10</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="hover:bg-[#22AA86] hover:text-white cursor-pointer"
                        >
                          {tag}
                        </Badge>
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

        {/* CTA Section */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#22AA86] to-[#1a8a6c] rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold mb-4">Have a Story to Share?</h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Your experience can inspire and help others on their kidney health journey. Share your story with our
                  community today.
                </p>
                <Link href="/stories/share">
                  <Button size="lg" className="bg-white text-[#22AA86] hover:bg-white/90 rounded-xl px-8">
                    Share Your Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
