"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Sparkles, Zap, Database, Wrench, Palette, Server, Monitor } from "lucide-react"
import { HandDrawnArrow, HandDrawnStar } from "./doodles"
import Image from "next/image"

const skillCategories = [
  {
    id: "all",
    title: "All Skills",
    icon: Sparkles,
    skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Node.js", "Python", "PHP", "SQL", "Git", "WordPress", "Vercel", "AI/RAG", "Animations"],
    color: "from-cyan-400 to-purple-400"
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"],
    color: "from-blue-400 to-cyan-400"
  },
  {
    id: "backend", 
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "PHP", ],
    color: "from-green-400 to-emerald-400"
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", ],
    color: "from-purple-400 to-violet-400"
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "WordPress", "Vercel", ],
    color: "from-orange-400 to-red-400"
  },
  {
    id: "design",
    title: "AI & Design",
    icon: Palette,
    skills: ["AI/RAG", "Animations"],
    color: "from-pink-400 to-rose-400"
  }
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [showTabs, setShowTabs] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Delay showing tabs to create the animation effect
          setTimeout(() => {
            setShowTabs(true)
          }, 1500)
        }
      },
      { threshold: 0.3 }
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

  const activeCategory = skillCategories.find(cat => cat.id === activeTab) || skillCategories[0]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden min-h-screen"
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
      <div className="absolute top-20 left-8 sm:left-16 opacity-30">
        <HandDrawnStar className="w-10 sm:w-12 h-10 sm:h-12 text-purple-400 animate-pulse-soft" />
      </div>
      <div className="absolute bottom-16 right-10 sm:right-20 opacity-20">
        <HandDrawnArrow className="w-12 sm:w-16 h-12 sm:h-16 text-pink-300 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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

        {/* Main Content Container */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Tabs and Skills */}
          <div className="relative order-2 lg:order-1">
            {/* Tabs */}
            <div className={`mb-8 transition-all duration-1000 ${
              showTabs ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skillCategories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-all duration-300 tab-hover text-xs sm:text-sm cursor-pointer ${
                        activeTab === category.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                          : 'bg-white/10 backdrop-blur-sm text-white/70 hover:bg-white/20 hover:text-white'
                      }`}
                      style={{
                        animationDelay: `${skillCategories.indexOf(category) * 100}ms`
                      }}
                    >
                      <IconComponent size={14} className="sm:w-4 sm:h-4" />
                      <span className="font-medium">{category.title}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Skills Display */}
            <div 
              ref={skillsRef}
              className={`relative h-80 sm:h-96 transition-all duration-1000 ${
                showTabs ? 'mt-8' : 'mt-0'
              }`}
            >
              {/* Skills Animation Container - Use CSS for responsive radius */}
              <div className="relative w-full h-full skills-container">
                {activeCategory.skills.map((skill, index) => {
                  // Create circular arrangement with mobile-friendly radius
                  const angle = (index / activeCategory.skills.length) * 2 * Math.PI
                  const baseRadius = showTabs ? 100 : 60
                  const mobileRadius = showTabs ? 80 : 50
                  // Use a responsive approach without window object
                  const radius = baseRadius + (index % 3) * 30
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius
                  
                  return (
                    <div
                      key={`${activeTab}-${skill}`}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 skill-transition ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      } ${
                        showTabs ? 'z-20' : 'z-10'
                      }`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transitionDelay: `${index * 100}ms`,
                        animationDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="group relative animate-skill-float">
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${activeCategory.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                        
                        {/* Skill badge */}
                        <div className="relative px-2 py-1 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white font-medium hover:bg-white/20 transition-all duration-300 cursor-default group-hover:scale-110 group-hover:rotate-1">
                          <span className="relative z-10 text-xs sm:text-sm">{skill}</span>
                          
                          {/* Animated border */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${activeCategory.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                        </div>
                      </div>
                    </div>
                  )
                })}
                
                {/* Center element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${activeCategory.color} rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 animate-brain-glow ${
                    showTabs ? 'scale-110' : 'scale-100'
                  }`}>
                    <activeCategory.icon size={16} className="text-white sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Skills Image */}
          <div className={`relative transition-all duration-1000 order-1 lg:order-2 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-3xl blur-2xl scale-110" />
              
              {/* Skills image container */}
              <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl p-4 sm:p-8 border border-white/10">
                <div className="relative w-full aspect-square max-w-sm sm:max-w-md mx-auto">
                  <Image
                    src="/Skills image.png"
                    alt="Skills and Technologies"
                    fill
                    className="object-contain rounded-2xl"
                    priority
                  />
                  
                  {/* Floating particles overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 right-4 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500/40 rounded-full animate-pulse" />
                    <div className="absolute bottom-8 left-6 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500/40 rounded-full animate-pulse delay-300" />
                    <div className="absolute top-1/3 left-4 w-2 h-2 bg-purple-500/40 rounded-full animate-pulse delay-700" />
                    <div className="absolute bottom-1/3 right-6 w-2 h-2 sm:w-3 sm:h-3 bg-green-500/40 rounded-full animate-pulse delay-1000" />
                    <div className="absolute top-2/3 right-8 w-2 h-2 bg-pink-500/40 rounded-full animate-pulse delay-1300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 sm:px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-full">
            <Zap className="text-yellow-400 flex-shrink-0" size={24} />
            <div className="text-left">
              <div className="text-white font-bold text-base sm:text-lg">Ready to Build Something Amazing?</div>
              <div className="text-white/70 text-xs sm:text-sm">Let's turn your ideas into reality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}