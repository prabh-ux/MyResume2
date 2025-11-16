import React from "react";
import myPic from '../assets/myPic.jpg'
import DS from '../assets/DreamScapes.PNG'
import FadeIn from "../assets/FadeIn";
export default function Hero() {


  return (
    <section id="hero" className="pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        
          {/* LEFT: Photo + intro */}
          <div className="flex flex-col  items-center  gap-6">
            {/* Photo block */}
            <div className="relative flex-shrink-0">
              {/* Decorative rotated card (desktop only) */}
              <div
                aria-hidden
                className="hidden md:block absolute -left-5 -top-5 w-44 h-44 rounded-2xl
                           bg-gradient-to-tr from-tealsoft/30 to-indigo-600/20 transform -rotate-6 blur-xl opacity-80"
              />

              {/* Photo frame */}
              <div
                className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden
                           ring-4 ring-indigo-400 shadow-2xl "
                title="Your Name"
              >
                <img
                  src={myPic}
                  alt="Your Name"
                  onError={(e) => {
                    e.currentTarget.onerror = null;

                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name below photo (mobile-inline on left) */}
              <div className="mt-3 text-center md:text-left">
                <div className="font-semibold">Prabhkirat Singh</div>
                <div className="text-xs text-gray-400">MERN Stack Developer</div>
              </div>
            </div>

            {/* Text content */}
            <div className="w-full text-center md:text-left">

<FadeIn>
              <p className="mt-4 text-gray-300 font-bold max-w-xl mx-auto md:mx-0 text-sm sm:text-base text-center ">
                Full-stack MERN developer — I build production-ready React frontends,
                robust Express APIs, and scalable MongoDB backends with performance
                and developer experience in mind.
              </p>

              <div className="mt-5 flex flex-wrap  justify-center gap-3 items-center sm:gap-4">
                <a
                  href="#projects"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-tealsoft text-indigo-400 border-1 hover:bg-white/5   border-gray-700  rounded-full font-semibold shadow-lg hover:scale-105 transition-transform text-sm sm:text-base"
                >
                  See Projects
                </a>
                <a
                  href="#contact"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-700 rounded-full text-gray-300 hover:bg-white/5 transition text-sm sm:text-base"
                >
                  Hire Me
                </a>
              </div>
</FadeIn>
              <div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center text-center text-xs sm:text-sm text-gray-400">
                <div >
                  <div className="text-gray-500">Location</div>
                  <div>India</div>
                </div>
                <div>
                  <div className="text-gray-500">Availability</div>
                  <div>Open for freelance</div>
                </div>
                <div>
                  <div className="text-gray-500">Email</div>
                  <div className="break-all">prabhkiratsinghbusiness@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Featured project card (keeps visual balance) */}
          <div className="relative mt-6 md:mt-0">
            {/* glow behind card */}
            <div
              aria-hidden
              className="absolute -right-6 -top-6 w-56 sm:w-72 h-56 sm:h-72 rounded-2xl
                         bg-gradient-to-tr from-tealsoft/30 to-indigo-500/30 blur-3xl opacity-30"
            />

            <div
              className="relative rounded-2xl p-4 sm:p-6 shadow-2xl
                         bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="mb-4 h-36 sm:h-44 flex items-center justify-center rounded-xl bg-white/5">
                {/* <span className="text-gray-400 text-xs sm:text-sm">
                  Project preview (screenshot)
                </span> */}
                <img
                  src={DS}
                  alt="Your Name"
                  onError={(e) => {
                    e.currentTarget.onerror = null;

                  }}
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="text-xs sm:text-sm text-gray-400">Featured Project</div>
                  <div className="font-semibold text-base sm:text-lg">DreamScapes- Web Based Photo Editor</div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-xs text-gray-400">Stack</div>
                  <div className="text-xs sm:text-sm">MERN • Tailwind </div>
                </div>
              </div>

              <div className="min-w-full flex flex-col gap-[1rem] justify-center items-center">

                <p className="mt-3 text-xs sm:text-sm text-gray-300">
                  A full-featured MERN stack photo editor with custom filters, styled text, and interactive tools, built entirely without external canvas libraries for a clean, seamless editing experience.
                </p>

                <a
href="#projects"
                  className=" w-full p-[0.5rem] cursor-pointer   border border-gray-700 rounded-full text-center text-xs sm:text-sm text-gray-300 hover:bg-white/5 transition"

                >
                  Details
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
