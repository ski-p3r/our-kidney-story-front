"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"

interface Category {
  id: number
  name: string
  description: string
  product_count: number
}

interface Tag {
  id: number
  name: string
}

interface ShopSidebarProps {
  categories: Category[]
  tags: Tag[]
  selectedCategory: string
  selectedTags: string[]
  priceRange: [number, number]
  maxPrice: number
  onCategoryChange: (value: string) => void
  onTagToggle: (tagId: string) => void
  onPriceRangeChange: (range: [number, number]) => void
  onClearFilters: () => void
  inStockOnly: boolean
  onInStockChange: (checked: boolean) => void
}

export default function ShopSidebar({
  categories,
  tags,
  selectedCategory,
  selectedTags,
  priceRange,
  maxPrice,
  onCategoryChange,
  onTagToggle,
  onPriceRangeChange,
  onClearFilters,
  inStockOnly,
  onInStockChange,
}: ShopSidebarProps) {
  const [localPriceRange, setLocalPriceRange] = useState<[number, number]>(priceRange)

  const handlePriceChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]]
    setLocalPriceRange(newRange)
  }

  const handlePriceChangeCommitted = () => {
    onPriceRangeChange(localPriceRange)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="bg-muted/30 dark:bg-muted/10 rounded-xl p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        <Button variant="ghost" size="sm" className="text-sm text-muted-foreground" onClick={onClearFilters}>
          Clear all
        </Button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Categories</h3>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
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
                selectedTags.includes(tag.id.toString()) ? "bg-[#22AA86] hover:bg-[#1c8f70]" : "hover:bg-muted"
              }`}
              onClick={() => onTagToggle(tag.id.toString())}
            >
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Price Range</h3>
        <div className="mb-6">
          <Slider
            defaultValue={[priceRange[0], priceRange[1]]}
            max={maxPrice}
            step={100}
            value={[localPriceRange[0], localPriceRange[1]]}
            onValueChange={handlePriceChange}
            onValueCommit={handlePriceChangeCommitted}
            className="mb-2"
          />
          <div className="flex items-center justify-between text-sm">
            <span>{formatPrice(localPriceRange[0])}</span>
            <span>{formatPrice(localPriceRange[1])}</span>
          </div>
        </div>
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
            onChange={(e) => onInStockChange(e.target.checked)}
          />
          <label htmlFor="in-stock" className="text-sm">
            In Stock Only
          </label>
        </div>
      </div>

      {/* Applied Filters */}
      {(selectedCategory || selectedTags.length > 0 || priceRange[0] > 0 || priceRange[1] < maxPrice) && (
        <div className="mt-6 pt-6 border-t border-muted">
          <h3 className="font-medium mb-3">Applied Filters</h3>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {categories.find((c) => c.id.toString() === selectedCategory)?.name}
                <X className="h-3 w-3 cursor-pointer" onClick={() => onCategoryChange("")} />
              </Badge>
            )}
            {selectedTags.map((tagId) => {
              const tag = tags.find((t) => t.id.toString() === tagId)
              return tag ? (
                <Badge key={tagId} variant="secondary" className="flex items-center gap-1">
                  {tag.name}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => onTagToggle(tagId)} />
                </Badge>
              ) : null
            })}
            {(priceRange[0] > 0 || priceRange[1] < maxPrice) && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                <X className="h-3 w-3 cursor-pointer" onClick={() => onPriceRangeChange([0, maxPrice])} />
              </Badge>
            )}
            {inStockOnly && (
              <Badge variant="secondary" className="flex items-center gap-1">
                In Stock Only
                <X className="h-3 w-3 cursor-pointer" onClick={() => onInStockChange(false)} />
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
