import Link from "next/link"
import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <div className="bg-light-grey">
      <div className="max-w-mobile mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-desktop">
        <nav className="py-10 flex flex-wrap justify-between">
          <h1 className="text-dark-blue font-bold text-lg desktop:text-4xl"><a href="/">Khanh Le</a></h1>
          <div className="flex items-center gap-x-8 text-dark-blue font-medium text-lg desktop:text-xl">
            <Link href="/">
              <BsFillMoonStarsFill className="cursor-pointertext-lg desktop:text-2xl fill-dark-blue"/>
            </Link>
            <Link href="#about" className="hidden md:flex">About</Link>
            <Link href="#work" className="hidden md:flex">Work</Link>
            <Link href="#projects" className="hidden md:flex">Projects</Link>
            <Link href="https://drive.google.com/file/d/1X3oPHDxcHcgUz8VV1UddrRW-SbZQX61F/viewusp=sharing" target="_blank">Resume</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}