import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Users, Utensils, Star } from "lucide-react"
import Link from "next/link"

export default function GreatHallPage() {
  return (
    <div className="magical-bg min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="float mb-6">
            <Sparkles className="h-12 w-12 text-yellow-400 mx-auto" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-shadow mb-6">
            The <span className="text-yellow-400 glow">Great Hall</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The heart of Hogwarts, where students gather for meals, ceremonies, and magical moments
          </p>
        </div>

        {/* Main Image */}
        <div className="relative mb-16 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="The Great Hall"
            width={800}
            height={400}
            className="w-full h-64 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h2 className="text-2xl font-bold text-white text-shadow">Where Magic Comes to Life</h2>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Star className="h-8 w-8 text-yellow-400" />}
            title="Enchanted Ceiling"
            description="Marvel at the ceiling that mirrors the sky outside, complete with floating candles that never drip wax"
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-red-400" />}
            title="House Tables"
            description="Four long tables where students from each house sit together, fostering friendship and rivalry"
          />
          <FeatureCard
            icon={<Utensils className="h-8 w-8 text-green-400" />}
            title="Magical Feasts"
            description="Experience the wonder of food appearing magically on golden plates during meal times"
          />
        </div>

        {/* Interactive Elements */}
        <div className="bg-slate-800/70 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Great Hall Experiences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-colors">
              <h4 className="text-xl font-semibold mb-3 text-yellow-400">Sorting Ceremony</h4>
              <p className="text-gray-300 mb-4">
                Witness new students being sorted into their houses by the ancient Sorting Hat
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-red-600 rounded-full text-sm">Gryffindor</span>
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Ravenclaw</span>
                <span className="px-3 py-1 bg-yellow-600 rounded-full text-sm">Hufflepuff</span>
                <span className="px-3 py-1 bg-green-600 rounded-full text-sm">Slytherin</span>
              </div>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-colors">
              <h4 className="text-xl font-semibold mb-3 text-yellow-400">Special Events</h4>
              <p className="text-gray-300 mb-4">
                From Halloween feasts to Yule Ball preparations, the Great Hall hosts magical celebrations
              </p>
              <ul className="text-gray-300 space-y-1">
                <li>• Halloween Feast</li>
                <li>• Christmas Dinner</li>
                <li>• Yule Ball</li>
                <li>• End-of-Year Feast</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/gryffindor">Visit Gryffindor Common Room</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <Link href="/quiz">Test Your Knowledge</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-slate-800/70 rounded-lg p-6 hover:bg-slate-700/70 transition-colors">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
