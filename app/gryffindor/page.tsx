import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Flame, Shield, Sword, Heart } from "lucide-react"
import Link from "next/link"

export default function GryffindorPage() {
  return (
    <div
      className="min-h-screen pt-20"
      style={{ background: "linear-gradient(135deg, #7c2d12 0%, #dc2626 50%, #7c2d12 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="float mb-6">
            <Shield className="h-12 w-12 text-yellow-400 mx-auto" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-shadow mb-6">
            <span className="text-yellow-400 glow">Gryffindor</span> Common Room
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Where courage, bravery, and chivalry are celebrated in the warmth of the common room
          </p>
        </div>

        {/* Main Image */}
        <div className="relative mb-16 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Gryffindor Common Room"
            width={800}
            height={400}
            className="w-full h-64 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h2 className="text-2xl font-bold text-white text-shadow">Home of the Brave</h2>
          </div>
        </div>

        {/* Gryffindor Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ValueCard
            icon={<Sword className="h-8 w-8 text-yellow-400" />}
            title="Courage"
            description="Face danger with bravery and determination"
          />
          <ValueCard
            icon={<Heart className="h-8 w-8 text-yellow-400" />}
            title="Chivalry"
            description="Honor and courtesy in all endeavors"
          />
          <ValueCard
            icon={<Flame className="h-8 w-8 text-yellow-400" />}
            title="Daring"
            description="Bold actions in the face of adversity"
          />
          <ValueCard
            icon={<Shield className="h-8 w-8 text-yellow-400" />}
            title="Nerve"
            description="Strength and confidence in difficult times"
          />
        </div>

        {/* Famous Gryffindors */}
        <div className="bg-red-900/30 rounded-lg p-8 mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-yellow-400">Famous Gryffindors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GryffindorCard
              name="Harry Potter"
              title="The Boy Who Lived"
              description="The chosen one who defeated Voldemort and saved the wizarding world"
            />
            <GryffindorCard
              name="Hermione Granger"
              title="Brightest Witch of Her Age"
              description="Brilliant witch known for her intelligence and loyalty to friends"
            />
            <GryffindorCard
              name="Albus Dumbledore"
              title="Greatest Wizard of All Time"
              description="Former Headmaster and one of the most powerful wizards in history"
            />
          </div>
        </div>

        {/* Common Room Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-800/40 rounded-lg p-6">
            <h4 className="text-2xl font-semibold mb-4 text-yellow-400">The Fireplace</h4>
            <p className="text-gray-100 mb-4">
              The heart of the common room, where students gather to study, chat, and warm themselves after long days of
              classes. The fire never goes out, providing constant warmth and comfort.
            </p>
            <ul className="text-gray-200 space-y-2">
              <li>• Comfortable armchairs and sofas</li>
              <li>• Study tables for homework</li>
              <li>• Notice board for announcements</li>
              <li>• Portrait hole entrance</li>
            </ul>
          </div>
          <div className="bg-red-800/40 rounded-lg p-6">
            <h4 className="text-2xl font-semibold mb-4 text-yellow-400">Dormitories</h4>
            <p className="text-gray-100 mb-4">
              Spiral staircases lead to separate dormitories for boys and girls, each with four-poster beds, personal
              trunks, and windows overlooking the grounds.
            </p>
            <ul className="text-gray-200 space-y-2">
              <li>• Four-poster beds with red hangings</li>
              <li>• Personal storage trunks</li>
              <li>• Windows with castle views</li>
              <li>• Magical security features</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
              <Link href="/forbidden-forest">Explore Forbidden Forest</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900"
            >
              <Link href="/profile">Create Your Profile</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-red-800/40 rounded-lg p-6 text-center hover:bg-red-700/40 transition-colors">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">{title}</h3>
      <p className="text-gray-100">{description}</p>
    </div>
  )
}

function GryffindorCard({
  name,
  title,
  description,
}: {
  name: string
  title: string
  description: string
}) {
  return (
    <div className="bg-red-800/50 rounded-lg p-6 hover:bg-red-700/50 transition-colors">
      <h4 className="text-xl font-semibold mb-2 text-yellow-400">{name}</h4>
      <p className="text-yellow-200 text-sm mb-3 font-medium">{title}</p>
      <p className="text-gray-100">{description}</p>
    </div>
  )
}
