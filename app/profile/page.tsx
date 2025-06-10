"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Wand2, Home, Sparkles, Save } from "lucide-react"

const houses = [
  {
    name: "Gryffindor",
    color: "bg-red-600",
    traits: "Courage, Bravery, Chivalry",
    description: "Where dwell the brave at heart",
  },
  {
    name: "Ravenclaw",
    color: "bg-blue-600",
    traits: "Intelligence, Wisdom, Wit",
    description: "Where those of wit and learning will always find their kind",
  },
  {
    name: "Hufflepuff",
    color: "bg-yellow-600",
    traits: "Loyalty, Patience, Hard Work",
    description: "Where they are just and loyal",
  },
  {
    name: "Slytherin",
    color: "bg-green-600",
    traits: "Ambition, Cunning, Resourcefulness",
    description: "Where you will make your real friends",
  },
]

const wandCores = ["Phoenix Feather", "Dragon Heartstring", "Unicorn Hair", "Veela Hair", "Thestral Tail Hair"]

const wandWoods = [
  "Holly",
  "Oak",
  "Willow",
  "Cherry",
  "Ash",
  "Birch",
  "Cedar",
  "Elm",
  "Hawthorn",
  "Maple",
  "Pine",
  "Rosewood",
  "Walnut",
  "Yew",
]

