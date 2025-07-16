import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Calendar, Heart, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, you would fetch this from your API
const stories = [
  {
    id: 30,
    title: "Voluptate voluptate quaerat fugit ipsam modi.",
    body: "Modi amet perspiciatis ipsam ipsa sunt. Quis iure reprehenderit excepturi consequatur quae amet iste.\n\nArchitecto nulla ea omnis. Error nihil iusto aliquam provident tempora rerum. Nulla vel odit ipsum commodi ad quos vel. Et consectetur pariatur nulla accusamus.",
    image_url: "https://picsum.photos/seed/story29/800/400",
    user: {
      id: 13,
      first_name: "Yuvraj",
      last_name: "Baria",
      role: "PATIENT",
      city: "Chennai",
      avatar_url: "https://i.pravatar.cc/150?img=12",
    },
    tags: [
      { id: 11, name: "lifestyle" },
      { id: 12, name: "nutrition" },
    ],
    like_count: 7,
    is_liked: false,
    views: 200,
    comment_count: 7,
    created_at: "2025-05-10T18:22:15.427583Z",
  },
  {
    id: 29,
    title: "Dolorum ducimus est praesentium itaque.",
    body: "Nostrum a vero illum. Recusandae illum quae autem earum dolor.\n\nVero voluptate sunt earum. Culpa blanditiis iusto at. Eveniet officiis soluta et ea exercitationem.",
    image_url: "https://picsum.photos/seed/story28/800/400",
    user: {
      id: 19,
      first_name: "Trisha",
      last_name: "Borde",
      role: "CAREGIVER",
      city: "Kolkata",
      avatar_url: "https://i.pravatar.cc/150?img=18",
    },
    tags: [
      { id: 2, name: "transplant" },
      { id: 6, name: "mental health" },
      { id: 8, name: "caregiving" },
    ],
    like_count: 6,
    is_liked: false,
    views: 174,
    comment_count: 4,
    created_at: "2025-05-10T18:22:15.405880Z",
  },
  {
    id: 28,
    title: "Illo sint sequi saepe.",
    body: "Dolor facere iure ducimus eligendi.\n\nExcepturi magnam qui culpa. Sequi occaecati odio cupiditate.\n\nId fugit odio eum sint. Repudiandae ratione nisi asperiores. Quos illum nam voluptatibus aperiam corrupti.",
    image_url: "https://picsum.photos/seed/story27/800/400",
    user: {
      id: 1,
      first_name: "Admin",
      last_name: "User",
      role: "ADMIN",
      city: "Mumbai",
      avatar_url: "",
    },
    tags: [
      { id: 2, name: "transplant" },
      { id: 6, name: "mental health" },
      { id: 12, name: "nutrition" },
    ],
    like_count: 0,
    is_liked: false,
    views: 49,
    comment_count: 5,
    created_at: "2025-05-10T18:22:15.391212Z",
  },
  {
    id: 27,
    title: "Veniam natus dignissimos magni corporis accusantium dolore nesciunt.",
    body: "Doloremque asperiores aliquam explicabo. Voluptate debitis id nesciunt ea.\n\nDignissimos modi distinctio assumenda quidem. Porro deleniti nam.",
    image_url: "https://picsum.photos/seed/story26/800/400",
    user: {
      id: 5,
      first_name: "Ishita",
      last_name: "Raj",
      role: "PATIENT",
      city: "Delhi",
      avatar_url: "https://i.pravatar.cc/150?img=4",
    },
    tags: [
      { id: 1, name: "dialysis" },
      { id: 6, name: "mental health" },
      { id: 10, name: "research" },
    ],
    like_count: 1,
    is_liked: false,
    views: 176,
    comment_count: 8,
    created_at: "2025-05-10T18:22:15.370193Z",
  },
  {
    id: 26,
    title: "Dicta natus maiores maiores delectus.",
    body: "Eius fuga labore eligendi qui perspiciatis. Temporibus laborum esse architecto laboriosam odit fuga quidem. Rerum et debitis tempore libero.",
    image_url: "https://picsum.photos/seed/story25/800/400",
    user: {
      id: 7,
      first_name: "Samiha",
      last_name: "Kulkarni",
      role: "PATIENT",
      city: "Hyderabad",
      avatar_url: "https://i.pravatar.cc/150?img=6",
    },
    tags: [
      { id: 8, name: "caregiving" },
      { id: 9, name: "treatment" },
      { id: 11, name: "lifestyle" },
    ],
    like_count: 0,
    is_liked: false,
    views: 31,
    comment_count: 3,
    created_at: "2025-05-10T18:22:15.356234Z",
  },
  {
    id: 25,
    title: "Reprehenderit nemo at tempore ut porro ipsum.",
    body: "Consectetur minima vero vitae esse minus. Harum sequi quidem libero aspernatur mollitia.\n\nSuscipit assumenda quo dolores qui doloribus hic. Non assumenda minima commodi necessitatibus odio dignissimos accusantium. Accusamus earum beatae cupiditate.",
    image_url: "https://picsum.photos/seed/story24/800/400",
    user: {
      id: 9,
      first_name: "Taran",
      last_name: "Butala",
      role: "CAREGIVER",
      city: "Kolkata",
      avatar_url: "https://i.pravatar.cc/150?img=8",
    },
    tags: [
      { id: 5, name: "exercise" },
      { id: 6, name: "mental health" },
      { id: 8, name: "caregiving" },
    ],
    like_count: 5,
    is_liked: false,
    views: 107,
    comment_count: 9,
    created_at: "2025-05-10T18:22:15.330501Z",
  },
]

