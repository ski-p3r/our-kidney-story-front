"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, Filter, X } from "lucide-react"
import Link from "next/link"
import ProductCard from "@/components/product-card"

// Types
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
}

interface ProductsResponse {
  count: number
  next: string | null
  previous: string | null
  results: Product[]
}

// Mock data for initial load and fallback
const mockCategories = [
  { id: 1, name: "Dietary Supplements", description: "Supplements designed for kidney patients.", product_count: 4 },
  { id: 2, name: "Medical Devices", description: "Devices to help monitor health at home.", product_count: 8 },
  { id: 3, name: "Books & Education", description: "Educational resources about kidney health.", product_count: 7 },
  {
    id: 4,
    name: "Comfort Items",
    description: "Items to improve comfort during dialysis and recovery.",
    product_count: 8,
  },
  {
    id: 5,
    name: "Kidney-Friendly Foods",
    description: "Foods specially formulated for kidney patients.",
    product_count: 5,
  },
  { id: 6, name: "Medication Organizers", description: "Tools to help manage medications.", product_count: 10 },
]

const mockTags = [
  { id: 1, name: "dialysis" },
  { id: 2, name: "transplant" },
  { id: 3, name: "diet" },
  { id: 4, name: "medication" },
  { id: 5, name: "exercise" },
  { id: 6, name: "mental health" },
  { id: 7, name: "support" },
  { id: 8, name: "caregiving" },
  { id: 9, name: "treatment" },
  { id: 10, name: "research" },
  { id: 11, name: "lifestyle" },
  { id: 12, name: "nutrition" },
]

