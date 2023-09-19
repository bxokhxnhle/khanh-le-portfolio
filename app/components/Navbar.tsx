import Link from "next/link"
import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <div className="bg-light-grey">
      <div className="max-w-desktop mx-auto">
        <nav className="py-10 flex justify-between">
          <h1 className="text-dark-blue font-bold text-4xl">Khanh Le</h1>
          <div className="flex items-center gap-x-8 text-dark-blue font-medium text-xl">
            <Link href="/">
              <BsFillMoonStarsFill className="cursor-pointer text-2xl fill-dark-blue"/>
            </Link>
            <Link href="#about">About</Link>
            <Link href="#work">Work</Link>
            <Link href="#projects">Projects</Link>
            <Link href="https://drive.google.com/file/d/1X3oPHDxcHcgUz8VV1UddrRW-SbZQX61F/view?usp=sharing" target="_blank">Resume</Link>
          </div>
        </nav>
      </div>
    </div>
    
  )
}