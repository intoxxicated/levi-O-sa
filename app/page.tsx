"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Castle, Users, TreePine, BookOpen, User, Zap, Star, Moon } from "lucide-react"

export default function HomePage() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    // Create magical particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="magical-bg min-h-screen relative overflow-hidden">
      {/* Magical Particles Background */}
      <div className="magical-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Clouds */}
      <div className="absolute top-10 w-full">
        <div className="cloud-drift opacity-20">
          <div className="w-32 h-16 bg-white rounded-full relative">
            <div className="absolute -left-4 top-2 w-20 h-12 bg-white rounded-full"></div>
            <div className="absolute -right-4 top-2 w-24 h-12 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Flying Broom */}
      <div className="absolute top-20 fly-across">
        <div className="w-16 h-4 bg-amber-800 rounded-full relative interactive-element">
          <div className="absolute -left-8 top-1 w-8 h-2 bg-amber-600 rounded-full"></div>
          <div className="absolute -right-12 top-0 w-12 h-4">
            <div className="w-full h-1 bg-yellow-600 rounded"></div>
            <div className="w-full h-1 bg-yellow-500 rounded mt-1"></div>
            <div className="w-full h-1 bg-yellow-400 rounded mt-1"></div>
          </div>
          <div className="absolute -top-1 left-2 w-1 h-6 bg-amber-900 rounded"></div>
        </div>
      </div>

      {/* Flying Owl */}
      <div className="absolute top-32 owl-fly">
        <div className="w-12 h-8 relative interactive-element">
          <div className="w-8 h-6 bg-amber-100 rounded-full mx-auto"></div>
          <div className="absolute top-1 left-2 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-1 right-2 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute -left-2 top-0 w-6 h-3 bg-amber-200 rounded-full transform -rotate-12"></div>
          <div className="absolute -right-2 top-0 w-6 h-3 bg-amber-200 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-0 left-3 w-2 h-2 bg-orange-400 rounded"></div>
        </div>
      </div>

      {/* Floating Dobby */}
      <div className="absolute top-1/3 right-20 dobby-float interactive-element">
        <div className="w-16 h-20 relative">
          <div className="w-12 h-16 bg-green-200 rounded-t-full mx-auto"></div>
          <div className="absolute top-2 left-2 w-3 h-3 bg-green-400 rounded-full"></div>
          <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full"></div>
          <div className="absolute top-6 left-3 w-2 h-1 bg-black rounded"></div>
          <div className="absolute top-6 right-3 w-2 h-1 bg-black rounded"></div>
          <div className="absolute bottom-4 left-1 w-4 h-6 bg-green-300 rounded"></div>
          <div className="absolute bottom-4 right-1 w-4 h-6 bg-green-300 rounded"></div>
          <div className="absolute -top-2 left-0 w-6 h-8 bg-green-200 rounded-full transform -rotate-12"></div>
          <div className="absolute -top-2 right-0 w-6 h-8 bg-green-200 rounded-full transform rotate-12"></div>
        </div>
      </div>

      {/* Philosopher's Stone */}
      <div className="absolute top-1/2 left-10 stone-glow interactive-element">
        <div className="w-8 h-8 bg-red-600 transform rotate-45 rounded-lg relative">
          <div className="absolute inset-1 bg-red-400 rounded"></div>
          <div className="absolute inset-2 bg-red-300 rounded"></div>
        </div>
      </div>

      {/* Floating Wands */}
      <div className="absolute bottom-1/3 right-1/4 wand-float interactive-element">
        <div className="w-1 h-12 bg-amber-800 rounded-full relative">
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-2 -left-0.5 w-2 h-1 bg-amber-600 rounded"></div>
        </div>
      </div>

      {/* Invisibility Cloak */}
      <div className="absolute bottom-20 left-1/3 cloak-wave interactive-element">
        <div className="w-20 h-16 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full opacity-40"></div>
      </div>

      {/* Twinkling Stars */}
      <div className="absolute top-16 left-1/4 twinkle">
        <Star className="h-4 w-4 text-yellow-400" />
      </div>
      <div className="absolute top-24 right-1/3 twinkle" style={{ animationDelay: "1s" }}>
        <Star className="h-3 w-3 text-blue-400" />
      </div>
      <div className="absolute top-40 left-3/4 twinkle" style={{ animationDelay: "2s" }}>
        <Star className="h-5 w-5 text-purple-400" />
      </div>

      {/* Golden Snitch */}
      <div className="absolute top-1/4 left-1/2 float interactive-element">
        <div className="w-6 h-6 bg-yellow-400 rounded-full relative">
          <div className="absolute -left-2 top-1 w-4 h-2 bg-yellow-300 rounded-full transform -rotate-12"></div>
          <div className="absolute -right-2 top-1 w-4 h-2 bg-yellow-300 rounded-full transform rotate-12"></div>
          <div className="absolute inset-1 bg-yellow-500 rounded-full"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="float mb-8">
              <div className="relative">
                <Sparkles className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full sparkle"></div>
                <div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full sparkle"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-shadow mb-6 fade-in-up">
              Welcome to <span className="text-yellow-400 glow">Hogwarts</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in-up">
              Embark on a magical journey through the most famous school of witchcraft and wizardry
            </p>

            {/* Interactive Magic Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up mb-12">
              <Button
                asChild
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/great-hall">
                  <Castle className="h-5 w-5 mr-2" />
                  Begin Your Journey
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/quiz">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Take the Quiz
                </Link>
              </Button>
            </div>

            {/* Magical Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-16">
              <div className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors interactive-element">
                <div className="text-2xl font-bold text-yellow-400">4</div>
                <div className="text-sm text-gray-300">Houses</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors interactive-element">
                <div className="text-2xl font-bold text-blue-400">7</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors interactive-element">
                <div className="text-2xl font-bold text-green-400">∞</div>
                <div className="text-sm text-gray-300">Magic</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors interactive-element">
                <div className="text-2xl font-bold text-purple-400">9¾</div>
                <div className="text-sm text-gray-300">Platform</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating magical elements */}
        <div className="absolute top-1/4 left-10 sparkle">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        </div>
        <div className="absolute top-1/3 right-20 sparkle" style={{ animationDelay: "1s" }}>
          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 sparkle" style={{ animationDelay: "2s" }}>
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
        </div>
      </section>

      {/* Interactive Hogwarts Castle Silhouette */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative inline-block interactive-element">
            <div className="w-64 h-32 mx-auto relative">
              {/* Castle towers */}
              <div className="absolute left-4 bottom-0 w-8 h-20 bg-slate-700 rounded-t-full"></div>
              <div className="absolute left-16 bottom-0 w-12 h-24 bg-slate-600"></div>
              <div className="absolute left-32 bottom-0 w-16 h-28 bg-slate-700"></div>
              <div className="absolute right-16 bottom-0 w-12 h-22 bg-slate-600"></div>
              <div className="absolute right-4 bottom-0 w-8 h-18 bg-slate-700 rounded-t-full"></div>

              {/* Castle flags */}
              <div className="absolute left-6 top-0 w-4 h-6 bg-red-600 rounded-r"></div>
              <div className="absolute left-38 top-0 w-4 h-6 bg-blue-600 rounded-r"></div>
              <div className="absolute right-6 top-2 w-4 h-6 bg-yellow-600 rounded-r"></div>

              {/* Windows with magical glow */}
              <div className="absolute left-18 bottom-8 w-2 h-3 bg-yellow-400 glow"></div>
              <div className="absolute left-34 bottom-12 w-2 h-3 bg-yellow-400 glow"></div>
              <div className="absolute right-18 bottom-6 w-2 h-3 bg-yellow-400 glow"></div>
            </div>
            <p className="text-lg text-gray-300 mt-4">Hogwarts School of Witchcraft and Wizardry</p>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-shadow">Explore Magical Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LocationCard
              href="/great-hall"
              icon={<Castle className="h-8 w-8" />}
              title="Great Hall"
              description="Experience the grandeur of the Great Hall with its floating candles and house tables"
              image="/placeholder.svg?height=200&width=300"
            />
            <LocationCard
              href="/gryffindor"
              icon={<Users className="h-8 w-8" />}
              title="Gryffindor Common Room"
              description="Relax by the fireplace in the cozy Gryffindor common room"
              image="/placeholder.svg?height=200&width=300"
            />
            <LocationCard
              href="/forbidden-forest"
              icon={<TreePine className="h-8 w-8" />}
              title="Forbidden Forest"
              description="Venture into the mysterious depths of the Forbidden Forest"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-shadow">Interactive Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              href="/quiz"
              icon={<BookOpen className="h-12 w-12 text-blue-400" />}
              title="Hogwarts Knowledge Quiz"
              description="Test your knowledge with 10 challenging questions. Answer all correctly to achieve the magical score of 9¾!"
            />
            <FeatureCard
              href="/profile"
              icon={<User className="h-12 w-12 text-green-400" />}
              title="Create Your Wizarding Profile"
              description="Discover your Hogwarts house, choose your wand, and select your favorite spells"
            />
          </div>
        </div>
      </section>

      {/* Magical Footer Elements */}
      <div className="absolute bottom-10 left-10">
        <Moon className="h-8 w-8 text-blue-300 twinkle" />
      </div>
      <div className="absolute bottom-16 right-16">
        <Zap className="h-6 w-6 text-yellow-400 sparkle" />
      </div>
    </div>
  )
}

function LocationCard({
  href,
  icon,
  title,
  description,
  image,
}: {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  image: string
}) {
  return (
    <Link href={href} className="group block">
      <div className="bg-slate-800/70 rounded-lg overflow-hidden hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-105 focus-visible:focus interactive-element">
        <div className="relative h-48">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4 text-yellow-400">{icon}</div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  )
}

function FeatureCard({
  href,
  icon,
  title,
  description,
}: {
  href: string
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Link href={href} className="group block">
      <div className="bg-slate-800/70 rounded-lg p-8 hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-105 focus-visible:focus interactive-element">
        <div className="flex items-center mb-4">
          <div className="group-hover:scale-110 transition-transform duration-300">{icon}</div>
          <h3 className="text-2xl font-semibold ml-4 group-hover:text-yellow-400 transition-colors">{title}</h3>
        </div>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
    </Link>
  )
}
