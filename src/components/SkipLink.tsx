"use client";

import { useEffect, useState } from "react";

export function SkipLink() {
    // Track if the user is navigating with keyboard
    const [isKeyboardUser, setIsKeyboardUser] = useState(false);

    useEffect(() => {
        // Detect keyboard navigation
        const handleFirstTab = (e: KeyboardEvent) => {
            if (e.key === "Tab") {
                setIsKeyboardUser(true);
                window.removeEventListener("keydown", handleFirstTab);
            }
        };

        window.addEventListener("keydown", handleFirstTab);
        return () => {
            window.removeEventListener("keydown", handleFirstTab);
        };
    }, []);

    return (
        <a
            href="#membership"
            className={`
        fixed top-4 left-4 z-50 transform -translate-y-20
        ${isKeyboardUser ? "focus:translate-y-0" : ""}
        bg-amber-500 text-white px-4 py-3 rounded-md
        focus:outline-none focus:ring-2 focus:ring-amber-600
        transition-transform duration-200
      `}
        >
            Skip to membership options
        </a>
    );
}
