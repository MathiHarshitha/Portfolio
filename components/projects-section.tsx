"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Click to Chat WhatsApp Plugin",
    description:
      "Complete product website for a WordPress plugin with 700,000+ active installations. Handled pricing architecture, plugin payments and checkout shop pages for monetization flow.",
    image: "/whatsapp-chat-plugin-website-green-messaging-busin.jpg",
    tags: ["WordPress", "JavaScript", "Payments"],
    liveUrl: "https://developer.wordpress.org/plugins/click-to-chat/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "HoliThemes Website",
    description:
      "Full brand website with modern UI systems, animations and responsive layouts. Implemented consistent design language aligned with product-focused positioning.",
    image: "/modern-theme-company-website-colorful-professional.jpg",
    tags: ["React", "Tailwind CSS", "Animations"],
    liveUrl: "https://holithemes.com",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Viswa Bharathi College of Law",
    description:
      "Complete academic website using WordPress with custom PHP logic. Implemented admissions, programs and academic content with clear navigation flow.",
    image: "/academic-law-college-institution-books-graduation-.jpg",
    tags: ["WordPress", "PHP", "CMS"],
    liveUrl: "https://viswabharathicollegeoflaw.com",
    githubUrl: "#",
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
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Amazing Works</h2>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-orange-50 text-orange-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
          >
            <a href="https://github.com/harshithamathi" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