// For demo purposes, we'll use this mock data
// In a real app, you would fetch from your API
const mockProductsResponse: ProductsResponse = {
  count: 50,
  next: "http://127.0.0.1:8000/api/products/?page=2",
  previous: null,
  results: [
    {
      id: 24,
      title: "Advanced global implementation",
      description:
        "Neque reiciendis corrupti quibusdam ad. Ut ex ab repellendus aspernatur. Atque laborum mollitia sed odit occaecati. Provident asperiores quas culpa quam earum. Odio itaque porro officiis unde. Sequi recusandae expedita saepe occaecati.",
      image_url: "https://picsum.photos/seed/product23/800/800",
      category: {
        id: 4,
        name: "Comfort Items",
        description: "Items to improve comfort during dialysis and recovery.",
        product_count: 8,
        created_at: "2025-05-10T18:22:16.774429Z",
      },
      price: "5351.96",
      in_stock: true,
      tags: [
        { id: 5, name: "exercise" },
        { id: 8, name: "caregiving" },
      ],
      average_rating: 3.2,
      review_count: 5,
      created_at: "2025-05-10T18:22:17.458713Z",
      updated_at: "2025-05-10T18:22:17.458753Z",
    },
    {
      id: 7,
      title: "Assimilated motivating concept",
      description:
        "Molestias accusamus minima consectetur reiciendis adipisci soluta. Debitis eveniet nisi harum esse praesentium explicabo. Omnis dignissimos non magnam pariatur. Ipsum aspernatur impedit maiores.",
      image_url: "https://picsum.photos/seed/product6/800/800",
      category: {
        id: 3,
        name: "Books & Education",
        description: "Educational resources about kidney health.",
        product_count: 7,
        created_at: "2025-05-10T18:22:16.767548Z",
      },
      price: "1900.20",
      in_stock: true,
      tags: [
        { id: 3, name: "diet" },
        { id: 7, name: "support" },
        { id: 8, name: "caregiving" },
      ],
      average_rating: 3.7142857142857144,
      review_count: 7,
      created_at: "2025-05-10T18:22:16.957451Z",
      updated_at: "2025-05-10T18:22:16.957495Z",
    },
    {
      id: 44,
      title: "Balanced multi-state groupware",
      description:
        "Voluptate hic ab amet nostrum aut sunt. Labore officia placeat corporis inventore nemo explicabo. Quos autem cupiditate atque.",
      image_url: "https://picsum.photos/seed/product43/800/800",
      category: {
        id: 3,
        name: "Books & Education",
        description: "Educational resources about kidney health.",
        product_count: 7,
        created_at: "2025-05-10T18:22:16.767548Z",
      },
      price: "1126.81",
      in_stock: true,
      tags: [{ id: 2, name: "transplant" }],
      average_rating: 2,
      review_count: 4,
      created_at: "2025-05-10T18:22:18.125929Z",
      updated_at: "2025-05-10T18:22:18.125978Z",
    },
    {
      id: 35,
      title: "Cloned national knowledgebase",
      description:
        "Suscipit eaque similique magnam. Est inventore molestiae nostrum perferendis. Corporis eaque doloribus. Assumenda nulla architecto tenetur. Tempore nam recusandae labore. Rerum eum magnam eius. Eius ab porro porro corporis provident nemo vel.",
      image_url: "https://picsum.photos/seed/product34/800/800",
      category: {
        id: 2,
        name: "Medical Devices",
        description: "Devices to help monitor health at home.",
        product_count: 8,
        created_at: "2025-05-10T18:22:16.760993Z",
      },
      price: "9476.27",
      in_stock: false,
      tags: [{ id: 4, name: "medication" }],
      average_rating: 3.25,
      review_count: 8,
      created_at: "2025-05-10T18:22:17.824060Z",
      updated_at: "2025-05-10T18:22:17.824090Z",
    },
    {
      id: 6,
      title: "Cross-platform high-level Graphical User Interface",
      description:
        "Libero odit repellat consectetur ipsam numquam a. Alias laboriosam expedita voluptatum accusantium blanditiis. Quasi in numquam expedita itaque odit.",
      image_url: "https://picsum.photos/seed/product5/800/800",
      category: {
        id: 1,
        name: "Dietary Supplements",
        description: "Supplements designed for kidney patients.",
        product_count: 4,
        created_at: "2025-05-10T18:22:16.754738Z",
      },
      price: "6947.69",
      in_stock: false,
      tags: [
        { id: 4, name: "medication" },
        { id: 11, name: "lifestyle" },
      ],
      average_rating: 0,
      review_count: 0,
      created_at: "2025-05-10T18:22:16.951120Z",
      updated_at: "2025-05-10T18:22:16.951146Z",
    },
    {
      id: 3,
      title: "Decentralized client-driven flexibility",
      description:
        "Neque quibusdam inventore expedita. Quidem ut maiores esse error quaerat minus. Illo quisquam nisi mollitia ipsa esse culpa voluptatum. Sequi rem temporibus repellendus eum.",
      image_url: "https://picsum.photos/seed/product2/800/800",
      category: {
        id: 6,
        name: "Medication Organizers",
        description: "Tools to help manage medications.",
        product_count: 10,
        created_at: "2025-05-10T18:22:16.787361Z",
      },
      price: "218.79",
      in_stock: true,
      tags: [
        { id: 1, name: "dialysis" },
        { id: 6, name: "mental health" },
        { id: 12, name: "nutrition" },
      ],
      average_rating: 3.857142857142857,
      review_count: 7,
      created_at: "2025-05-10T18:22:16.857846Z",
      updated_at: "2025-05-10T18:22:16.857878Z",
    },
    {
      id: 45,
      title: "De-engineered regional hierarchy",
      description:
        "Commodi esse dicta hic eveniet sunt officia dicta. Nam excepturi hic consequuntur repellendus. Voluptates consequatur assumenda.",
      image_url: "https://picsum.photos/seed/product44/800/800",
      category: {
        id: 6,
        name: "Medication Organizers",
        description: "Tools to help manage medications.",
        product_count: 10,
        created_at: "2025-05-10T18:22:16.787361Z",
      },
      price: "7688.36",
      in_stock: true,
      tags: [
        { id: 4, name: "medication" },
        { id: 11, name: "lifestyle" },
        { id: 12, name: "nutrition" },
      ],
      average_rating: 2.6666666666666665,
      review_count: 3,
      created_at: "2025-05-10T18:22:18.155963Z",
      updated_at: "2025-05-10T18:22:18.155993Z",
    },
    {
      id: 22,
      title: "Devolved static migration",
      description:
        "Reiciendis iusto dolorem nulla neque pariatur maiores. Quisquam rerum labore aut facere. Animi sequi nulla quos quas a ullam id. Deleniti id consequuntur soluta occaecati accusantium. Voluptates et suscipit commodi eveniet excepturi quod.",
      image_url: "https://picsum.photos/seed/product21/800/800",
      category: {
        id: 4,
        name: "Comfort Items",
        description: "Items to improve comfort during dialysis and recovery.",
        product_count: 8,
        created_at: "2025-05-10T18:22:16.774429Z",
      },
      price: "729.38",
      in_stock: true,
      tags: [
        { id: 10, name: "research" },
        { id: 11, name: "lifestyle" },
      ],
      average_rating: 4.666666666666667,
      review_count: 3,
      created_at: "2025-05-10T18:22:17.389122Z",
      updated_at: "2025-05-10T18:22:17.389156Z",
    },
    {
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
    },
    {
      id: 26,
      title: "Distributed next generation archive",
      description:
        "Magni fugiat similique id porro tempore reprehenderit quam. Aliquid reiciendis voluptatem magni autem magnam odio. In velit atque deserunt enim illum. Tempora dignissimos explicabo incidunt quibusdam maxime molestiae asperiores. Natus atque ipsam nemo maiores magnam nostrum sunt.",
      image_url: "https://picsum.photos/seed/product25/800/800",
      category: {
        id: 3,
        name: "Books & Education",
        description: "Educational resources about kidney health.",
        product_count: 7,
        created_at: "2025-05-10T18:22:16.767548Z",
      },
      price: "9676.94",
      in_stock: true,
      tags: [
        { id: 6, name: "mental health" },
        { id: 9, name: "treatment" },
      ],
      average_rating: 3.5,
      review_count: 4,
      created_at: "2025-05-10T18:22:17.534678Z",
      updated_at: "2025-05-10T18:22:17.534723Z",
    },
  ],
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>(mockCategories)
  const [tags, setTags] = useState<Tag[]>(mockTags)
  const [loading, setLoading] = useState(true)
  const [totalProducts, setTotalProducts] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  // Filters
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<string>("featured")
  const [showFilters, setShowFilters] = useState(false)
  const [inStockOnly, setInStockOnly] = useState(false)

  // Fetch products (simulated)
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        // In a real app, you would fetch from your API with filters
        // const response = await fetch(`/api/products?page=${currentPage}&search=${searchQuery}&category=${selectedCategory}&tags=${selectedTags.join(',')}&sort=${sortBy}`);
        // const data = await response.json();

        // For demo, we'll use the mock data and simulate filtering
        setTimeout(() => {
          let filteredProducts = [...mockProductsResponse.results]

          // Apply search filter
          if (searchQuery) {
            filteredProducts = filteredProducts.filter(
              (product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase()),
            )
          }

          // Apply category filter
          if (selectedCategory) {
            filteredProducts = filteredProducts.filter((product) => product.category.id.toString() === selectedCategory)
          }

          // Apply tag filters
          if (selectedTags.length > 0) {
            filteredProducts = filteredProducts.filter((product) =>
              product.tags.some((tag) => selectedTags.includes(tag.id.toString())),
            )
          }

          // Apply in-stock filter
          if (inStockOnly) {
            filteredProducts = filteredProducts.filter((product) => product.in_stock)
          }

          // Apply sorting
          if (sortBy === "price-low") {
            filteredProducts.sort((a, b) => Number.parseFloat(a.price) - Number.parseFloat(b.price))
          } else if (sortBy === "price-high") {
            filteredProducts.sort((a, b) => Number.parseFloat(b.price) - Number.parseFloat(a.price))
          } else if (sortBy === "rating") {
            filteredProducts.sort((a, b) => b.average_rating - a.average_rating)
          }

          setProducts(filteredProducts)
          setTotalProducts(filteredProducts.length)
          setTotalPages(Math.ceil(filteredProducts.length / 10))
          setLoading(false)
        }, 800)
      } catch (error) {
        console.error("Error fetching products:", error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [currentPage, searchQuery, selectedCategory, selectedTags, sortBy, inStockOnly])

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value === "all" ? "" : value)
    setCurrentPage(1)
  }

  const handleTagToggle = (tagId: string) => {
    setSelectedTags((prev) => (prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]))
    setCurrentPage(1)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1)
  }

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("")
    setSelectedTags([])
    setSortBy("featured")
    setInStockOnly(false)
    setCurrentPage(1)
  }

  const handleAddToCart = (productId: number, quantity: number) => {
    // In a real app, you would implement cart functionality here
    console.log(`Added product ${productId} to cart with quantity ${quantity}`)
    // You could show a toast notification here
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
                  <span className="text-[#22AA86] font-medium text-sm tracking-wider">KIDNEY CARE SHELF</span>
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full ml-2"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Products for Your <span className="text-[#22AA86]">Kidney Health Journey</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover kidney-friendly products, from dietary supplements to comfort items, carefully selected to
                support your kidney health and improve quality of life.
              </p>

              <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  className="pl-4 pr-12 py-6 rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
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

        {/* Shop Section */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden w-full mb-4">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <span className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </span>
                  {showFilters ? <X className="h-4 w-4" /> : null}
                </Button>
              </div>

              {/* Sidebar Filters */}
              <div className={`lg:w-1/4 ${showFilters ? "block" : "hidden lg:block"}`}>
                <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-6 sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-sm text-muted-foreground"
                      onClick={handleClearFilters}
                    >
                      Clear all
                    </Button>
                  </div>

                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Categories</h3>
                    <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id.toString()}>
                            {category.name} ({category.product_count})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge
                          key={tag.id}
                          variant={selectedTags.includes(tag.id.toString()) ? "default" : "outline"}
                          className={`cursor-pointer ${
                            selectedTags.includes(tag.id.toString())
                              ? "bg-[#22AA86] hover:bg-[#1c8f70]"
                              : "hover:bg-muted"
                          }`}
                          onClick={() => handleTagToggle(tag.id.toString())}
                        >
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price Range (simplified for demo) */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <Select value={sortBy} onValueChange={handleSortChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sort by price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Availability */}
                  <div>
                    <h3 className="font-medium mb-3">Availability</h3>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="in-stock"
                        className="h-4 w-4 rounded border-gray-300 text-[#22AA86] focus:ring-[#22AA86]"
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                      />
                      <label htmlFor="in-stock" className="text-sm">
                        In Stock Only
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="lg:w-3/4">
                {/* Results Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold">
                      {loading ? "Loading products..." : `${totalProducts} Products`}
                    </h2>
                    {(selectedCategory || selectedTags.length > 0 || searchQuery) && (
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-sm text-muted-foreground">Filters:</span>
                        {selectedCategory && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            {categories.find((c) => c.id.toString() === selectedCategory)?.name}
                            <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("")} />
                          </Badge>
                        )}
                        {selectedTags.map((tagId) => {
                          const tag = tags.find((t) => t.id.toString() === tagId)
                          return tag ? (
                            <Badge key={tagId} variant="secondary" className="flex items-center gap-1">
                              {tag.name}
                              <X className="h-3 w-3 cursor-pointer" onClick={() => handleTagToggle(tagId)} />
                            </Badge>
                          ) : null
                        })}
                        {searchQuery && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            Search: {searchQuery}
                            <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <Select value={sortBy} onValueChange={handleSortChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Products */}
                {loading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(9)].map((_, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="aspect-square w-full">
                          <Skeleton className="h-full w-full" />
                        </div>
                        <div className="p-4">
                          <Skeleton className="h-6 w-3/4 mb-2" />
                          <Skeleton className="h-4 w-1/2 mb-4" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-3/4 mb-4" />
                          <div className="flex justify-between items-center">
                            <Skeleton className="h-6 w-1/3" />
                            <Skeleton className="h-10 w-10 rounded-full" />
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : products.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-muted/30 dark:bg-muted/10 rounded-xl">
                    <div className="mb-4 text-muted-foreground">
                      <Search className="h-12 w-12 mx-auto mb-4 opacity-30" />
                      <h3 className="text-xl font-medium mb-2">No products found</h3>
                      <p>Try adjusting your search or filter criteria</p>
                    </div>
                    <Button variant="outline" onClick={handleClearFilters} className="mt-4">
                      Clear all filters
                    </Button>
                  </div>
                )}

                {/* Pagination */}
                {!loading && products.length > 0 && (
                  <Pagination className="mt-12">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            if (currentPage > 1) setCurrentPage(currentPage - 1)
                          }}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>

                      {[...Array(totalPages)].map((_, i) => {
                        const page = i + 1
                        // Show first page, last page, and pages around current page
                        if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationLink
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault()
                                  setCurrentPage(page)
                                }}
                                isActive={page === currentPage}
                                className={page === currentPage ? "bg-[#22AA86] text-white hover:bg-[#1c8f70]" : ""}
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          )
                        }

                        // Show ellipsis for gaps
                        if (
                          (page === 2 && currentPage > 3) ||
                          (page === totalPages - 1 && currentPage < totalPages - 2)
                        ) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          )
                        }

                        return null
                      })}

                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                          }}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories Section */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our carefully curated categories designed to support your kidney health journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-background dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-muted hover:shadow-md transition-shadow duration-300 cursor-pointer hover:border-[#22AA86]/30"
                  onClick={() => handleCategoryChange(category.id.toString())}
                >
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{category.product_count} products</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#22AA86] hover:text-[#1c8f70] hover:bg-[#22AA86]/10 -mr-2"
                    >
                      Browse
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
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
