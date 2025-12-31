"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Trophy, Medal, Star } from "lucide-react"
import { HandDrawnStar, HandDrawnCircle } from "./doodles"

const achievements = [
  {
    id: 1,
    title: "Production Grade Websites",
    organization: "Professional Achievement",
    year: "2025",
    description: "Delivered multiple production grade Webpages and plugin platforms with clean, maintainable code",
    icon: Trophy,
    color: "gold"
  },
  {
    id: 2,
    title: "Revenue Impact Components",
    organization: "HoliThemes",
    year: "2025",
    description: "Owned revenue impacting components including pricing configuration and checkout workflows",
    icon: Award,
    color: "blue"
  },
  {
    id: 3,
    title: "WordPress Plugin Ecosystem",
    organization: "Global Impact",
    year: "2024",
    description: "Contributed to a WordPress plugin ecosystem actively used by over 700,000 global users",
    icon: Medal,
    color: "green"
  },
  {
    id: 4,
    title: "Code Quality Recognition",
    organization: "Professional Excellence",
    year: "2025",
    description: "Recognized for execution consistency, code quality and documentation clarity",
    icon: Star,
    color: "purple"
  }
]

export function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getColorClasses = (color: string) => {
    const colors = {
      gold: "from-yellow-400 to-orange-500 bg-yellow-50 border-yellow-200",
      blue: "from-blue-400 to-blue-600 bg-blue-50 border-blue-200",
      green: "from-green-400 to-green-600 bg-green-50 border-green-200",
      purple: "from-purple-400 to-purple-600 bg-purple-50 border-purple-200"
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-yellow-50/30 via-white to-orange-50/20 relative overflow-hidden"
    >
      <div className="absolute top-16 left-16 opacity-20">
        <HandDrawnStar className="w-14 h-14 text-yellow-400 animate-pulse-soft" />
      </div>
      <div className="absolute bottom-20 right-16 opacity-15">
        <HandDrawnCircle className="w-20 h-20 text-orange-300 animate-blob" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-yellow-600 font-medium mb-2">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements & Awards</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of recognitions, certifications, and milestones that mark my professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            const colorClasses = getColorClasses(achievement.color)
            
            return (
              <div
                key={achievement.id}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${colorClasses.split(' ')[2]} group`}>
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      
                      <p className="text-blue-600 font-medium mb-3">{achievement.organization}</p>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-6 py-3 rounded-full">
            <Trophy size={20} className="text-yellow-600" />
            <span className="text-yellow-800 font-medium">More achievements coming soon!</span>
          </div>
        </div>
      </div>
    </section>
  )
}