"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Zap, Users, Trophy } from "lucide-react"
import { CodeSnippet } from "./code-snippet"

const stats = [
  { icon: Code2, value: "1+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
  { icon: Users, value: "700K+", label: "Plugin Users", color: "from-green-500 to-emerald-500" },
  { icon: Trophy, value: "15+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
  { icon: Zap, value: "100%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" }
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const tabs = [
    {
      title: "Developer",
      content: "I specialize in building modern web applications with React, JavaScript, and cutting-edge technologies. My focus is on creating scalable, performant solutions."
    },
    {
      title: "Problem Solver", 
      content: "I approach challenges with analytical thinking and creative solutions. Every project is an opportunity to innovate and deliver exceptional results."
    },
    {
      title: "Team Player",
      content: "Collaboration drives success. I work effectively with cross-functional teams to deliver projects that exceed expectations and business goals."
    }
  ]

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-orange-50/50 via-white to-pink-50/30 overflow-hidden relative"
    >
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 animate-float" />
      <div className="absolute top-40 right-16 w-16 h-16 bg-gradient-to-br from-purple-200 to-blue-200 rotate-45 opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-br from-green-200 to-cyan-200 rounded-full opacity-20 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Morphing background blobs */}
            <div className="absolute inset-0">
              <div
                className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-yellow-200/40 to-orange-200/40 animate-blob"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              />
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-200/40 to-purple-200/40 animate-blob"
                style={{ animationDelay: "2s", borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" }}
              />
              <div
                className="absolute top-1/2 -right-4 w-20 h-20 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 animate-blob"
                style={{ animationDelay: "4s", borderRadius: "40% 60% 30% 70% / 40% 50% 60% 30%" }}
              />
            </div>

            {/* Main coding dashboard with glassmorphism effect */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-white/10 backdrop-blur-md border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent z-10" />
              
              {/* Dashboard Content */}
              <div className="p-8 relative z-20">
                {/* Core Technologies Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Core Technologies</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 p-3 bg-blue-100 rounded-lg">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span className="text-sm font-medium text-gray-700">React & Next.js</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-yellow-100 rounded-lg">
                      <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                      <span className="text-sm font-medium text-gray-700">JavaScript & TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-green-100 rounded-lg">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Node.js & Python</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-purple-100 rounded-lg">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      <span className="text-sm font-medium text-gray-700">Tailwind & CSS</span>
                    </div>
                  </div>
                </div>

                {/* Current Status Dashboard */}
                <div className="bg-gray-900 rounded-2xl p-6 shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-gray-300 text-sm font-mono">developerLocation.js</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-xs text-gray-400">LIVE</span>
                    </div>
                  </div>
                  
                  <div className="font-mono text-sm">
                    <div className="text-gray-300">
                      <span className="text-purple-400">function</span>{" "}
                      <span className="text-blue-400">Location</span>
                      <span className="text-gray-300">{"({ developer }) {"}</span>
                    </div>
                    <div className="text-gray-300 ml-4 mt-1">
                      <span className="text-purple-400">return</span>{" "}
                      <span className="text-gray-300">{"("}</span>
                    </div>
                    <div className="text-gray-300 ml-8 mt-1">
                      <span className="text-red-400">{"<p>"}</span>
                    </div>
                    <div className="text-gray-300 ml-12 mt-1">
                      <span className="text-cyan-400">Harshitha</span>
                      <span className="text-gray-300">.isAlive && isWorkingHours</span>
                    </div>
                    <div className="text-gray-300 ml-16 mt-1">
                      <span className="text-gray-300">? </span>
                      <span className="text-green-400">'💻 Coding at desk'</span>
                    </div>
                    <div className="text-gray-300 ml-16 mt-1">
                      <span className="text-gray-300">: </span>
                      <span className="text-blue-400">'😴 Sleeping mode'</span>
                    </div>
                    <div className="text-gray-300 ml-8 mt-1">
                      <span className="text-red-400">{"</p>"}</span>
                    </div>
                    <div className="text-gray-300 ml-4 mt-1">
                      <span className="text-gray-300">{");"}</span>
                    </div>
                    <div className="text-gray-300 mt-1">
                      <span className="text-gray-300">{"}"}</span>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="text-gray-500 text-xs">
                        // Current location: <span className="text-green-400">💻 Coding at desk</span>
                      </div>
                      {/* <div className="text-gray-500 text-xs">
                        // Working hours: 9:00 AM - 9:00 PM
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-600 font-medium text-sm">Available for new projects</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                I Build Digital
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h2>
            </div>

            {/* Interactive tabs */}
            <div className="space-y-6">
              <div className="flex gap-2">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.title}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === index
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              
              <div className="relative h-20">
                {tabs.map((tab, index) => (
                  <p
                    key={tab.title}
                    className={`absolute inset-0 text-gray-600 leading-relaxed transition-all duration-500 ${
                      activeTab === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    {tab.content}
                  </p>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 p-4 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                          <Icon size={16} className="text-white" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-gray-800">{stat.value}</p>
                          <p className="text-xs text-gray-600">{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Fun Code Snippet */}
            <div className="space-y-4">
              {/* <h3 className="text-lg font-semibold text-gray-900">Current Status</h3> */}
              {/* <CodeSnippet /> */}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Let's Work Together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}