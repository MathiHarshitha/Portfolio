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

            {/* Developer Status */}
            {/* <div className="flex justify-start">
              <DeveloperStatus theme="light" />
            </div> */}

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-200"
            >
              <a href="#about">Know more</a>
            </Button>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/harshitha7-ht"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/harshithamathi/"
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
              {/* Main image container */}
              <div className="relative">
                {/* Image container with defined dimensions */}
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] relative">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-3xl blur-2xl scale-110" />
                  
                  {/* Main image container with glass morphism */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm">
                    <img
                      src="https://res.cloudinary.com/dv5lcy4na/image/upload/v1767158016/Harshitha_Mathi_portfolio_image_akerxa.webp"
                      alt="Harshitha Mathi - Web Developer"
                      className="w-full h-full object-contain p-4"
                    />
                    
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-white/5 pointer-events-none" />
                  </div>
                  
                  
                  
                  
                  
                  
                </div>
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
