"use client"

import { useEffect, useState } from "react"
import { Coffee, Moon, Code2, Zap } from "lucide-react"

interface Developer {
  name: string
  isAlive: boolean
  isCoding: boolean
  coffeeLevel: number
  currentTime: Date
}

interface DeveloperStatusProps {
  theme?: 'dark' | 'light'
}

export function DeveloperStatus({ theme = 'dark' }: DeveloperStatusProps) {
  const [developer, setDeveloper] = useState<Developer>({
    name: "Harshitha",
    isAlive: true,
    isCoding: false,
    coffeeLevel: 0,
    currentTime: new Date()
  })

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date()
      const hour = now.getHours()
      
      // Determine if coding based on time (9 AM - 9 PM)
      const isCoding = hour >= 9 && hour <= 21
      
      // Coffee level based on time of day
      let coffeeLevel = 0
      if (hour >= 6 && hour <= 10) coffeeLevel = 100 // Morning boost
      else if (hour >= 11 && hour <= 14) coffeeLevel = 70 // Afternoon
      else if (hour >= 15 && hour <= 18) coffeeLevel = 40 // Evening
      else if (hour >= 19 && hour <= 22) coffeeLevel = 20 // Night coding
      else coffeeLevel = 5 // Late night/early morning
      
      setDeveloper(prev => ({
        ...prev,
        isCoding,
        coffeeLevel,
        currentTime: now
      }))
    }

    updateStatus()
    const interval = setInterval(updateStatus, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const getStatus = () => {
    if (!developer.isAlive) return "💀 System Error"
    if (developer.isCoding) return "💻 Coding"
    return "😴 Sleeping"
  }

  const getStatusColor = () => {
    if (!developer.isAlive) return "text-red-400"
    if (developer.isCoding) return "text-green-500"
    return "text-blue-500"
  }

  const getStatusIcon = () => {
    if (!developer.isAlive) return <Zap className="w-4 h-4 text-red-400" />
    if (developer.isCoding) return <Code2 className="w-4 h-4 text-green-500" />
    return <Moon className="w-4 h-4 text-blue-500" />
  }

  const containerClasses = theme === 'light' 
    ? "inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full text-gray-800 font-mono text-sm shadow-lg"
    : "inline-flex items-center gap-3 px-4 py-2 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white font-mono text-sm"

  const coffeeBarBg = theme === 'light' ? "bg-gray-200" : "bg-white/20"
  const textSecondary = theme === 'light' ? "text-gray-500" : "text-white/70"

  return (
    <div className={containerClasses}>
      {/* Status Icon */}
      <div className="flex items-center gap-2">
        {getStatusIcon()}
        <span className={`font-medium ${getStatusColor()}`}>
          {getStatus()}
        </span>
      </div>
      
      {/* Coffee Level */}
      <div className="flex items-center gap-1">
        <Coffee className="w-4 h-4 text-amber-500" />
        <div className={`w-12 h-2 ${coffeeBarBg} rounded-full overflow-hidden`}>
          <div 
            className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-1000"
            style={{ width: `${developer.coffeeLevel}%` }}
          />
        </div>
        <span className={`text-xs ${textSecondary}`}>{developer.coffeeLevel}%</span>
      </div>
      
      {/* Blinking indicator */}
      <div className={`w-2 h-2 rounded-full ${
        developer.isCoding ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
      }`} />
    </div>
  )
}