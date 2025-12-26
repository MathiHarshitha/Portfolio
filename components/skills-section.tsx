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
    skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Node.js", "Python", "PHP", "API Design", "MongoDB", "SQL", "Firebase", "Redis", "Git", "WordPress", "Docker", "Vercel", "AI/RAG", "UI/UX", "Animations"],
    color: "from-cyan-400 to-purple-400"
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Next.js", "Vue.js", "Angular"],
    color: "from-blue-400 to-cyan-400"
  },
  {
    id: "backend", 
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "PHP", "API Design", "Express.js", "FastAPI", "GraphQL"],
    color: "from-green-400 to-emerald-400"
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "SQL", "Firebase", "Redis", "PostgreSQL", "MySQL"],
    color: "from-purple-400 to-violet-400"
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "WordPress", "Docker", "Vercel", "AWS", "Linux"],
    color: "from-orange-400 to-red-400"
  },
  {
    id: "design",
    title: "AI & Design",
    icon: Palette,
    skills: ["AI/RAG", "UI/UX", "Animations", "Figma", "Adobe Creative Suite"],
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
      <div className="absolute top-20 left-16 opacity-30">
        <HandDrawnStar className="w-12 h-12 text-purple-400 animate-pulse-soft" />
      </div>
      <div className="absolute bottom-16 right-20 opacity-20">
        <HandDrawnArrow className="w-16 h-16 text-pink-300 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Tabs and Skills */}
          <div className="relative order-1">
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
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 tab-hover ${
                        activeTab === category.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                          : 'bg-white/10 backdrop-blur-sm text-white/70 hover:bg-white/20 hover:text-white'
                      }`}
                      style={{
                        animationDelay: `${skillCategories.indexOf(category) * 100}ms`
                      }}
                    >
                      <IconComponent size={16} />
                      <span className="text-sm font-medium">{category.title}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Skills Display */}
            <div 
              ref={skillsRef}
              className={`relative h-96 transition-all duration-1000 ${
                showTabs ? 'mt-8' : 'mt-0'
              }`}
            >
              {/* Skills Animation Container */}
              <div className="relative w-full h-full">
                {activeCategory.skills.map((skill, index) => {
                  // Create circular arrangement
                  const angle = (index / activeCategory.skills.length) * 2 * Math.PI
                  const radius = showTabs ? 120 : 80 + (index % 3) * 40
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
                        <div className="relative px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white font-medium hover:bg-white/20 transition-all duration-300 cursor-default group-hover:scale-110 group-hover:rotate-1">
                          <span className="relative z-10 text-sm">{skill}</span>
                          
                          {/* Animated border */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${activeCategory.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                        </div>
                      </div>
                    </div>
                  )
                })}
                
                {/* Center element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${activeCategory.color} rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 animate-brain-glow ${
                    showTabs ? 'scale-110' : 'scale-100'
                  }`}>
                    <activeCategory.icon size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Skills Image */}
          <div className={`relative transition-all duration-1000 order-2 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-3xl blur-2xl scale-110" />
              
              {/* Skills image container */}
              <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <Image
                    src="/skills image.png"
                    alt="Skills and Technologies"
                    fill
                    className="object-contain rounded-2xl"
                    priority
                  />
                  
                  {/* Floating particles overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 right-4 w-4 h-4 bg-cyan-500/40 rounded-full animate-pulse" />
                    <div className="absolute bottom-8 left-6 w-3 h-3 bg-blue-500/40 rounded-full animate-pulse delay-300" />
                    <div className="absolute top-1/3 left-4 w-2 h-2 bg-purple-500/40 rounded-full animate-pulse delay-700" />
                    <div className="absolute bottom-1/3 right-6 w-3 h-3 bg-green-500/40 rounded-full animate-pulse delay-1000" />
                    <div className="absolute top-2/3 right-8 w-2 h-2 bg-pink-500/40 rounded-full animate-pulse delay-1300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
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