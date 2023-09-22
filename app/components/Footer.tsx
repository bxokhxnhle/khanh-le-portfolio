import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-light-grey">
      <div className="max-w-mobile mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-desktop">
        <footer className="pb-10 pt-32">
          <div className="flex flex-row flex-wrap justify-between gap-y-4">
            <div className="text-light-blue text-xl font-medium">Curated with :) by Khanh Le</div>
            <div className="flex items-center gap-x-8 text-dark-blue font-medium text-xl underline">
            <Link className="text-lg md:text-xl" href="mailto:khanh.le@uwaterloo.ca">Email ↗</Link>
            <Link className="text-lg md:text-xl" href="https://linkedin.com/in/baokhanhle/" target="_blank">LinkedIn ↗</Link>
            <Link className="text-lg md:text-xl" href="https://github.com/bxokhxnhle" target="_blank">GitHub ↗</Link>
          </div>
          </div>
        </footer>
      </div>
    </div>
  )
}