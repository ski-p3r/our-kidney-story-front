"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  ChevronLeft,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  ThumbsUp,
} from "lucide-react"
import Link from "next/link"
import ProductCard from "@/components/product-card"

interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  role: string
  city: string
  avatar_url: string
  created_at: string
}

interface Review {
  id: number
  product: number
  user: User
  rating: number
  comment: string
  created_at: string
}

interface Tag {
  id: number
  name: string
}

interface Category {
  id: number
  name: string
  description: string
  product_count: number
  created_at: string
}

interface Product {
  id: number
  title: string
  description: string
  image_url: string
  category: Category
  price: string
  in_stock: boolean
  tags: Tag[]
  average_rating: number
  review_count: number
  created_at: string
  updated_at: string
  reviews?: Review[]
}

// This is a placeholder product detail page
// In a real app, you would fetch the product data based on the ID
export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [isFavorite, setIsFavorite] = useState(false)
  const [helpfulReviews, setHelpfulReviews] = useState<number[]>([])

  // Mock product data - in a real app, you would fetch this from your API
  const product: Product = {
    id: 14,
    title: "Distributed logistical artificial intelligence",
    description:
      "Ad nesciunt distinctio. Maxime minima eos distinctio repellendus saepe adipisci. Autem esse reiciendis ea id.",
    image_url: "https://picsum.photos/seed/product13/800/800",
    category: {
      id: 5,
      name: "Kidney-Friendly Foods",
      description: "Foods specially formulated for kidney patients.",
      product_count: 5,
      created_at: "2025-05-10T18:22:16.780162Z",
    },
    price: "6581.38",
    in_stock: true,
    tags: [
      { id: 3, name: "diet" },
      { id: 7, name: "support" },
      { id: 10, name: "research" },
    ],
    average_rating: 3.2857142857142856,
    review_count: 7,
    created_at: "2025-05-10T18:22:17.151718Z",
    updated_at: "2025-05-10T18:22:17.151746Z",
    reviews: [
      {
        id: 55,
        product: 14,
        user: {
          id: 1,
          email: "admin@ourkidneystory.com",
          first_name: "Admin",
          last_name: "User",
          role: "ADMIN",
          city: "Mumbai",
          avatar_url: "",
          created_at: "2025-05-10T18:21:52.170627Z",
        },
        rating: 4,
        comment:
          "Quas quae dolorem impedit voluptatum porro. Quia mollitia harum magni. Dignissimos numquam vitae officiis.",
        created_at: "2025-05-10T18:22:17.186388Z",
      },
      {
        id: 54,
        product: 14,
        user: {
          id: 11,
          email: "magarpriyansh@example.net",
          first_name: "Gatik",
          last_name: "Raju",
          role: "PATIENT",
          city: "Pune",
          avatar_url: "https://i.pravatar.cc/150?img=10",
          created_at: "2025-05-10T18:22:03.182285Z",
        },
        rating: 3,
        comment:
          "Accusamus cupiditate sit doloremque iusto voluptates reiciendis. Cumque voluptatem laboriosam voluptas.",
        created_at: "2025-05-10T18:22:17.182241Z",
      },
      {
        id: 53,
        product: 14,
        user: {
          id: 5,
          email: "tsrinivas@example.net",
          first_name: "Ishita",
          last_name: "Raj",
          role: "PATIENT",
          city: "Delhi",
          avatar_url: "https://i.pravatar.cc/150?img=4",
          created_at: "2025-05-10T18:21:57.306278Z",
        },
        rating: 1,
        comment:
          "Magnam debitis odio modi nihil assumenda. Alias soluta sequi incidunt assumenda at doloribus. Occaecati nam ut cum quod.",
        created_at: "2025-05-10T18:22:17.177659Z",
      },
      {
        id: 52,
        product: 14,
        user: {
          id: 18,
          email: "rbatra@example.net",
          first_name: "Nayantara",
          last_name: "Sen",
          role: "PATIENT",
          city: "Kolkata",
          avatar_url: "https://i.pravatar.cc/150?img=17",
          created_at: "2025-05-10T18:22:10.581554Z",
        },
        rating: 5,
        comment: "Culpa eaque ipsa laboriosam atque ullam aspernatur. Repellat ullam ducimus recusandae.",
        created_at: "2025-05-10T18:22:17.173434Z",
      },
      {
        id: 51,
        product: 14,
        user: {
          id: 14,
          email: "baijumander@example.net",
          first_name: "Jivika",
          last_name: "Ben",
          role: "CAREGIVER",
          city: "Mumbai",
          avatar_url: "https://i.pravatar.cc/150?img=13",
          created_at: "2025-05-10T18:22:05.958103Z",
        },
        rating: 5,
        comment: "Similique maiores quos doloribus id. Cum natus velit aliquam.",
        created_at: "2025-05-10T18:22:17.169059Z",
      },
      {
        id: 50,
        product: 14,
        user: {
          id: 10,
          email: "lagan53@example.net",
          first_name: "Ryan",
          last_name: "Comar",
          role: "PATIENT",
          city: "Bangalore",
          avatar_url: "https://i.pravatar.cc/150?img=9",
          created_at: "2025-05-10T18:22:02.081113Z",
        },
        rating: 1,
        comment:
          "Repellendus laudantium ab iusto eaque. Minima voluptates nobis perferendis modi est. In voluptates ad corporis in nam.",
        created_at: "2025-05-10T18:22:17.164876Z",
      },
      {
        id: 49,
        product: 14,
        user: {
          id: 3,
          email: "onkar81@example.com",
          first_name: "Zaina",
          last_name: "Mannan",
          role: "PATIENT",
          city: "Pune",
          avatar_url: "https://i.pravatar.cc/150?img=2",
          created_at: "2025-05-10T18:21:55.215659Z",
        },
        rating: 4,
        comment: "Tenetur modi ratione aperiam. Officiis nam illo sed ipsam vel. Distinctio ad optio porro commodi.",
        created_at: "2025-05-10T18:22:17.160549Z",
      },
    ],
  }

  // Additional product images
  const additionalImages = [
    "https://picsum.photos/seed/product13a/800/800",
    "https://picsum.photos/seed/product13b/800/800",
    "https://picsum.photos/seed/product13c/800/800",
  ]

  // Related products
  const relatedProducts = [
    {
      id: 2,
      title: "Kidney-Friendly Protein Powder",
      description:
        "High-quality protein powder specially formulated for kidney patients with controlled phosphorus and potassium levels.",
      image_url: "https://picsum.photos/seed/product2/800/800",
      category: product.category,
      price: "1899.00",
      in_stock: true,
      tags: [
        { id: 3, name: "diet" },
        { id: 12, name: "nutrition" },
      ],
      average_rating: 4.2,
      review_count: 15,
    },
    {
      id: 3,
      title: "Phosphorus Control Tablets",
      description: "Helps manage phosphorus levels for kidney patients on dialysis or with advanced kidney disease.",
      image_url: "https://picsum.photos/seed/product3/800/800",
      category: product.category,
      price: "1299.00",
      in_stock: true,
      tags: [{ id: 4, name: "medication" }],
      average_rating: 4.0,
      review_count: 12,
    },
    {
      id: 4,
      title: "Renal Vitamin Complex",
      description:
        "Comprehensive vitamin supplement designed specifically for the nutritional needs of kidney patients.",
      image_url: "https://picsum.photos/seed/product4/800/800",
      category: product.category,
      price: "1599.00",
      in_stock: false,
      tags: [
        { id: 3, name: "diet" },
        { id: 10, name: "research" },
      ],
      average_rating: 4.7,
      review_count: 23,
    },
  ]

  const [selectedImage, setSelectedImage] = useState(product.image_url)

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Number.parseFloat(price))
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  const handleMarkHelpful = (reviewId: number) => {
    if (helpfulReviews.includes(reviewId)) {
      setHelpfulReviews(helpfulReviews.filter((id) => id !== reviewId))
    } else {
      setHelpfulReviews([...helpfulReviews, reviewId])
    }
  }

  // Generate star rating display
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    )
  }

  // Format date to readable format
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-muted/30 dark:bg-muted/10 py-4">
          <div className="container">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => router.push("/shop")}
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Shop
            </Button>
            <div className="text-sm text-muted-foreground mt-1">
              <Link href="/" className="hover:text-[#22AA86]">
                Home
              </Link>{" "}
              {" / "}
              <Link href="/shop" className="hover:text-[#22AA86]">
                Shop
              </Link>{" "}
              {" / "}
              <Link href={`/shop?category=${product.category.id}`} className="hover:text-[#22AA86]">
                {product.category.name}
              </Link>{" "}
              {" / "}
              <span className="text-foreground">{product.title}</span>
            </div>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div>
                <div className="aspect-square w-full rounded-2xl overflow-hidden mb-4 border border-muted bg-muted/30 relative group">
                  <img
                    src={selectedImage || "/placeholder.svg"}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#22AA86]/90 backdrop-blur-sm text-white font-medium px-3 py-1.5">
                      {product.category.name}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div
                    className={`aspect-square rounded-xl overflow-hidden border cursor-pointer transition-all ${
                      selectedImage === product.image_url
                        ? "border-[#22AA86] ring-2 ring-[#22AA86]/20"
                        : "border-muted hover:border-[#22AA86]/50"
                    }`}
                    onClick={() => setSelectedImage(product.image_url)}
                  >
                    <img
                      src={product.image_url || "/placeholder.svg"}
                      alt={`${product.title} - Main`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {additionalImages.map((image, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-xl overflow-hidden border cursor-pointer transition-all ${
                        selectedImage === image
                          ? "border-[#22AA86] ring-2 ring-[#22AA86]/20"
                          : "border-muted hover:border-[#22AA86]/50"
                      }`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.title} - View ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-3xl font-bold mb-3">{product.title}</h1>

                <div className="flex items-center gap-4 mb-4">
                  {renderStars(product.average_rating)}
                  <span className="text-sm text-muted-foreground">{product.review_count} reviews</span>
                </div>

                <div className="text-3xl font-bold mb-6 text-[#22AA86]">{formatPrice(product.price)}</div>

                <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-5 mb-6">
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <div className={`h-3 w-3 rounded-full ${product.in_stock ? "bg-green-500" : "bg-red-500"}`}></div>
                  <span
                    className={
                      product.in_stock ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                    }
                  >
                    {product.in_stock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <Badge key={tag.id} variant="outline" className="bg-muted/50 hover:bg-muted">
                      {tag.name}
                    </Badge>
                  ))}
                </div>

                {product.in_stock && (
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="flex items-center border rounded-xl overflow-hidden shadow-sm">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-none h-12 w-12 hover:bg-muted"
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                      >
                        -
                      </Button>
                      <div className="w-12 text-center font-medium">{quantity}</div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-none h-12 w-12 hover:bg-muted"
                        onClick={() => handleQuantityChange(1)}
                        disabled={quantity >= 10}
                      >
                        +
                      </Button>
                    </div>
                    <Button className="bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl px-8 h-12 flex-1 sm:flex-none">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`rounded-full h-12 w-12 ${isFavorite ? "text-red-500 hover:text-red-600 border-red-200 hover:border-red-300" : ""}`}
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                )}

                <div className="space-y-4 border-t border-muted pt-6">
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-[#22AA86] mt-0.5" />
                    <div>
                      <h4 className="font-medium">Free Shipping</h4>
                      <p className="text-sm text-muted-foreground">On orders over ₹1,000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-[#22AA86] mt-0.5" />
                    <div>
                      <h4 className="font-medium">Quality Guarantee</h4>
                      <p className="text-sm text-muted-foreground">All products are verified for quality and safety</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <Tabs defaultValue="description" className="w-full" onValueChange={setActiveTab}>
              <div className="bg-background rounded-t-xl p-1 border border-muted border-b-0">
                <TabsList className="grid w-full grid-cols-3 bg-muted/50">
                  <TabsTrigger
                    value="description"
                    className={
                      activeTab === "description"
                        ? "data-[state=active]:bg-[#22AA86] data-[state=active]:text-white"
                        : ""
                    }
                  >
                    Description
                  </TabsTrigger>
                  <TabsTrigger
                    value="specifications"
                    className={
                      activeTab === "specifications"
                        ? "data-[state=active]:bg-[#22AA86] data-[state=active]:text-white"
                        : ""
                    }
                  >
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className={
                      activeTab === "reviews" ? "data-[state=active]:bg-[#22AA86] data-[state=active]:text-white" : ""
                    }
                  >
                    Reviews ({product.review_count})
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="bg-background rounded-b-xl p-6 border border-muted border-t-0">
                <TabsContent value="description">
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Our Advanced Kidney Support Formula is developed by nephrologists and nutritionists to provide
                      targeted support for kidney health. This premium supplement is specifically formulated for
                      individuals with kidney concerns, containing carefully selected ingredients that support kidney
                      function while avoiding components that may burden compromised kidneys.
                    </p>

                    <h4 className="text-lg font-medium mt-6 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Supports healthy kidney function</li>
                      <li>Contains antioxidants to protect kidney cells</li>
                      <li>Low in phosphorus, potassium, and sodium</li>
                      <li>Helps maintain proper fluid balance</li>
                      <li>Supports overall kidney health</li>
                    </ul>

                    <h4 className="text-lg font-medium mt-6 mb-3">Key Ingredients:</h4>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Vitamin B6 - Helps reduce oxalate levels</li>
                      <li>Vitamin D - Often needed by kidney patients</li>
                      <li>Omega-3 fatty acids - Support kidney function</li>
                      <li>Astragalus extract - Traditional kidney support herb</li>
                      <li>CoQ10 - Provides antioxidant support</li>
                    </ul>

                    <p className="mt-6 text-muted-foreground">
                      Always consult with your healthcare provider before starting any supplement regimen, especially if
                      you have kidney disease or are on dialysis.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="specifications">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-5">
                      <h4 className="font-medium mb-4">Product Specifications</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Form</span>
                          <span className="font-medium">Capsules</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Count</span>
                          <span className="font-medium">60 capsules</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Serving Size</span>
                          <span className="font-medium">2 capsules daily</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration</span>
                          <span className="font-medium">30-day supply</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-5">
                      <h4 className="font-medium mb-4">Additional Information</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Storage</span>
                          <span className="font-medium">Store in a cool, dry place</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground mb-1">Allergens</span>
                          <span className="font-medium">
                            Contains fish oil. Manufactured in a facility that processes milk, eggs, fish, shellfish,
                            tree nuts, peanuts, wheat, and soybean.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                      <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-5 flex items-center gap-4">
                        <div className="text-4xl font-bold text-[#22AA86]">{product.average_rating.toFixed(1)}</div>
                        <div>
                          <div className="flex">{renderStars(product.average_rating)}</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Based on {product.review_count} reviews
                          </div>
                        </div>
                      </div>

                      <Button className="bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Write a Review
                      </Button>
                    </div>

                    {/* Rating distribution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((star) => {
                          const count = product.reviews?.filter((r) => Math.round(r.rating) === star).length || 0
                          const percentage = product.review_count > 0 ? (count / product.review_count) * 100 : 0

                          return (
                            <div key={star} className="flex items-center gap-3">
                              <div className="flex items-center w-16">
                                <span className="text-sm font-medium">{star} stars</span>
                              </div>
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-[#22AA86]" style={{ width: `${percentage}%` }}></div>
                              </div>
                              <div className="w-10 text-right text-sm text-muted-foreground">{count}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {product.reviews?.map((review) => (
                      <div key={review.id} className="bg-muted/30 dark:bg-muted/10 rounded-xl p-5">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="h-12 w-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                            <img
                              src={
                                review.user.avatar_url ||
                                `/placeholder.svg?height=150&width=150&query=avatar ${review.user.first_name}`
                              }
                              alt={`${review.user.first_name} ${review.user.last_name}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <div>
                                <div className="font-medium">
                                  {review.user.first_name} {review.user.last_name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {formatDate(review.created_at)} • {review.user.city} • {review.user.role}
                                </div>
                              </div>
                              <div className="flex">{renderStars(review.rating)}</div>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">{review.comment}</p>
                        <div className="flex justify-end">
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`text-xs ${helpfulReviews.includes(review.id) ? "text-[#22AA86]" : "text-muted-foreground"}`}
                            onClick={() => handleMarkHelpful(review.id)}
                          >
                            <ThumbsUp
                              className={`h-3 w-3 mr-1 ${helpfulReviews.includes(review.id) ? "fill-current" : ""}`}
                            />
                            {helpfulReviews.includes(review.id) ? "Marked as helpful" : "Mark as helpful"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Related Products</h2>
              <Button
                variant="ghost"
                className="text-[#22AA86] hover:text-[#1c8f70] hover:bg-[#22AA86]/10"
                onClick={() => router.push("/shop")}
              >
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
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
                <h2 className="text-3xl font-bold mb-4">Need Personalized Recommendations?</h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Our community members and kidney care experts can help you find the right products for your specific
                  needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-white text-[#22AA86] hover:bg-white/90 rounded-xl px-8">
                    Join Community
                  </Button>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/20 rounded-xl px-8"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
