"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { HandDrawnArrow, HandDrawnCode, HandDrawnLightbulb } from "./doodles"
import Image from "next/image"

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Gait View Technophiles Private Limited",
    logo: "https://app.gaitview.com/favicon.ico",
    location: "Hyderabad - India",
    period: "Apr 2026 - Present",
    type: "Full-time",
    description:
      "Develop and maintain production School ERP modules using React, Redux, JavaScript, and REST APIs. Build reusable UI components for student management, fees, attendance, examinations, and administrative workflows while resolving production issues in collaboration with backend engineers.",
    achievements: [
      "Developed and maintained production ERP modules for school operations and academic workflows.",
      "Integrated APIs and built reusable, responsive frontend components for key administrative processes.",
      "Collaborated with backend teams to troubleshoot issues and improve data-driven user workflows."
    ],
    technologies: ["React", "Redux", "JavaScript", "REST APIs", "SCSS", "Production ERP"]
  },
  {
    id: 2,
    title: "Freelance Full-Stack Developer, Part-Time",
    company: "SabariyaTech",
    logo: "/SabariyaTech.png",
    location: "Remote",
    period: "Sep 2025 - Present",
    type: "Freelance",
    description:
      "Develop and maintain client websites and web applications, working across frontend implementation, backend integration, database setup, deployment, and ongoing maintenance. Select technologies based on each project requirement and business goals.",
    achievements: [
      "Delivered client websites and applications with responsive frontend and full-stack integration work.",
      "Handled deployment, maintenance, and database implementation across multiple project requirements.",
      "Built solutions tailored to business needs across website and application development work."
    ],
    technologies: ["React", "Next.js", "Node.js", "Database Integration", "WordPress", "Deployment"]
  },
  {
    id: 3,
    title: "Web Developer & Technical Content Writer",
    company: "HoliProjects Internet Private Limited",
    logo: "https://holithemes.com/favicon.ico",
    location: "Vijayawada - India",
    period: "Nov 2024 - Apr 2026",
    type: "Full-time",
    description:
      "Developed responsive WordPress websites and product pages, including pricing, payment, product, and conversion-focused pages. Worked with JavaScript, CSS, WordPress, and custom frontend styling while creating technical documentation for product and business use cases.",
    achievements: [
      "Built responsive WordPress websites and conversion-focused product pages for business needs.",
      "Implemented frontend styling and interactive behavior with JavaScript and custom CSS.",
      "Created technical documentation to support product communication and implementation clarity."
    ],
    technologies: ["JavaScript", "WordPress", "CSS", "Responsive UI", "Technical Writing", "Frontend Styling"]
  },
  {
    id: 4,
    title: "Web Development Intern",
    company: "Oasis Infobyte",
    logo: "https://oasisinfobyte.com/favicon.ico",
    location: "Remote",
    period: "May 2023 - Internship",
    type: "Internship",
    description:
      "Executed real-world frontend and JavaScript projects in a structured development environment, strengthening responsive design, DOM handling, and UI implementation fundamentals.",
    achievements: [
      "Strengthened fundamentals across responsive layouts, DOM handling, and frontend best practices.",
      "Improved workflow discipline through hands-on delivery of practical web development tasks."
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Frontend Development", "Responsive UI"]
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 group">
                          <div className="relative w-full h-full rounded-xl overflow-hidden">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={64}
                              height={64}
                              className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                // Fallback to company initial if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-purple-400 text-white font-bold text-xl rounded-xl">${exp.company.charAt(0)}</div>`;
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
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