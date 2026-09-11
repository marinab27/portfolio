"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        setTheme(currentTheme === "dark" ? "dark" : "light");
        setMounted(true);
    }, []);

    const changeTheme = (newTheme: Theme) => {
        setTheme(newTheme);

        document.documentElement.setAttribute(
            "data-theme",
            newTheme,
        );

        localStorage.setItem("theme", newTheme);
    };

    if (!mounted) {
        return (
            <div
                aria-hidden="true"
                className="h-[34px] w-[70px]"
            />
        );
    }

    return (
        <div
            className="
        theme-toggle
        relative
        flex
        h-[34px]
        w-[70px]
        items-center
        rounded-full
        border
        border-[var(--theme-toggle-border)]
        bg-[var(--theme-toggle-background)]
        p-[3px]
      "
            role="group"
            aria-label="Color theme"
        >
            {/* ACTIVE BACKGROUND */}
            <span
                aria-hidden="true"
                className={`
          absolute
          top-[3px]
          h-[26px]
          w-[30px]
          rounded-full
          bg-[var(--theme-toggle-active)]
          shadow-[0_2px_10px_rgba(0,0,0,0.05)]

          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${theme === "light"
                        ? "translate-x-0"
                        : "translate-x-[32px]"
                    }
        `}
            />

            {/* LIGHT / SUN */}
            <button
                type="button"
                onClick={() => changeTheme("light")}
                aria-label="Use light mode"
                aria-pressed={theme === "light"}
                className="
          relative
          z-10
          flex
          h-[26px]
          w-[30px]
          items-center
          justify-center
          rounded-full
        "
            >
                <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="h-[12px] w-[12px]"
                >
                    <circle
                        cx="10"
                        cy="10"
                        r="5.7"
                        className={`
              transition-[fill,stroke,opacity]
              duration-300

              ${theme === "light"
                                ? "fill-[var(--accent)] stroke-[var(--accent)] opacity-100"
                                : "fill-none stroke-[var(--theme-icon-inactive)] opacity-65"
                            }
            `}
                        strokeWidth="1.4"
                    />
                </svg>
            </button>

            {/* DARK / MOON */}
            <button
                type="button"
                onClick={() => changeTheme("dark")}
                aria-label="Use dark mode"
                aria-pressed={theme === "dark"}
                className="
          relative
          z-10
          flex
          h-[26px]
          w-[30px]
          items-center
          justify-center
          rounded-full
        "
            >
                <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="h-[14px] w-[14px]"
                >
                    <path
                        d="
              M13.7 14.8
              C10.1 14.8 7.2 11.9 7.2 8.3
              C7.2 6.2 8.2 4.3 9.8 3.1
              C6.3 3.5 3.6 6.5 3.6 10.1
              C3.6 14 6.8 17.2 10.7 17.2
              C13.5 17.2 15.9 15.6 17.1 13.3
              C16.1 14.2 14.9 14.8 13.7 14.8
              Z
            "
                        className={`
              transition-[fill,stroke,opacity]
              duration-300

              ${theme === "dark"
                                ? "fill-[var(--foreground)] stroke-[var(--foreground)] opacity-100"
                                : "fill-none stroke-[var(--theme-icon-inactive)] opacity-80"
                            }
            `}
                        strokeWidth="1.3"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
}