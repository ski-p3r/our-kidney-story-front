"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X, Camera, FileImage } from "lucide-react"
import Image from "next/image"

interface ImageUploadProps {
  onChange: (file: File | null) => void
  value: File | null
  previewUrl: string | null
  className?: string
}

export function ImageUpload({ onChange, value, previewUrl, className = "" }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith("image/")) {
        onChange(file)
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0])
    }
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={`${className}`}>
      {previewUrl ? (
        <div className="relative rounded-lg overflow-hidden border shadow-sm">
          <div className="aspect-[2/1] relative">
            <Image src={previewUrl || "/placeholder.svg"} alt="Image preview" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleClick}
                className="bg-white/90 hover:bg-white text-black"
              >
                <Camera className="h-4 w-4 mr-1" /> Change
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleRemove}
                className="bg-white/90 hover:bg-red-500 hover:text-white text-red-500"
              >
                <X className="h-4 w-4 mr-1" /> Remove
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragging
              ? "border-[#22AA86] bg-[#22AA86]/5"
              : "border-muted-foreground/30 hover:border-[#22AA86]/50 hover:bg-muted/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center">
              <FileImage className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium mb-1">Add a cover image</p>
              <p className="text-sm text-muted-foreground mb-2">Drag and drop or click to upload</p>
              <p className="text-xs text-muted-foreground">Recommended: 1200×600px or larger. JPG, PNG or GIF.</p>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/gif"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  )
}
