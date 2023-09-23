'use client'

import Link from 'next/link'
import Image from 'next/image'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import linkedInIcon from "../../public/linkedin.svg"
import gitHubIcon from "../../public/github.svg"
import emailIcon from "../../public/mail.svg"
import resumeIcon from "../../public/resume.svg"

export default function Home() {

  //reference to store strings
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["developer & designer ", "engineering student", "badminton enthusiast", "day dreamer", "avid photographer"],
      typeSpeed: 75,
      backSpeed: 75,
      backDelay: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true,
      shuffle: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="bg-light-grey -mt-1 md:pt-10">
      <div className="max-w-mobile mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-desktop">
        <section>
          <div className="font-medium text-4xl md:text-5xl text-dark-blue pb-8 md:pb-5">Hi there, I’m <span className="text-light-blue">Khanh </span>- <span ref={el}></span></div>
          <div className="font-medium text-xl md:text-4xl text-dark-blue leading-6 md:leading-10 pb-8 md:pb-10">a health tech enthusiast driven by the idea of integrating technology and healthcare to unveil novel solutions to health challenges ٩(๑❛ᴗ❛๑)۶</div>
          <div className="flex justify-start gap-x-6">
            <Link href="https://www.linkedin.com/in/baokhanhle/" target="_blank"><Image src={linkedInIcon} alt="LinkedIn" /></Link>
            <Link href="https://github.com/bxokhxnhle" target="_blank"><Image src={gitHubIcon} alt="GitHub" /></Link>
            <Link href="mailto:khanh.le@uwaterloo.ca"><Image src={emailIcon} alt="Email" /></Link>
            <Link href="https://drive.google.com/file/d/1wZP0AZFZija0WAbV3j017V-bQRDVJl3i/view?usp=sharing" target="_blank"><Image src={resumeIcon} alt="Resume" /></Link>
          </div>
        <div className="text-dark-blue text-lg pt-14 md:pt-20">Scroll to see my work  ↓</div>
        </section>
      </div>
    </div>
  )
}