// All unique tags from stories
const allTags = Array.from(new Set(stories.flatMap((story) => story.tags.map((tag) => tag.name)))).sort()

export default function StoriesPage() {
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
                  <span className="text-[#22AA86] font-medium text-sm tracking-wider">COMMUNITY STORIES</span>
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full ml-2"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Stories from <span className="text-[#22AA86]">Kidney Warriors</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Real experiences shared by patients and caregivers to inspire, educate, and connect our community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/stories/share">
                  <Button size="lg" className="bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl px-8">
                    Share Your Story
                  </Button>
                </Link>
                <form className="relative flex-1 max-w-xs mx-auto sm:mx-0">
                  <Input type="text" placeholder="Search stories..." className="pl-4 pr-12 py-6 rounded-xl" />
                  <Button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 bg-[#22AA86] hover:bg-[#1c8f70] rounded-lg"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Stories Content Section */}
        <section className="py-12 bg-background">
          <div className="container">
            {/* Filter and Sort Options */}
            <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-[#22AA86] text-white hover:bg-[#1c8f70] cursor-pointer">
                  All Stories
                </Badge>
                <Badge variant="outline" className="hover:bg-[#22AA86] hover:text-white cursor-pointer">
                  Patient Stories
                </Badge>
                <Badge variant="outline" className="hover:bg-[#22AA86] hover:text-white cursor-pointer">
                  Caregiver Stories
                </Badge>
                <Badge variant="outline" className="hover:bg-[#22AA86] hover:text-white cursor-pointer">
                  Most Popular
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="text-sm border rounded-md px-2 py-1 bg-background">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Most Commented</option>
                </select>
              </div>
            </div>

            {/* Featured Story */}
            <div className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-muted/30 dark:bg-muted/10 rounded-2xl overflow-hidden">
                <div className="h-full">
                  <img
                    src={stories[0].image_url || "/placeholder.svg"}
                    alt={stories[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {stories[0].tags.map((tag) => (
                      <Badge key={tag.id} className="bg-[#22AA86] text-white">
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{stories[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{getExcerpt(stories[0].body, 200)}</p>

                  <div className="flex items-center gap-3 mb-6">
                    <Avatar className="h-10 w-10 border-2 border-[#22AA86]/20">
                      <AvatarImage
                        src={stories[0].user.avatar_url || "/placeholder.svg"}
                        alt={`${stories[0].user.first_name} ${stories[0].user.last_name}`}
                      />
                      <AvatarFallback className="bg-[#22AA86]/10 text-[#22AA86]">
                        {stories[0].user.first_name[0]}
                        {stories[0].user.last_name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">
                        {stories[0].user.first_name} {stories[0].user.last_name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stories[0].user.role} • {stories[0].user.city}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(stories[0].created_at)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span>{stories[0].like_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{stories[0].comment_count}</span>
                      </div>
                    </div>
                    <Link href={`/stories/${stories[0].id}`}>
                      <Button className="bg-[#22AA86] hover:bg-[#1c8f70]">Read Full Story</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.slice(1).map((story) => (
                <div key={story.id} className="bg-muted/30 dark:bg-muted/10 rounded-xl overflow-hidden group">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={story.image_url || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {story.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag.id} className="bg-[#22AA86]/90 text-white backdrop-blur-sm">
                          {tag.name}
                        </Badge>
                      ))}
                      {story.tags.length > 2 && (
                        <Badge className="bg-black/50 text-white backdrop-blur-sm">+{story.tags.length - 2}</Badge>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#22AA86] transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{getExcerpt(story.body)}</p>

                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-8 w-8 border-2 border-[#22AA86]/20">
                        <AvatarImage
                          src={story.user.avatar_url || "/placeholder.svg"}
                          alt={`${story.user.first_name} ${story.user.last_name}`}
                        />
                        <AvatarFallback className="bg-[#22AA86]/10 text-[#22AA86]">
                          {story.user.first_name[0]}
                          {story.user.last_name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">
                          {story.user.first_name} {story.user.last_name}
                        </div>
                        <div className="text-xs text-muted-foreground">{story.user.role}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-muted-foreground text-xs">
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          <span>{story.like_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{story.comment_count}</span>
                        </div>
                      </div>
                      <Link href={`/stories/${story.id}`}>
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

            {/* Tags Section */}
            <div className="mt-12 bg-muted/30 dark:bg-muted/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Browse Stories by Tag</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge key={tag} variant="outline" className="hover:bg-[#22AA86] hover:text-white cursor-pointer">
                    {tag}
                  </Badge>
                ))}
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
                <h2 className="text-3xl font-bold mb-4">Ready to Share Your Journey?</h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Your story matters. Share your kidney health journey to inspire others and connect with a community
                  who understands.
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
