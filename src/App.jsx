import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Toaster} from 'react-hot-toast';
export default function App() {
  const [dark, setDark] = useState(true);

  // toggle html class for tailwind dark mode
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black dark:bg-black text-white min-h-screen">
      <div><Toaster/></div>

      <Navbar dark={dark} setDark={setDark} />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
