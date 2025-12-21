"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import { HandDrawnArrow, HandDrawnBook } from "./doodles"

const articles = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for creating maintainable and scalable React applications that can grow with your business needs.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Development",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that are shaping the future of web development and user experiences.",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Technology",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Design Systems in Modern Development",
    excerpt: "How to implement and maintain design systems that ensure consistency across large-scale applications.",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Design",
    image: "/api/placeholder/400/250"
  }
]

export function BlogSection() {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-orange-50/30 via-white to-yellow-50/20 relative overflow-hidden"
    >
      <div className="absolute top-16 right-16 opacity-20">
        <HandDrawnBook className="w-14 h-14 text-orange-400 animate-float" />
      </div>
      <div className="absolute bottom-20 left-16 opacity-15">
        <HandDrawnArrow className="w-16 h-16 text-yellow-300 animate-pulse-soft" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium mb-2">Latest Insights</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog & Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sharing knowledge and insights about development, design, and technology trends
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <article className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                  <BookOpen size={48} className="text-orange-400" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-orange-600 font-medium hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}