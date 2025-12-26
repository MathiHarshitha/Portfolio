"use client"

import { useEffect, useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodeSnippetProps {
  title?: string
  language?: string
}

export function CodeSnippet({ title = "Developer Location", language = "javascript" }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const hour = currentTime.getHours()
  const isAlive = true
  const isCoding = hour >= 9 && hour <= 21 // 9 AM to 9 PM for coding

  const codeString = `function Location({ developer }) {
  const currentHour = new Date().getHours();
  const isWorkingHours = currentHour >= 9 && currentHour <= 21;
  
  return (
    <p>
      {Harshitha.isAlive && isWorkingHours 
        ? '💻 Coding at desk' 
        : '😴 Sleeping mode'
      }
    </p>
  );
}

// Current location: ${isAlive && isCoding ? '💻 Coding at desk' : '😴 Sleeping mode'}
// Working hours: 9:00 AM - 9:00 PM
// Last updated: ${currentTime.toLocaleTimeString()}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="relative group">
      {/* Code Block Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-300 text-sm font-mono">{title}.{language}</span>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-white transition-colors rounded"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Code Content */}
      <div className="bg-gray-900 rounded-b-lg p-4 font-mono text-sm overflow-x-auto">
        <pre className="text-gray-300 leading-relaxed">
          <code>
            <span className="text-purple-400">function</span>{" "}
            <span className="text-blue-400">Location</span>
            <span className="text-gray-300">{"({ "}</span>
            <span className="text-orange-400">developer</span>
            <span className="text-gray-300">{" }) {"}</span>
            {"\n"}
            {"  "}
            <span className="text-purple-400">const</span>
            <span className="text-gray-300">{" "}</span>
            <span className="text-cyan-400">currentHour</span>
            <span className="text-gray-300">{" = "}</span>
            <span className="text-purple-400">new</span>
            <span className="text-gray-300">{" "}</span>
            <span className="text-blue-400">Date</span>
            <span className="text-gray-300">{"().getHours();"}</span>
            {"\n"}
            {"  "}
            <span className="text-purple-400">const</span>
            <span className="text-gray-300">{" "}</span>
            <span className="text-cyan-400">isWorkingHours</span>
            <span className="text-gray-300">{" = currentHour >= "}</span>
            <span className="text-yellow-400">9</span>
            <span className="text-gray-300">{" && currentHour <= "}</span>
            <span className="text-yellow-400">21</span>
            <span className="text-gray-300">{";"}</span>
            {"\n\n"}
            {"  "}
            <span className="text-purple-400">return</span>
            <span className="text-gray-300">{" ("}</span>
            {"\n"}
            {"    "}
            <span className="text-red-400">{"<p>"}</span>
            {"\n"}
            {"      "}
            <span className="text-gray-300">{"{"}</span>
            <span className="text-cyan-400">Harshitha</span>
            <span className="text-gray-300">.</span>
            <span className="text-green-400">isAlive</span>
            <span className="text-gray-300">{" && "}</span>
            <span className="text-cyan-400">isWorkingHours</span>
            {"\n"}
            {"        "}
            <span className="text-gray-300">{"? "}</span>
            <span className="text-yellow-400">{'💻 Coding at desk'}</span>
            {"\n"}
            {"        "}
            <span className="text-gray-300">{": "}</span>
            <span className="text-yellow-400">{'😴 Sleeping mode'}</span>
            {"\n"}
            {"      "}
            <span className="text-gray-300">{"}"}</span>
            {"\n"}
            {"    "}
            <span className="text-red-400">{"</p>"}</span>
            {"\n"}
            {"  "}
            <span className="text-gray-300">{");"}</span>
            {"\n"}
            <span className="text-gray-300">{"}"}</span>
            {"\n\n"}
            <span className="text-gray-500">{"// Current location: "}</span>
            <span className={`${isAlive && isCoding ? 'text-green-400' : 'text-blue-400'}`}>
              {isAlive && isCoding ? '💻 Coding at desk' : '😴 Sleeping mode'}
            </span>
            {"\n"}
            <span className="text-gray-500">{"// Working hours: "}</span>
            <span className="text-gray-400">9:00 AM - 9:00 PM</span>
            {"\n"}
            <span className="text-gray-500">{"// Last updated: "}</span>
            <span className="text-gray-400">{currentTime.toLocaleTimeString()}</span>
          </code>
        </pre>
      </div>

      {/* Live Status Indicator */}
      <div className="absolute top-2 right-16 flex items-center gap-1">
        <div className={`w-2 h-2 rounded-full ${isAlive && isCoding ? 'bg-green-400 animate-pulse' : 'bg-blue-400'}`}></div>
        <span className="text-xs text-gray-400">LIVE</span>
      </div>
    </div>
  )
}