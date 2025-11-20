import React, { useState } from "react";
import dreamscapePng from '.././assets/DreamScapes.PNG'
import VillagerPic from '.././assets/Villager.jpg'
import InstaAiPic from '.././assets/instaai.jpg'
import { TbLivePhotoFilled } from "react-icons/tb";

const PROJECTS = [
  {
    id: 1,
    title: "DreamScapes – Web Based Photo Editor",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Canvas API",
      "Tailwind CSS",
      "JavaScript",
      "Vercel"
    ],
    desc: "A full MERN-stack, web-based photo editor that lets users upload, edit, manage, and enhance images with powerful creative tools. Includes authentication, secure APIs, image search, and advanced canvas editing features.",
    link: "https://dream-scapes-frontend.vercel.app/",
    img: dreamscapePng,
    points: [
      "Full MERN-stack architecture with secure backend APIs",
      "JWT-based authentication with hashed passwords using bcrypt",
      "Upload, edit, manage, and download images directly in the browser",
      "Undo/Redo support for smooth editing workflow",
      "Drawing tools with brush and color controls",
      "Add customizable text and stickers",
      "Layer-style editing for advanced compositing",
      "Crop, resize, and apply filters & adjustments using Canvas API",
      "Image search panel to explore and import images instantly",
      "CRUD operations for user image projects/collections",
      "Fast, responsive UI optimized for both desktop and mobile"
    ],
        GitLink: "https://github.com/prabh-ux/DreamScapesFrontend",

  }
  ,

 {
  id: 2,
  title: "VilligerClothing – E-commerce Clothing Store",
  tech: ["React", "MongoDB", "Express", "Node.js", "JWT", "bcrypt", "Tailwind CSS", "JavaScript", "Vercel"],
  desc: "A full MERN-stack e-commerce clothing store featuring secure authentication, dynamic product pages, and a smooth shopping experience. Includes login/signup with JWT & bcrypt, shopping cart, product reviews, order tracking, CRUD operations, and responsive mobile-first design. Deployed on Vercel with polished UI and clean navigation.",
  link: "https://villagerclothing.vercel.app/",
  img: VillagerPic,
  points: [
    "User login/signup with JWT authentication and hashed passwords using bcrypt",
    "Browse products by category with dynamic product pages",
    "Add items to cart and manage shopping cart",
    "Leave product reviews and ratings",
    "Recent order tracking",
    "Secure checkout workflow",
    "Responsive design optimized for mobile, tablet, and desktop",
    "Fast and polished UI/UX using Tailwind CSS",
    "Backend powered by Node.js, Express, and MongoDB",
    "Deployed live on Vercel for high performance"
  ],
          GitLink: "https://github.com/prabh-ux/ECommerceWebsiteFrontend",

}

  ,

  {
  id: 3,
  title: "Insta AI – Instagram AI Content Generator Tool",
  tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Vercel", "OpenRouter API"],
  desc: "An AI-powered Instagram toolkit that uses OpenRouter API to generate captions, hashtags, bio ideas, and usernames. Designed for simplicity, speed, and a stylish user interface, providing instant AI-generated content for social media growth.",
  link: "https://insta-ai-xi.vercel.app/",
  img: InstaAiPic,
  points: [
    "Generate creative Instagram captions using OpenRouter AI API",
    "Get trending and relevant hashtags automatically",
    "Create catchy Instagram bio suggestions",
    "Generate unique username ideas for Instagram accounts",
    "Fast, responsive, and modern UI for all devices",
    "Copy and use generated content instantly",
    "Backend integration with OpenRouter API for AI-powered content",
    "Built with React and Vite for optimal performance",
    "Styled with Tailwind CSS for a sleek interface",
    "Deployed live on Vercel for reliable access"
  ],
   GitLink: "https://github.com/prabh-ux/InstaAi",
}


];

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl p-5 sm:p-6 shadow-lg 
                       bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10
                       hover:scale-105 hover:shadow-xl transition-transform duration-300 "
          >
            {p.img || p.img === "#" ? <img loading="lazy" src={p.img} className="mb-4 h-36 flex items-center w-full justify-center rounded-lg bg-white/5 text-gray-400 text-sm object-cover  " />
              : <div className="mb-4 h-36 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 text-sm">
                Screenshot
              </div>
            }


            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-300 mt-2 line-clamp-2">{p.desc}</p>

            <div className="mt-4 flex items-center justify-between">

              <div className="flex gap-2">
                <button
                  onClick={() => setOpen(p)}
                  className="px-3 py-1 bg-tealsoft cursor-pointer border border-gray-700 hover:bg-white/2  text-indigo-300 hover:text-indigo-200 transition-all duration-300 ease-in-out rounded-full text-xs sm:text-sm font-medium"
                >
                  Details
                </button>
                <a
                  href={p.link}
                  className=" flex  justify-center items-center gap-1 px-3 font-semibold cursor-pointer py-1  text-xs sm:text-sm text-teal-400 hover:text-teal-300 transition-colors "
                >
                  Live <TbLivePhotoFilled />

                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          />

          {/* Modal content */}
          <div className="relative w-full max-w-2xl mx-4 p-6 rounded-xl shadow-lg
                    bg-white/10 dark:bg-white/5 border border-white/10 backdrop-blur-3xl z-10
                    max-h-[90vh]">

            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">{open.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{open.tech.join(" • ")}</p>
              </div>
              <button
                onClick={() => setOpen(null)}
                className="text-gray-400 hover:text-gray-200 text-lg transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="mt-5 space-y-5">
              {/* Image */}
              {open.img ? (
                <img
                  src={open.img}
                  className="h-46 w-full object-cover rounded-lg bg-white/5"
                />
              ) : (
                <div className="h-36 w-full flex items-center justify-center rounded-lg bg-white/5 text-gray-500 text-sm">
                  Screenshot
                </div>
              )}

              {/* Right section */}
              <div className="">
                <div className="  max-h-[30vh] overflow-y-auto">
                  <p className="text-gray-300 text-sm leading-relaxed">{open.desc}</p>

                  <ul className="mt-3 list-disc list-inside space-y-1 cursor-default text-xs text-gray-300  ">
                    {open.points.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                {/* Buttons */}
                <div className="mt-5 flex gap-3">
                  <a
                    href={open.link}
                    className="px-3 py-2 rounded-md flex justify-center items-center gap-1  hover:text-teal-300  text-teal-400 text-sm font-medium hover:scale-105 transition-transform duration-200"
                  >
                    View Live <TbLivePhotoFilled />
                  </a>

                  <a
                    href={open.GitLink}
                    className="px-3 py-2 rounded-md border border-gray-700 text-gray-300 text-sm hover:bg-white/5 transition-all duration-200 ease-in-out "
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