const spells = [
  "Expelliarmus",
  "Expecto Patronum",
  "Lumos",
  "Accio",
  "Protego",
  "Stupefy",
  "Wingardium Leviosa",
  "Alohomora",
  "Reparo",
  "Obliviate",
  "Crucio",
  "Avada Kedavra",
  "Imperio",
  "Sectumsempra",
  "Episkey",
]

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    house: "",
    wandCore: "",
    wandWood: "",
    wandLength: "",
    favoriteSpells: [] as string[],
    bloodStatus: "",
    patronus: "",
    boggart: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSpellToggle = (spell: string) => {
    setProfile((prev) => ({
      ...prev,
      favoriteSpells: prev.favoriteSpells.includes(spell)
        ? prev.favoriteSpells.filter((s) => s !== spell)
        : prev.favoriteSpells.length < 3
          ? [...prev.favoriteSpells, spell]
          : prev.favoriteSpells,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    const selectedHouse = houses.find((h) => h.name === profile.house)

    return (
      <div className="magical-bg min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="bg-slate-800/90 border-yellow-500/20">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <User className="h-16 w-16 text-yellow-400" />
              </div>
              <CardTitle className="text-3xl font-bold text-yellow-400">Welcome, {profile.name}!</CardTitle>
              <p className="text-gray-300">Your wizarding profile has been created</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* House Information */}
                <div className="text-center">
                  <div
                    className={`w-24 h-24 ${selectedHouse?.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Home className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">{profile.house}</h3>
                  <p className="text-gray-300 mb-2">{selectedHouse?.description}</p>
                  <p className="text-sm text-gray-400">{selectedHouse?.traits}</p>
                </div>

                {/* Wand Information */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-amber-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Wand2 className="h-12 w-12 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">Your Wand</h3>
                  <p className="text-gray-300 mb-1">
                    {profile.wandLength}" {profile.wandWood}
                  </p>
                  <p className="text-gray-300 mb-2">{profile.wandCore} core</p>
                  <p className="text-sm text-gray-400">The wand chooses the wizard</p>
                </div>
              </div>

              {/* Additional Details */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">Personal Details</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>
                      <strong>Blood Status:</strong> {profile.bloodStatus}
                    </p>
                    <p>
                      <strong>Patronus:</strong> {profile.patronus}
                    </p>
                    <p>
                      <strong>Boggart:</strong> {profile.boggart}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">Favorite Spells</h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.favoriteSpells.map((spell, index) => (
                      <span key={index} className="px-3 py-1 bg-yellow-600 text-black rounded-full text-sm">
                        {spell}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black mr-4"
                >
                  Edit Profile
                </Button>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="/quiz">Take the Quiz</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="magical-bg min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="float mb-6">
            <User className="h-12 w-12 text-yellow-400 mx-auto" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-shadow mb-4">
            Create Your <span className="text-yellow-400 glow">Wizarding Profile</span>
          </h1>
          <p className="text-xl text-gray-300">Discover your place in the magical world</p>
        </div>

        <Card className="bg-slate-800/90 border-yellow-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400 flex items-center">
              <Sparkles className="h-6 w-6 mr-2" />
              Wizarding Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-400">Basic Information</h3>
                <div>
                  <Label htmlFor="name" className="text-gray-300">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your wizarding name"
                    className="bg-slate-700 border-slate-600 text-white focus:border-yellow-400"
                    required
                  />
                </div>
              </div>

              {/* House Selection */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-400">Hogwarts House</h3>
                <RadioGroup
                  value={profile.house}
                  onValueChange={(value) => setProfile((prev) => ({ ...prev, house: value }))}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {houses.map((house) => (
                    <Label
                      key={house.name}
                      htmlFor={house.name}
                      className="flex items-center space-x-3 p-4 rounded-lg border border-slate-600 hover:border-yellow-400 cursor-pointer transition-colors"
                    >
                      <RadioGroupItem id={house.name} value={house.name} />
                      <div className={`w-8 h-8 ${house.color} rounded-full`} />
                      <div>
                        <p className="font-semibold text-white">{house.name}</p>
                        <p className="text-sm text-gray-400">{house.traits}</p>
                      </div>
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              {/* Wand Selection */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-400">Your Wand</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="wandWood" className="text-gray-300">
                      Wand Wood
                    </Label>
                    <Select
                      value={profile.wandWood}
                      onValueChange={(value) => setProfile((prev) => ({ ...prev, wandWood: value }))}
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-yellow-400">
                        <SelectValue placeholder="Select wood" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {wandWoods.map((wood) => (
                          <SelectItem key={wood} value={wood} className="text-white hover:bg-slate-600">
                            {wood}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="wandCore" className="text-gray-300">
                      Wand Core
                    </Label>
                    <Select
                      value={profile.wandCore}
                      onValueChange={(value) => setProfile((prev) => ({ ...prev, wandCore: value }))}
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-yellow-400">
                        <SelectValue placeholder="Select core" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {wandCores.map((core) => (
                          <SelectItem key={core} value={core} className="text-white hover:bg-slate-600">
                            {core}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="wandLength" className="text-gray-300">
                      Length (inches)
                    </Label>
                    <Input
                      id="wandLength"
                      type="number"
                      min="8"
                      max="18"
                      step="0.25"
                      value={profile.wandLength}
                      onChange={(e) => setProfile((prev) => ({ ...prev, wandLength: e.target.value }))}
                      placeholder="11"
                      className="bg-slate-700 border-slate-600 text-white focus:border-yellow-400"
                    />
                  </div>
                </div>
              </div>

              {/* Favorite Spells */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-400">Favorite Spells (Choose up to 3)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {spells.map((spell) => (
                    <button
                      key={spell}
                      type="button"
                      onClick={() => handleSpellToggle(spell)}
                      className={`p-3 rounded-lg border transition-all duration-200 text-sm ${
                        profile.favoriteSpells.includes(spell)
                          ? "bg-yellow-400/20 border-yellow-400 text-yellow-400"
                          : "bg-slate-700 border-slate-600 text-gray-300 hover:border-slate-500"
                      } ${profile.favoriteSpells.length >= 3 && !profile.favoriteSpells.includes(spell) ? "opacity-50 cursor-not-allowed" : ""}`}
                      disabled={profile.favoriteSpells.length >= 3 && !profile.favoriteSpells.includes(spell)}
                    >
                      {spell}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-400">Selected: {profile.favoriteSpells.length}/3</p>
              </div>

              {/* Additional Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-400">Additional Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="bloodStatus" className="text-gray-300">
                      Blood Status
                    </Label>
                    <Select
                      value={profile.bloodStatus}
                      onValueChange={(value) => setProfile((prev) => ({ ...prev, bloodStatus: value }))}
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-yellow-400">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="Pure-blood" className="text-white hover:bg-slate-600">
                          Pure-blood
                        </SelectItem>
                        <SelectItem value="Half-blood" className="text-white hover:bg-slate-600">
                          Half-blood
                        </SelectItem>
                        <SelectItem value="Muggle-born" className="text-white hover:bg-slate-600">
                          Muggle-born
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="patronus" className="text-gray-300">
                      Patronus
                    </Label>
                    <Input
                      id="patronus"
                      value={profile.patronus}
                      onChange={(e) => setProfile((prev) => ({ ...prev, patronus: e.target.value }))}
                      placeholder="e.g., Stag, Doe, Phoenix"
                      className="bg-slate-700 border-slate-600 text-white focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="boggart" className="text-gray-300">
                      Boggart (Greatest Fear)
                    </Label>
                    <Input
                      id="boggart"
                      value={profile.boggart}
                      onChange={(e) => setProfile((prev) => ({ ...prev, boggart: e.target.value }))}
                      placeholder="e.g., Dementors, Spiders"
                      className="bg-slate-700 border-slate-600 text-white focus:border-yellow-400"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold"
                  disabled={!profile.name || !profile.house}
                >
                  <Save className="h-5 w-5 mr-2" />
                  Create My Wizarding Profile
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
