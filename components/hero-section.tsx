"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient wash */}
        <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-gradient-to-bl from-orange-200/60 via-pink-100/40 to-transparent rounded-bl-[100%]" />
        <div className="absolute top-20 right-20 w-[50%] h-[60%] bg-gradient-to-bl from-purple-200/30 via-pink-100/20 to-transparent rounded-bl-[100%]" />

        {/* Decorative blobs */}
        <div
          className="absolute top-32 left-10 w-24 h-24 bg-yellow-200/50 animate-blob animate-pulse-soft"
          style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
        />
        <div
          className="absolute bottom-40 left-20 w-16 h-16 bg-pink-200/50 animate-blob animate-pulse-soft"
          style={{ animationDelay: "2s", borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" }}
        />
        <div className="absolute top-1/3 right-[15%] w-8 h-8 bg-purple-300/40 rounded-full animate-float" />
        <div
          className="absolute bottom-1/3 right-10 w-12 h-12 bg-orange-200/50 animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-3">
              <p className="text-orange-500 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Harshitha Mathi
              </h1>
              <p className="text-lg text-gray-600">
                A <span className="text-orange-500 font-medium">Web Developer</span> from India
              </p>
            </div>
            <p className="text-gray-500 max-w-md leading-relaxed">
              Results driven Web Developer with ownership across design, development and production deployment. Strong
              execution focus across frontend, backend, payments and deployment workflows.
            </p>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-200"
            >
              <a href="#contact">Hire Me</a>
            </Button>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/harshithamathi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/mathiharshitha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:mathiharshitha@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Scroll indicator dots */}
            <div className="flex gap-2 pt-6">
              <div className="w-8 h-2 rounded-full bg-orange-500" />
              <div className="w-2 h-2 rounded-full bg-gray-300" />
              <div className="w-2 h-2 rounded-full bg-gray-300" />
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Decorative elements around image */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-200/60 rounded-2xl animate-float" />
              <div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-200/60 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-1/2 -right-10 w-6 h-6 bg-pink-300/60 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              />

              {/* Small decorative icons */}
              <div
                className="absolute -top-2 right-10 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-purple-500">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                className="absolute bottom-10 -left-8 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-cyan-500">
                  <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
                </svg>
              </div>

              {/* Main image container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/professional-developer-portrait-photo--friendly-sm.jpg"
                  alt="Harshitha Mathi - Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#services"
            className="flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors"
            aria-label="Scroll to services section"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
