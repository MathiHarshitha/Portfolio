"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, Globe, Palette, Brain, Users } from "lucide-react"
import { HandDrawnArrow, HandDrawnStar } from "./doodles"

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    color: "blue"
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Python", "Java", "SQL", "MongoDB"],
    color: "green"
  },
  {
    title: "Tools & Design",
    icon: Palette,
    skills: ["Git", "Figma", "Adobe Creative Suite", "VS Code"],
    color: "purple"
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Communication", "Problem Solving", "Team Work"],
    color: "orange"
  }
]

export function SkillsSection() {
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
      blue: "from-blue-400 to-blue-600 bg-blue-50 text-blue-600",
      green: "from-green-400 to-green-600 bg-green-50 text-green-600",
      purple: "from-purple-400 to-purple-600 bg-purple-50 text-purple-600",
      orange: "from-orange-400 to-orange-600 bg-orange-50 text-orange-600"
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      <div className="absolute top-20 left-16 opacity-20">
        <HandDrawnStar className="w-12 h-12 text-purple-400 animate-pulse-soft" />
      </div>
      <div className="absolute bottom-16 right-20 opacity-15">
        <HandDrawnArrow className="w-16 h-16 text-blue-300 animate-float" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple-500 font-medium mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const colorClasses = getColorClasses(category.color)
            
            return (
              <div
                key={category.title}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className={`${colorClasses.split(' ')[2]} ${colorClasses.split(' ')[3]} px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}