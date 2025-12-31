"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Send, CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-orange-50/50 via-white to-pink-50/30 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-20 w-32 h-32 bg-yellow-200/30 animate-blob"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      />
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-pink-200/30 animate-blob"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-orange-500 font-medium mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let's Work Together</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-gray-500 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing
              together.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800 font-medium">mathiharshitha@gmail.com</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500">
                  <Phone size={20} />
                </div>

              </div> */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-800 font-medium">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`bg-white rounded-3xl shadow-xl p-8 transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
                <Button
                  variant="outline"
                  className="rounded-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="rounded-xl h-12 border-gray-200 focus:border-orange-300 focus:ring-orange-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="rounded-xl h-12 border-gray-200 focus:border-orange-300 focus:ring-orange-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    className="rounded-xl h-12 border-gray-200 focus:border-orange-300 focus:ring-orange-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="rounded-xl resize-none border-gray-200 focus:border-orange-300 focus:ring-orange-200"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full gap-2 bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
