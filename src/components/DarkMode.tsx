"use client";

import { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Use useCallback for stable function reference
    const applyTheme = useCallback((isDark: boolean) => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("darkMode", isDark ? "dark" : "light");
    }, []);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("darkMode");
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

        // Set initial theme
        const initialDark = savedTheme
            ? savedTheme === "dark"
            : systemDark.matches;
        setDarkMode(initialDark);
        applyTheme(initialDark);

        // Listen for system theme changes
        const systemListener = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem("theme")) {
                setDarkMode(e.matches);
                applyTheme(e.matches);
            }
        };
        systemDark.addEventListener("change", systemListener);

        return () => systemDark.removeEventListener("change", systemListener);
    }, [applyTheme]);

    // Sync state with DOM changes
    useEffect(() => {
        if (!mounted) return;
        applyTheme(darkMode);
    }, [darkMode, applyTheme, mounted]);

    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, []);

    if (!mounted) {
        return (
            <div
                className="h-10 w-11 animate-pulse rounded-full bg-gray-200"
                aria-hidden="true"
            />
        );
    }

    return (
        <div className="flex items-center">
            <button
                type="button"
                onClick={toggleDarkMode}
                aria-label={
                    darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
                className="
        relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 
        border-transparent transition-colors duration-200 ease-in-out 
        focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2
        dark:focus:ring-neutral-100 bg-gray-200 dark:bg-gray-700
      "
            >
                <span
                    aria-hidden="true"
                    className={`pointer-events-none  h-5 w-5 transform rounded-full 
                   bg-white shadow-lg ring-0 transition-all duration-200 ease-in-out
                     flex items-center justify-center ${darkMode ? "translate-x-5" : "translate-x-0"}`}
                >
                    {darkMode ? (
                        <Moon
                            className="h-4 w-4 text-gray-800"
                            aria-hidden="true"
                        />
                    ) : (
                        <Sun
                            className="h-4 w-4 text-yellow-500"
                            aria-hidden="true"
                        />
                    )}
                </span>
            </button>
        </div>
    );
}
