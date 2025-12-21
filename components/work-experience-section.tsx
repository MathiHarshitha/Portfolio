"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { HandDrawnArrow, HandDrawnCode, HandDrawnLightbulb } from "./doodles"

const experiences = [
  {
    id: 1,
    title: "Web Developer and Content Writer",
    company: "HoliThemes",
    location: "Remote",
    period: "Nov 2023 - Present",
    type: "Full-time",
    description: "Results-driven Web Developer with ownership across design, development and production deployment. Strong execution focus across frontend, backend, payments and deployment workflows.",
    achievements: [
      "Developed complete development and maintenance of responsive websites with motion-driven layouts",
      "Built and scaled product pages with conversion-focused structure and feature clarity",
      "Delivered production-ready code, animations, and documentation aligned with business goals",
      "Built plugin platforms used by over 700,000 global users",
      "Handled pricing architecture, payments, and checkout workflows"
    ],
    technologies: ["React", "JavaScript", "WordPress", "PHP", "Tailwind CSS", "Node.js"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "Jan 2023 - Oct 2023",
    type: "Contract",
    description: "Provided comprehensive web development services to various clients, focusing on modern web technologies and user experience.",
    achievements: [
      "Developed responsive web applications using React and Node.js",
      "Implemented database solutions with SQL and MongoDB",
      "Created custom WordPress themes and plugins",
      "Delivered projects on time with high client satisfaction"
    ],
    technologies: ["React", "Node.js", "MongoDB", "SQL", "WordPress", "JavaScript"]
  }
]

export function WorkExperienceSection() {
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
      id="experience"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-purple-50/30 via-white to-orange-50/20 overflow-hidden relative"
    >
      {/* Decorative doodles */}
      <div className="absolute top-20 left-10 opacity-20">
        <HandDrawnCode className="w-16 h-16 text-purple-400 animate-float" />
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <HandDrawnLightbulb className="w-12 h-12 text-orange-400 animate-float" style={{ animationDelay: "2s" }} />
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-20">
        <HandDrawnArrow className="w-20 h-10 text-pink-400 animate-pulse-soft" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium mb-2">Career Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="relative inline-block">
            <HandDrawnArrow className="absolute -bottom-2 left-0 w-full h-4 text-orange-300 opacity-60" />
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-orange-300 to-purple-300 opacity-30" />
              )}
              
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ml-0 md:ml-16 relative">
                {/* Timeline dot */}
                <div className="absolute -left-4 md:-left-12 top-8 w-8 h-8 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-orange-600 font-medium mb-2">
                          <span>{exp.company}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm bg-orange-100 px-2 py-1 rounded-full">{exp.type}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-orange-50 to-purple-50 text-gray-700 border border-orange-100"
                          >
                            {tech}
                          </span>
                        ))}
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