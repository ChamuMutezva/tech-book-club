"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("darkMode")

    if (savedTheme !== null) {
      const isDarkMode = savedTheme === "true"
      setDarkMode(isDarkMode)
      document.documentElement.classList.toggle("dark", isDarkMode)
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDark)
      document.documentElement.classList.toggle("dark", prefersDark)
      localStorage.setItem("darkMode", String(prefersDark))
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", String(newDarkMode))
    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  if (!mounted) {
    return <div className="h-10" aria-hidden="true" />
  }

  return (
    <div className="flex items-center">
      <span className="sr-only">Toggle dark mode</span>
      <button
        type="button"
        onClick={toggleDarkMode}       
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        className={`
                    relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 
                    border-transparent transition-colors duration-200 ease-in-out 
                    focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 dark:focus:ring-neutral-100
                    ${darkMode ? "bg-neutral-900 dark:bg-neutral-100" : "bg-gray-200 dark:bg-gray-700"}
                `}
      >
        <span className="sr-only">{darkMode ? "Switch to light mode" : "Switch to dark mode"}</span>
        <span
          aria-hidden="true"
          className={`
                        pointer-events-none inline-block h-5 w-5 transform rounded-full 
                        bg-white dark:bg-gray-900 shadow-lg ring-0 transition duration-200 ease-in-out
                        ${darkMode ? "translate-x-5" : "translate-x-0"}
                    `}
        >
          {darkMode ? <Moon className="h-3 w-3 m-1 text-gray-800" /> : <Sun className="h-3 w-3 m-1 text-yellow-500" />}
        </span>
      </button>
    </div>
  )
}

