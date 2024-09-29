'use client'

import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import { useState, useEffect } from "react";

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }
  
  useEffect( () => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className={`nav sticky ${visible ? 'top-0 nav-container' : ''} `}>
      <div className="max-w-mobile mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <nav className="py-10 flex flex-wrap justify-between">
          <h1 className="font-bold text-lg desktop:text-4xl"><a href="/">Khanh Le</a></h1>
          <div className="flex items-center gap-x-8 font-medium text-lg desktop:text-xl"> 
            <ThemeSwitch />
            <Link href="#about" className="hidden md:flex hover:font-semibold nav-link">About</Link>
            <Link href="#work" className="hidden md:flex hover:font-semibold nav-link">Work</Link>
            <Link href="#projects" className="hidden md:flex hover:font-semibold nav-link">Projects</Link>
            <Link href="https://drive.google.com/file/d/1_BLpUagBcRq4r4aXwRncV9wmg2Y65bFK/view?usp=sharing" target="_blank" className="hover:font-semibold nav-link">Resume</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}