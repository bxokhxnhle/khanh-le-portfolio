'use client'

import Link from 'next/link'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import { BsLinkedin, BsGithub, BsFillEnvelopeAtFill, BsFileEarmarkArrowDownFill } from 'react-icons/bs'

export default function Banner() {

  //reference to store strings
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ "developer x designer",
        "engineering student",
        "badminton enthusiast",
        "daydreamer",
        "avid photographer"],
      typeSpeed: 50,
      backSpeed: 75,
      backDelay: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="mt-1 md:pt-10">
      <div className="max-w-mobile mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <section>
          <div className="font-medium text-4xl md:text-5xl h-32 md:h-44 xl:h-28">Hi there, I’m <span className="name">Khanh </span>- <span ref={el}></span></div>
          <div className="font-medium text-xl md:text-4xl leading-6 md:leading-10 pb-8 md:pb-10">a health tech enthusiast driven by the idea of integrating technology and healthcare to unveil novel solutions to health challenges ٩(๑❛ᴗ❛๑)۶</div>
          <div className="flex justify-start gap-x-6">
            <Link href="https://www.linkedin.com/in/baokhanhle/" target="_blank"><BsLinkedin className="icon" size="36px" /></Link>
            <Link href="https://github.com/bxokhxnhle" target="_blank"><BsGithub className="icon" size="36px" /></Link>
            <Link href="mailto:khanh.le@uwaterloo.ca"><BsFillEnvelopeAtFill className="icon" size="36px" /></Link>
            <Link href="https://drive.google.com/file/d/1BbLaGCdFwttUBYsUiiFD6rhyy6HO9a4m/view?usp=sharing" target="_blank"><BsFileEarmarkArrowDownFill className="icon" size="36px" /></Link>
          </div>
        <div className="text-lg pt-14 md:pt-20">Check out my adventure ↓</div>
        </section>
      </div>
    </div>
  )
}