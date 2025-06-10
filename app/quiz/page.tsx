"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CheckCircle, XCircle, RotateCcw } from "lucide-react"

const quizQuestions = [
  {
    question: "What is the name of Harry Potter's owl?",
    options: ["Hedwig", "Errol", "Pigwidgeon", "Crookshanks"],
    correct: 0,
    explanation: "Hedwig was Harry's loyal snowy owl, a gift from Hagrid for his 11th birthday.",
  },
  {
    question: "Which house does the Sorting Hat almost place Harry in?",
    options: ["Ravenclaw", "Hufflepuff", "Slytherin", "Gryffindor"],
    correct: 2,
    explanation:
      "The Sorting Hat considered placing Harry in Slytherin due to his connection with Voldemort, but Harry's choice led him to Gryffindor.",
  },
  {
    question: "What is the core of Harry's wand?",
    options: ["Dragon heartstring", "Phoenix feather", "Unicorn hair", "Veela hair"],
    correct: 1,
    explanation: "Harry's wand contains a phoenix feather core, specifically from Fawkes, Dumbledore's phoenix.",
  },
  {
    question: "Who is the Half-Blood Prince?",
    options: ["Tom Riddle", "Severus Snape", "Sirius Black", "Remus Lupin"],
    correct: 1,
    explanation: "Severus Snape is the Half-Blood Prince, as revealed in the sixth book. His mother was Eileen Prince.",
  },
  {
    question: "What does the spell 'Expecto Patronum' do?",
    options: ["Disarms opponents", "Repels Dementors", "Unlocks doors", "Creates light"],
    correct: 1,
    explanation:
      "Expecto Patronum conjures a Patronus, a positive energy guardian that repels Dementors and Lethifolds.",
  },
  {
    question: "How many Horcruxes did Voldemort create intentionally?",
    options: ["5", "6", "7", "8"],
    correct: 1,
    explanation: "Voldemort intentionally created 6 Horcruxes, though Harry became an accidental 7th Horcrux.",
  },
  {
    question: "What is the name of the three-headed dog guarding the Philosopher's Stone?",
    options: ["Fluffy", "Fang", "Norbert", "Buckbeak"],
    correct: 0,
    explanation:
      "Fluffy is the three-headed dog that Hagrid borrowed from a 'Greek chappie' to guard the Philosopher's Stone.",
  },
  {
    question: "Which Quidditch position does Harry play?",
    options: ["Keeper", "Chaser", "Beater", "Seeker"],
    correct: 3,
    explanation: "Harry plays as Seeker for the Gryffindor Quidditch team, responsible for catching the Golden Snitch.",
  },
  {
    question: "What is the name of Hagrid's three-headed dog?",
    options: ["Fluffy", "Fang", "Norbert", "Buckbeak"],
    correct: 0,
    explanation:
      "Fluffy is the three-headed dog that Hagrid borrowed from a 'Greek chappie' to guard the Philosopher's Stone.",
  },
  {
    question: "What platform do students use to board the Hogwarts Express?",
    options: ["Platform 9", "Platform 10", "Platform 9¾", "Platform 8½"],
    correct: 2,
    explanation:
      "Platform 9¾ is the magical platform at King's Cross Station where students board the Hogwarts Express.",
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setShowResult(true)
  }

  const handleContinue = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    if (score === quizQuestions.length) {
      return "Perfect! You've achieved the magical score of 9¾! Outstanding wizarding knowledge! 🚂✨"
    }
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 90) return "Outstanding! You're a true Hogwarts scholar! 🏆"
    if (percentage >= 70) return "Excellent! You know your wizarding world well! ⭐"
    if (percentage >= 50) return "Good job! You've got solid knowledge of Harry Potter! 👍"
    return "Keep studying! There's always more magic to learn! 📚"
  }

  if (quizCompleted) {
    return (
      <div className="magical-bg min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="bg-slate-800/90 border-yellow-500/20">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-400" />
              </div>
              <CardTitle className="text-3xl font-bold text-yellow-400">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-8">
                <p className="text-4xl font-bold text-white mb-4">
                  {score === quizQuestions.length ? "9¾" : `${score} / ${quizQuestions.length}`}
                </p>
                <p className="text-xl text-gray-300 mb-6">{getScoreMessage()}</p>
                <div className="bg-slate-700/50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-4">Your Performance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-green-400">{score}</p>
                      <p className="text-gray-300">Correct</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-red-400">{quizQuestions.length - score}</p>
                      <p className="text-gray-300">Incorrect</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-yellow-400">
                        {Math.round((score / quizQuestions.length) * 100)}%
                      </p>
                      <p className="text-gray-300">Score</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={resetQuiz} size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Take Quiz Again
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <a href="/profile">Create Your Profile</a>
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
            <BookOpen className="h-12 w-12 text-yellow-400 mx-auto" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-shadow mb-4">
            <span className="text-yellow-400 glow">Hogwarts</span> Knowledge Quiz
          </h1>
          <p className="text-xl text-gray-300">Test your knowledge of the wizarding world</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm text-gray-300">
              Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / quizQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="bg-slate-800/90 border-yellow-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">{quizQuestions[currentQuestion].question}</CardTitle>
          </CardHeader>
          <CardContent>
            {!showResult ? (
              <>
                <div className="space-y-3 mb-6">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-4 text-left rounded-lg border transition-all duration-200 focus-visible:focus ${
                        selectedAnswer === index
                          ? "bg-yellow-400/20 border-yellow-400 text-yellow-400"
                          : "bg-slate-700/50 border-slate-600 text-gray-300 hover:bg-slate-600/50 hover:border-slate-500"
                      }`}
                    >
                      <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </button>
                  ))}
                </div>
                <Button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  size="lg"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:opacity-50"
                >
                  {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
                </Button>
              </>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  {selectedAnswer === quizQuestions[currentQuestion].correct ? (
                    <div className="flex items-center justify-center mb-4">
                      <CheckCircle className="h-12 w-12 text-green-400 mr-3" />
                      <span className="text-2xl font-bold text-green-400">Correct!</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center mb-4">
                      <XCircle className="h-12 w-12 text-red-400 mr-3" />
                      <span className="text-2xl font-bold text-red-400">Incorrect</span>
                    </div>
                  )}

                  <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                    <p className="text-gray-300 mb-2">
                      <strong>Correct Answer:</strong>{" "}
                      {quizQuestions[currentQuestion].options[quizQuestions[currentQuestion].correct]}
                    </p>
                    <p className="text-gray-400 text-sm">{quizQuestions[currentQuestion].explanation}</p>
                  </div>
                </div>

                <Button onClick={handleContinue} size="lg" className="bg-blue-600 hover:bg-blue-700">
                  {currentQuestion === quizQuestions.length - 1 ? "View Results" : "Continue"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
