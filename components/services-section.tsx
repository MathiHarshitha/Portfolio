"use client"

import { useEffect, useRef, useState } from "react"
import { Layers, Sparkles, Lightbulb } from "lucide-react"

const services = [
  {
    title: "Pixel Perfect",
    description:
      "Delivering pixel-perfect designs with meticulous attention to every detail, ensuring your vision comes to life exactly as imagined.",
    icon: Layers,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "High Quality",
    description:
      "Building robust, scalable applications with clean code architecture and best practices for long-term maintainability.",
    icon: Sparkles,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    title: "Awesome Ideas",
    description:
      "Transforming creative concepts into innovative digital solutions that engage users and drive business growth.",
    icon: Lightbulb,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`text-center p-8 rounded-3xl transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} ${service.color} mb-6`}
              >
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
