import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <div className="max-w-mobile mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <footer className="pb-10 pt-32">
          <div className="flex flex-row flex-wrap justify-between gap-y-4">
            <div className="text-xl font-medium footnote">Curated with :) by Khanh Le</div>
            <div className="flex items-center gap-x-8 font-medium text-xl links">
            <Link className="text-lg md:text-xl hover:underline" href="mailto:khanh.le@uwaterloo.ca">Email ↗</Link>
            <Link className="text-lg md:text-xl hover:underline" href="https://linkedin.com/in/baokhanhle/" target="_blank">LinkedIn ↗</Link>
            <Link className="text-lg md:text-xl hover:underline" href="https://github.com/bxokhxnhle" target="_blank">GitHub ↗</Link>
          </div>
          </div>
        </footer>
      </div>
    </div>
  )
}