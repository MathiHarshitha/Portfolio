"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Sparkles, Zap } from "lucide-react"
import { HandDrawnArrow, HandDrawnStar } from "./doodles"

const skills = [
  "React", "JavaScript", "TypeScript", "Node.js", "Python", "PHP",
  "MongoDB", "SQL", "Tailwind CSS", "WordPress", "Git", "AI/RAG",
  "HTML/CSS", "Firebase", "Docker", "Vercel", "API Design", "UI/UX"
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-16 opacity-30">
        <HandDrawnStar className="w-12 h-12 text-purple-400 animate-pulse-soft" />
      </div>
      <div className="absolute bottom-16 right-20 opacity-20">
        <HandDrawnArrow className="w-16 h-16 text-pink-300 animate-float" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-white/80 font-medium text-sm">Tech Stack</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Skills &
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </div>

        {/* Floating Skills Cloud */}
        <div className="relative h-96 mb-16">
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 2 * Math.PI
            const radius = 120 + (index % 3) * 40
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            
            return (
              <div
                key={skill}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="group relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-400/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Skill badge */}
                  <div className="relative px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white font-medium hover:bg-white/20 transition-all duration-300 cursor-default group-hover:scale-110">
                    <span className="relative z-10">{skill}</span>
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            )
          })}
          
          {/* Center element */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <Code2 size={32} className="text-white" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
            <Zap className="text-yellow-400" size={24} />
            <div className="text-left">
              <div className="text-white font-bold text-lg">Ready to Build Something Amazing?</div>
              <div className="text-white/70 text-sm">Let's turn your ideas into reality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}