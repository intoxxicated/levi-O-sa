"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/great-hall", label: "Great Hall" },
  { href: "/gryffindor", label: "Gryffindor" },
  { href: "/forbidden-forest", label: "Forbidden Forest" },
  { href: "/quiz", label: "Quiz" },
  { href: "/profile", label: "Profile" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            <Sparkles className="h-6 w-6" />
            <span className="font-bold text-lg">Hogwarts Journey</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:focus ${
                  pathname === item.href
                    ? "text-yellow-400 bg-yellow-400/10"
                    : "text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-yellow-400 focus-visible:focus"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors focus-visible:focus ${
                    pathname === item.href
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
