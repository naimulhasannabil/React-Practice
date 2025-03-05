"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Leaf, Sun, Cloud, Snowflake } from "lucide-react"

const seasons = [
  {
    name: "Spring",
    description: "A season of renewal and growth as nature awakens from winter.",
    gradient: "from-green-300 to-green-400",
    bgColor: "bg-green-400",
    color: "text-green-700",
    icon: Leaf,
    features: ["Blooming flowers", "Mild temperatures", "Increasing daylight", "Rainfall"],
    months: "March - May",
  },
  {
    name: "Summer",
    description: "The warmest season of the year with long days and abundant sunshine.",
    gradient: "from-yellow-300 to-yellow-400",
    bgColor: "bg-yellow-400",
    color: "text-yellow-700",
    icon: Sun,
    features: ["Hot temperatures", "Long daylight hours", "Outdoor activities", "Vacations"],
    months: "June - August",
  },
  {
    name: "Autumn",
    description: "A transitional season known for colorful foliage and cooling temperatures.",
    gradient: "from-red-300 to-red-400",
    bgColor: "bg-red-400",
    color: "text-red-700",
    icon: Cloud,
    features: ["Falling leaves", "Cooling temperatures", "Harvest time", "Shorter days"],
    months: "September - November",
  },
  {
    name: "Winter",
    description: "The coldest season of the year often associated with snow and holidays.",
    gradient: "from-blue-300 to-blue-400",
    bgColor: "bg-blue-400",
    color: "text-blue-700",
    icon: Snowflake,
    features: ["Cold temperatures", "Possible snowfall", "Shortest days", "Holiday celebrations"],
    months: "December - February",
  },
]

export default function About() {
  const [activeSeason, setActiveSeason] = useState(0)

  const nextSeason = () => {
    setActiveSeason((prev) => (prev === seasons.length - 1 ? 0 : prev + 1))
  }

  const prevSeason = () => {
    setActiveSeason((prev) => (prev === 0 ? seasons.length - 1 : prev - 1))
  }

  const season = seasons[activeSeason]
  const Icon = season.icon

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">The Four Seasons</h1>

      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={season.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-white"
          >
            {/* Hero Section */}
            <div className={`relative h-[400px] bg-gradient-to-br ${season.gradient}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">{season.name}</h2>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Icon className={`w-8 h-8 ${season.color}`} />
                <span className="text-lg font-medium text-gray-700">{season.months}</span>
              </div>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">{season.description}</p>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Characteristics:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {season.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className={`w-3 h-3 rounded-full ${season.bgColor}`}></span>
                      <span className="text-lg text-gray-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevSeason}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors text-gray-700 font-medium"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>

                <div className="flex gap-3">
                  {seasons.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSeason(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeSeason ? `${season.gradient} scale-125` : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to ${seasons[index].name}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSeason}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors text-gray-700 font-medium"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Season Quick Access */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {seasons.map((s, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -5 }}
              onClick={() => setActiveSeason(index)}
              className={`p-6 rounded-2xl transition-shadow hover:shadow-lg ${
                index === activeSeason ? "ring-2 ring-offset-2" : ""
              } ${s.bgColor}`}
              style={{
                ringColor: index === activeSeason ? `var(--${s.name.toLowerCase()}-color, #4F46E5)` : "",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{s.name}</h3>
              <p className="text-white/90 text-sm line-clamp-2">{s.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

