import React from "react";

export default function Navbar({ dark = true, setDark = () => {} }) {
  return (
    <nav className="fixed w-full top-4 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between gap-3">
          {/* Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 px-3 py-2 rounded-full
                       bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10
                       hover:scale-[1.02] transition-color duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-teal-300"
            title="Home"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center
                         bg-gradient-to-tr from-tealsoft to-accent-600 text-indigo-500 font-bold shadow-lg"
              aria-hidden
            >
              P
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Prabhkirat Singh</div>
              <div className="text-[11px] text-gray-300">MERN Stack</div>
            </div>
          </a>

          {/* Right side - desktop links */}
          <div className="hidden md:flex items-center gap-3 px-3 py-2 rounded-full
                          bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10">
            <a
              href="#projects"
              className="text-sm text-gray-200 hover:text-white px-2 py-1 rounded-md transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm text-gray-200 hover:text-white px-2 py-1 rounded-md transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-200 hover:text-white px-2 py-1 rounded-md transition-colors"
            >
              Contact
            </a>

           

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="ml-2 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm
                         bg-tealsoft text-indigo-400 font-medium hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 21h14a1 1 0 0 0 1-1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Resume
            </a>
          </div>

          {/* Mobile compact controls (icons) */}
          <div className="flex md:hidden items-center gap-2">
            {/* Projects icon */}
            <a
              href="#projects"
              title="Projects"
              aria-label="Projects"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/6 hover:bg-white/8 transition focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 7.5h18v9H3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Skills icon */}
            <a
              href="#skills"
              title="Skills"
              aria-label="Skills"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/6 hover:bg-white/8 transition focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 10l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Contact icon */}
            <a
              href="#contact"
              title="Contact"
              aria-label="Contact"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/6 hover:bg-white/8 transition focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              title="Toggle theme"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/6 hover:bg-white/8 transition focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              {dark ? "🌙" : "☀️"}
            </button>

            {/* Small resume icon */}
            <a
              href="/resume.pdf"
              download
              title="Resume"
              aria-label="Download resume"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-tealsoft text-indigo-500 hover:brightness-95 transition focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 21h14a1 1 0 0 0 1-1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
