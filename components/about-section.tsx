"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-orange-50/50 via-white to-pink-50/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with decorations */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Decorative blobs */}
            <div
              className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-200/40 animate-blob"
              style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
            />
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-200/40 animate-blob"
              style={{ animationDelay: "2s", borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" }}
            />

            <div className="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-lg p-4 z-10 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-lg">1+</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Years of</p>
                  <p className="text-sm font-semibold text-gray-800">Experience</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-lg p-3 z-10 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-500 font-bold text-xs">700K+</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Users</span>
              </div>
            </div>

            {/* Main image - Updated alt */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/professional-developer-working-casual-plaid-shirt-.jpg"
                alt="Harshitha working"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-2">
              <p className="text-orange-500 font-medium">I'm a Developer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                I Can Build Anything
                <br />
                You Want
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Currently working at HoliThemes as a Web Developer and Content Writer, I own complete development and
              maintenance of responsive websites with motion-driven layouts. I've built and scaled product pages with
              conversion-focused structure and feature clarity.
            </p>
            <p className="text-gray-500 leading-relaxed">
              I deliver production-ready code, animations, and documentation aligned with business goals. My experience
              includes building plugin platforms used by over 700,000 global users, handling pricing architecture,
              payments, and checkout workflows.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-gray-700">React & JavaScript</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-gray-700">NodeJS & Python</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-gray-700">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-gray-700">SQL & MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
