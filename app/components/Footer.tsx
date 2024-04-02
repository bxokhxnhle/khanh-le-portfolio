import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="max-w-mobile mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl pb-10 pt-32">
      <div className="flex flex-row flex-wrap justify-between gap-y-4">
        <div className="text-xl font-medium footnote">Curated with :) by Khanh Le</div>
        <div className="flex items-center gap-x-11 font-medium text-xl links">
          <Link className="text-lg md:text-xl relative after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200" href="mailto:khanh.le@uwaterloo.ca">Email ↗</Link>
          <Link className="text-lg md:text-xl relative after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200" href="https://linkedin.com/in/baokhanhle/" target="_blank">LinkedIn ↗</Link>
          <Link className="text-lg md:text-xl relative after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200" href="https://github.com/bxokhxnhle" target="_blank">GitHub ↗</Link>
        </div>
      </div>
    </footer>
  )
}