"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Click to Chat WhatsApp Plugin Website",
    description:
      "Developed the complete product website for a WordPress plugin with 700,000 plus active installations. Handled pricing architecture, plugin payments and checkout shop pages for monetization flow.",
    image: "https://res.cloudinary.com/dv5lcy4na/image/upload/v1767162745/CTC_Website.webp",
    tags: ["WordPress", "JavaScript", "Payments", "PHP","HTML/CSS", "Tailwind CSS"],
    liveUrl: "https://holithemes.com/plugins/click-to-chat/",
    githubUrl: "https://github.com/harshitha7-ht", // Your GitHub profile
  },
  {
    id: 2,
    title: "HoliThemes Website",
    description:
      "Built the full brand website with modern UI systems, animations and responsive layouts. Implemented consistent design language aligned with product focused positioning.",
    image: "https://res.cloudinary.com/dv5lcy4na/image/upload/v1767162744/HoliThemes_Website.webp",
    tags: ["JavaScript", "HTML/CSS", "Animations", "AI Integration"],
    liveUrl: "https://holithemes.com",
    githubUrl: "https://github.com/harshitha7-ht", // Your GitHub profile
  },
  {
    id: 3,
    title: "Viswa Bharathi College of Law Website",
    description:
      "Developed a complete academic website using WordPress with custom PHP logic. Implemented admissions, programs and academic content with clear navigation flow.",
    image: "https://res.cloudinary.com/dv5lcy4na/image/upload/v1767162750/VBL_College_Website.webp",
    tags: ["WordPress", "PHP", "Custom Themes & Plugins"],
    liveUrl: "https://viswabharathilaw.edu.in/",
    githubUrl: null, // Client project - no public repo
  },
]

export function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-600 font-medium text-sm">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Amazing Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in web development, from WordPress plugins to modern web applications.
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer hover:border-orange-200"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={18} />
                    </button>
                    {project.githubUrl && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                        }}
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg"
                        aria-label={`View ${project.title} source code`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300 flex items-center gap-2">
                  {project.title}
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-orange-50 to-pink-50 text-orange-700 border border-orange-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
          >
            <a href="https://holithemes.com/plugins/click-to-chat/author/harshitha/page/2/" target="_blank" rel="noopener noreferrer">
              View All Product Pages from HoliThemes
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
