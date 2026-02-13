'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      aria-label="Toggle theme"
      onClick={() =>
        setTheme(currentTheme === 'dark' ? 'light' : 'dark')
      }
      className="p-2 rounded-xl border border-border/40 bg-background/60 backdrop-blur-md 
                 hover:bg-accent hover:scale-105 
                 transition-all duration-200 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {currentTheme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 " />
      )}
    </button>
  )
}

export default DarkModeSwitch