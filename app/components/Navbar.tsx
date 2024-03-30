import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

export default function Home() {
  return (
    <div className="nav">
      <div className="max-w-mobile mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <nav className="py-10 flex flex-wrap justify-between">
          <h1 className="font-bold text-lg desktop:text-4xl"><a href="/">Khanh Le</a></h1>
          <div className="flex items-center gap-x-8 font-medium text-lg desktop:text-xl"> 
            <ThemeSwitch />
            <Link href="#about" className="hidden md:flex hover:font-semibold nav-link">About</Link>
            <Link href="#work" className="hidden md:flex hover:font-semibold nav-link">Work</Link>
            <Link href="#projects" className="hidden md:flex hover:font-semibold nav-link">Projects</Link>
            <Link href="https://drive.google.com/file/d/1Um-_rE17upYQryH7cFDOwAjfnY5Er44-/view?usp=sharing" target="_blank" className="hover:font-semibold nav-link">Resume</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}