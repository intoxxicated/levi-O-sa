import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TreePine, Eye, Moon, Zap } from "lucide-react"
import Link from "next/link"

export default function ForbiddenForestPage() {
  return (
    <div
      className="min-h-screen pt-20"
      style={{ background: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #064e3b 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="float mb-6">
            <TreePine className="h-12 w-12 text-green-400 mx-auto" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-shadow mb-6">
            The <span className="text-green-400 glow">Forbidden Forest</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A mysterious and dangerous woodland filled with magical creatures and ancient secrets
          </p>
        </div>

        {/* Warning Banner */}
        <div className="bg-red-900/50 border border-red-500 rounded-lg p-6 mb-16 text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-2">⚠️ DANGER ⚠️</h2>
          <p className="text-gray-200">
            The Forbidden Forest is off-limits to students except in the company of teachers or gamekeeper. Enter at
            your own risk!
          </p>
        </div>

        {/* Main Image */}
        <div className="relative mb-16 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Forbidden Forest"
            width={800}
            height={400}
            className="w-full h-64 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h2 className="text-2xl font-bold text-white text-shadow">Where Darkness Dwells</h2>
          </div>
        </div>

        {/* Magical Creatures */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-green-400">Magical Creatures</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CreatureCard
              name="Centaurs"
              danger="Moderate"
              description="Intelligent beings who are skilled in astronomy and divination. They prefer to avoid human contact."
              icon="🏹"
            />
            <CreatureCard
              name="Acromantulas"
              danger="Extreme"
              description="Giant spiders led by Aragog. Highly dangerous and should be avoided at all costs."
              icon="🕷️"
            />
            <CreatureCard
              name="Unicorns"
              danger="Peaceful"
              description="Pure and magical creatures whose blood has powerful healing properties."
              icon="🦄"
            />
            <CreatureCard
              name="Thestrals"
              danger="Low"
              description="Winged skeletal horses visible only to those who have witnessed death."
              icon="🦇"
            />
            <CreatureCard
              name="Hippogriffs"
              danger="Moderate"
              description="Proud creatures with the head of an eagle and body of a horse. Require proper respect."
              icon="🦅"
            />
            <CreatureCard
              name="Werewolves"
              danger="Extreme"
              description="Humans transformed during full moon. Extremely dangerous when transformed."
              icon="🐺"
            />
          </div>
        </div>

        {/* Forest Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <FeatureCard
            icon={<Moon className="h-8 w-8 text-blue-400" />}
            title="Ancient Magic"
            description="The forest is saturated with old magic, making it a place where spells behave unpredictably and magical creatures thrive in their natural habitat."
          />
          <FeatureCard
            icon={<Eye className="h-8 w-8 text-purple-400" />}
            title="Hidden Secrets"
            description="Deep within the forest lie ancient ruins, hidden clearings, and mysterious artifacts left by wizards of old."
          />
          <FeatureCard
            icon={<TreePine className="h-8 w-8 text-green-400" />}
            title="Dense Canopy"
            description="The thick canopy blocks out most sunlight, creating a perpetual twilight that adds to the forest's mysterious atmosphere."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-yellow-400" />}
            title="Magical Phenomena"
            description="Strange lights, moving shadows, and unexplained sounds are common occurrences in this enchanted woodland."
          />
        </div>

        {/* Notable Events */}
        <div className="bg-green-900/30 rounded-lg p-8 mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-green-400">Notable Events</h3>
          <div className="space-y-6">
            <EventCard
              title="Harry's First Detention"
              description="Harry, Hermione, Neville, and Draco served detention in the forest, where they encountered a hooded figure drinking unicorn blood."
            />
            <EventCard
              title="Aragog's Lair"
              description="Harry and Ron followed spiders into the forest and met Aragog, the ancient Acromantula, learning about the Chamber of Secrets."
            />
            <EventCard
              title="The Battle of Hogwarts"
              description="During the final battle, the forest became a refuge and battleground, with magical creatures joining the fight."
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/quiz">Test Your Creature Knowledge</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900"
            >
              <Link href="/">Return to Safety</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CreatureCard({
  name,
  danger,
  description,
  icon,
}: {
  name: string
  danger: string
  description: string
  icon: string
}) {
  const dangerColor =
    danger === "Extreme"
      ? "text-red-400"
      : danger === "Moderate"
        ? "text-yellow-400"
        : danger === "Low"
          ? "text-blue-400"
          : "text-green-400"

  return (
    <div className="bg-green-800/40 rounded-lg p-6 hover:bg-green-700/40 transition-colors">
      <div className="text-4xl mb-4 text-center">{icon}</div>
      <h4 className="text-xl font-semibold mb-2 text-green-400">{name}</h4>
      <p className={`text-sm font-medium mb-3 ${dangerColor}`}>Danger Level: {danger}</p>
      <p className="text-gray-200">{description}</p>
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
    <div className="bg-green-800/40 rounded-lg p-6 hover:bg-green-700/40 transition-colors">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3 text-green-400">{title}</h3>
      </div>
      <p className="text-gray-200">{description}</p>
    </div>
  )
}

function EventCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-green-800/50 rounded-lg p-6">
      <h4 className="text-xl font-semibold mb-3 text-green-400">{title}</h4>
      <p className="text-gray-200">{description}</p>
    </div>
  )
}
