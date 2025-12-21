"use client"

import { useEffect, useRef, useState } from "react"
import { Quote, Star } from "lucide-react"
import { HandDrawnHeart, HandDrawnStar } from "./doodles"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Tech Solutions Inc.",
    content: "Harshitha delivered exceptional work on our web application. Her attention to detail and technical expertise made the project a huge success.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    content: "Working with Harshitha was a game-changer for our startup. She brought innovative solutions and delivered beyond our expectations.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "Creative Agency",
    content: "Harshitha's ability to translate design concepts into functional code is remarkable. She's a true professional and a pleasure to work with.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  }
]

export function TestimonialsSection() {
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
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-purple-50/30 via-white to-pink-50/20 relative overflow-hidden"
    >
      <div className="absolute top-16 left-16 opacity-20">
        <HandDrawnHeart className="w-14 h-14 text-pink-400 animate-pulse-soft" />
      </div>
      <div className="absolute bottom-20 right-16 opacity-15">
        <HandDrawnStar className="w-12 h-12 text-purple-300 animate-float" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple-500 font-medium mb-2">Client Feedback</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients and colleagues have to say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Quote size={16} className="text-white" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-purple-600 font-medium">{testimonial.company}</p>
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