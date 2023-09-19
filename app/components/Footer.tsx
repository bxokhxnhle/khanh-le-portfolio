export default function Home() {
  return (
    <div className="bg-light-grey">
      <div className="max-w-mobile mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-desktop">
        <footer className="pb-10 pt-32">
          <div className="flex flex-row flex-wrap justify-between gap-y-4">
            <div className="text-light-blue text-xl font-medium">Curated with :) by Khanh Le</div>
            <ul className="flex items-center gap-x-8">
              <li className="underline text-dark-blue text-xl font-medium"><a href="mailto:khanh.le@uwaterloo.ca">Email ↗</a></li>
             <li className="underline text-dark-blue text-xl font-medium"><a href="https://linkedin.com/in/baokhanhle/" target="_blank">LinkedIn ↗</a></li>
              <li className="underline text-dark-blue text-xl font-medium"><a href="https://github.com/bxokhxnhle" target="_blank">GitHub ↗</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}