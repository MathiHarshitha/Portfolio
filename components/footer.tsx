import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo - Updated for Harshitha */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">HM</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">Harshitha</span>
          </a>

          {/* Social links - Updated */}
          <div className="flex items-center gap-4">
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

          {/* Copyright - Updated */}
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Harshitha Mathi - Web Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
