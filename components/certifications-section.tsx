"use client"

import { useEffect, useRef, useState } from "react"
import { Award, ExternalLink, Clock } from "lucide-react"
import { HandDrawnStar, HandDrawnCircle } from "./doodles"

const certifications = [
  {
    id: 1,
    title: "ReactJS Certification",
    organization: "NxtWave",
    year: "2024",
    description: "Comprehensive certification in React.js development covering components, hooks, and modern React patterns",
    icon: Award,
    color: "blue",
    certificateUrl: "https://certificates.ccbp.in/intensive/react-js?id=RONYUPPTJE",
    status: "completed"
  },
  {
    id: 2,
    title: "JavaScript Certification",
    organization: "NxtWave",
    year: "2023",
    description: "Dynamic web application development using JavaScript, DOM manipulation, and modern ES6+ features",
    icon: Award,
    color: "yellow",
    certificateUrl: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=UDGSOKSFPT",
    status: "completed"
  },
  {
    id: 3,
    title: "Python Programming",
    organization: "NxtWave",
    year: "2023",
    description: "Foundational programming concepts and Python development skills for backend applications",
    icon: Award,
    color: "green",
    certificateUrl: "https://certificates.ccbp.in/intensive/programming-foundations?id=JAQSPUBWHE",
    status: "completed"
  },
  {
    id: 4,
    title: "Internship Certificate",
    organization: "Oasis Infobyte",
    year: "2023",
    description: "Successful completion of web development internship with hands-on project experience",
    icon: Award,
    color: "purple",
    certificateUrl: "https://drive.google.com/file/d/1Aq5iAKUzvgezx2_6FfNYu1YDMXXITLuj/view?usp=sharing",
    status: "completed"
  },
  {
    id: 5,
    title: "Agentic AI Development Certification",
    organization: "Ready Tensor",
    year: "2025",
    description: "Advanced certification in AI agent development and implementation",
    icon: Clock,
    color: "orange",
    certificateUrl: "#",
    status: "ongoing"
  }
]

export function CertificationsSection() {
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
      blue: "from-blue-400 to-blue-600 bg-blue-50 border-blue-200",
      yellow: "from-yellow-400 to-orange-500 bg-yellow-50 border-yellow-200",
      green: "from-green-400 to-green-600 bg-green-50 border-green-200",
      purple: "from-purple-400 to-purple-600 bg-purple-50 border-purple-200",
      orange: "from-orange-400 to-red-500 bg-orange-50 border-orange-200"
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/20 relative overflow-hidden"
    >
      <div className="absolute top-16 left-16 opacity-20">
        <HandDrawnStar className="w-14 h-14 text-indigo-400 animate-pulse-soft" />
      </div>
      <div className="absolute bottom-20 right-16 opacity-15">
        <HandDrawnCircle className="w-20 h-20 text-purple-300 animate-blob" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-medium mb-2">Professional Growth</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my technical expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            const colorClasses = getColorClasses(cert.color)
            
            return (
              <div
                key={cert.id}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${colorClasses.split(' ')[2]} group relative`}>
                  {cert.status === "ongoing" && (
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Ongoing
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {cert.year}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h3>
                      <p className="text-indigo-600 font-medium mb-3">{cert.organization}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{cert.description}</p>
                  
                  {cert.certificateUrl !== "#" && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      View Certificate
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}