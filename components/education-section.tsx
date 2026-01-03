"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, GraduationCap } from "lucide-react"
import { HandDrawnBook, HandDrawnStar, HandDrawnCircle } from "./doodles"

const education = [
  {
    id: 1,
    degree: "Bachelor's of Technology",
    institution: "St. Marys Womens Engineering College, Guntur",
    location: "Guntur, India",
    period: "2019 - 2023",
    grade: "ECE",
    description: "Bachelor of Technology in Electronics and Communication Engineering with strong foundation in technical principles."
  },
  {
    id: 2,
    degree: "Intermediate ",
    institution: "Sri Chaitanya Girls Junior Kalasala, Vijayawada", 
    location: "Vijayawada, India",
    period: "2017 - 2019",
    grade: "MPC",
    description: "Intermediate education in Mathematics, Physics, and Chemistry providing strong analytical foundation."
  },
  {
    id: 3,
    degree: "SSC",
    institution: "Vijayasri Sunflower High School, Challapalli",
    location: "Challapalli, India",
    period: "2017",
    grade: "Secondary Education",
    description: "Completed secondary school education with excellent academic performance."
  }
]

export function EducationSection() {
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

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50/30 via-white to-green-50/20 overflow-hidden relative"
    >
      {/* Decorative doodles */}
      <div className="absolute top-16 right-16 opacity-20">
        <HandDrawnBook className="w-14 h-14 text-blue-400 animate-float" />
      </div>
      <div className="absolute bottom-20 left-16 opacity-20">
        <HandDrawnStar className="w-10 h-10 text-green-400 animate-pulse-soft" />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-15">
        <HandDrawnCircle className="w-24 h-24 text-purple-300 animate-blob" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">Academic Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My educational journey has provided me with a strong foundation in engineering and business principles
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-blue-300 to-green-300 opacity-30" />
              )}
              
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ml-0 md:ml-16 relative group">
                {/* Timeline dot */}
                <div className="absolute -left-4 md:-left-12 top-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <GraduationCap size={16} className="text-white" />
                </div>

                <div className="grid md:grid-cols-4 gap-6 items-start">
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-medium mb-3">
                      <span>{edu.institution}</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {edu.grade}
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                  </div>

                  <div className="flex justify-center md:justify-end">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                        <GraduationCap size={24} className="text-blue-500" />
                      </div>
                      <div className="absolute -top-1 -right-1">
                        <HandDrawnStar className="w-6 h-6 text-yellow-400 animate-pulse-soft" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}