import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem("theme") === "dark";
        setIsDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
            localStorage.setItem("theme", "dark");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn("p-2 rounded-full transition-colors duration-300",
                "focus:outline-none"
            )}
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};