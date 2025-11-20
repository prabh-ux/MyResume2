import React from "react";

export default function Footer() {
  return (
    <footer
      className="relative mt-16 sm:mt-20 py-8 border-t border-white/10
                 bg-white/5 dark:bg-white/5 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 text-center text-xs sm:text-sm text-gray-400 space-y-2">
        <div>
          © {new Date().getFullYear()} Prabhkirat Singh Saini — Built with{" "}
          <span className="text-tealsoft font-medium">React</span> &{" "}
          <span className="text-tealsoft font-medium">Tailwind</span>
        </div>
        <div className="text-gray-500 text-[11px] sm:text-xs">
          Made for performance, accessibility, and  happiness.
        </div>

        {/* Links / Social */}
        <div className="flex justify-center gap-5 mt-4">
          <a
            href="https://github.com/prabh-ux"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
         
          <a
            href="mailto:prabhkiratsinghbusiness@gmail.com"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
