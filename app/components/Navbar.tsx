import Link from "next/link"
import {BsFillMoonStarsFill} from 'react-icons/bs'
import ThemeSwitch from "./ThemeSwitch"

export default function Home() {
  return (
    <div className="">
      <div className="max-w-mobile mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-desktop">
        <nav className="py-10 flex flex-wrap justify-between">
          <h1 className="font-bold text-lg desktop:text-4xl"><a href="/">Khanh Le</a></h1>
          <div className="flex items-center gap-x-8 font-medium text-lg desktop:text-xl">
            <ThemeSwitch />
            {/* <Link href="/">
              <BsFillMoonStarsFill className="cursor-pointer text-lg desktop:text-2xl fill-dark-blue"/>
            </Link> */}
            <Link href="#about" className="hidden md:flex">About</Link>
            <Link href="#work" className="hidden md:flex">Work</Link>
            <Link href="#projects" className="hidden md:flex">Projects</Link>
            <Link href="https://drive.google.com/file/d/1Um-_rE17upYQryH7cFDOwAjfnY5Er44-/view?usp=sharing" target="_blank">Resume</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}