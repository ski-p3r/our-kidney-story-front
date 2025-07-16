"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sun, Moon, Menu, X, User, LogOut, Settings } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // For demo purposes

  // Fix hydration issues with theme toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Stories", href: "/stories" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#22AA86] to-[#1a8a6c] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">KC</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-2xl block leading-tight">Kidney</span>
              <span className="font-bold text-2xl block leading-tight text-[#22AA86]">Community</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-[#22AA86] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-xl border border-border hover:bg-[#22AA86]/10 hover:text-[#22AA86]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-[#22AA86]" />
              )}
            </Button>
          )}

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-10 w-10 cursor-pointer border-2 border-[#22AA86]">
                  <AvatarImage src="/diverse-group.png" alt="User" />
                  <AvatarFallback className="bg-[#22AA86] text-white">KC</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm" className="text-[#22AA86] hover:bg-[#22AA86]/10 hover:text-[#22AA86]">
                  Log in
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm" className="bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl px-6">
                  Sign up
                </Button>
              </Link>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-6 pb-8 bg-background">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-[#22AA86] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {!isLoggedIn && (
              <div className="flex flex-col space-y-3 pt-3">
                <Link href="/auth/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[#22AA86] text-[#22AA86] hover:bg-[#22AA86]/10"
                  >
                    Log in
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="sm" className="w-full bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
