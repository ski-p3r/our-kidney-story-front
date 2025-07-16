"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart } from "lucide-react"

interface Tag {
  id: number
  name: string
}

interface Category {
  id: number
  name: string
  description: string
  product_count: number
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
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: number, quantity: number) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Number.parseFloat(price))
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onAddToCart && product.in_stock) {
      onAddToCart(product.id, 1)
    }
  }

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const navigateToDetail = () => {
    router.push(`/shop/${product.id}`)
  }

  // Generate star rating display
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"
            }`}
          />
        ))}
        <span className="ml-1 text-xs text-muted-foreground">({product.review_count})</span>
      </div>
    )
  }

  return (
    <Card
      className="group overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg border-muted hover:border-[#22AA86]/30 cursor-pointer"
      onClick={navigateToDetail}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={product.image_url || "/placeholder.svg"}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-[#22AA86]/90 backdrop-blur-sm text-white font-medium px-2.5 py-1">
            {product.category.name}
          </Badge>
        </div>

        {/* Out of Stock Overlay */}
        {!product.in_stock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-md font-medium">
              Out of Stock
            </span>
          </div>
        )}

        {/* Quick Action Buttons */}
        <div className={`absolute right-3 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col gap-2">
            <Button
              size="icon"
              className={`rounded-full h-9 w-9 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-[#22AA86] shadow-md ${
                isFavorite ? "text-red-500 hover:text-red-600" : ""
              }`}
              onClick={handleFavoriteToggle}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-4">
        {/* Title and Rating */}
        <div className="mb-2">
          <h3 className="font-medium text-lg line-clamp-1 group-hover:text-[#22AA86] transition-colors">
            {product.title}
          </h3>
          <div className="mt-1">
            {product.review_count > 0 ? (
              renderStars(product.average_rating)
            ) : (
              <span className="text-xs text-muted-foreground">No reviews yet</span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-grow">{product.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.slice(0, 3).map((tag) => (
            <Badge key={tag.id} variant="outline" className="text-xs bg-muted/50">
              {tag.name}
            </Badge>
          ))}
          {product.tags.length > 3 && (
            <Badge variant="outline" className="text-xs bg-muted/50">
              +{product.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-auto">
          <div className="font-bold text-lg">{formatPrice(product.price)}</div>
          <Button
            size="sm"
            className={`rounded-full ${
              product.in_stock
                ? "bg-[#22AA86] hover:bg-[#1c8f70] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!product.in_stock}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Add</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}
