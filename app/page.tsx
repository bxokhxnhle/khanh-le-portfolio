import Image from 'next/image'
import { Metadata } from 'next'
import aboutMe from "../public/about me.svg"
import aboutMeMobile from "../public/about-me-mobile.svg"
import versa from "../public/versa.png"
import loblaw from "../public/loblaw-digital.png"
import purolator from "../public/purolator.png"
import bespoke from "../public/bespoke-metrics.png"
import portfolio from"../public/portfolio.png"
import signupForm from "../public/signup-form.png"
import lifeos from "../public/lifeos.png"
import cochlearImplant from "../public/cochlear-implant.png"
import handScanner from "../public/hand-scanner.png"
import { BsSpotify } from 'react-icons/bs'
import SpotifyCurrentlyPlaying from './components/spotify widgets/SpotifyCurrentlyPlaying'
import SpotifyRecentlyPlayed from './components/spotify widgets/SpotifyRecentlyPlayed'
import SpotifyOnRepeat from './components/spotify widgets/SpotifyOnRepeat'

export const metadata:Metadata = {
  title: "Khanh Le",
  description: "Khanh Le's Personal Website",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function Home() {
  return (
    <div>
      <main className="">
        <div className="min-h-screen max-w-mobile mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <section className="pt-12 md:pt-16" id="about">
          <h2 className="text-4xl md:text-5xl font-medium">About me</h2>
          <h4 className="text-xl md:text-3xl">My background</h4>
          <div className="flex flex-row flex-wrap gap-y-14 pt-6 justify-center lg:justify-between">
            <div className="basis-full lg:basis-5/7 font-normal text-lg leading-6">
            <p className="pb-7 hidden md:flex">I was born and raised in Ho Chi Minh City, Vietnam – an energetic and bustling area. The city has infiltrated my core; I enjoy people watching and taking a sip of coffee every morning. I have grown up living amongst all kinds of people around Vietnam and the world, making me open to all kinds of experiences and enthusiastic about embracing anomalies.</p>
            <p className="pb-7">I am passionate about technology and healthcare, which has led me to study <a href="https://uwaterloo.ca/biomedical-engineering" target="_blank"><span className="font-bold">Biomedical Engineering</span></a> at the University of Waterloo. I have taken a keen interest in software development, as introduced to me in my individual projects, courses, and previous co-op placements. Outside of school, I enjoy dancing, photography, graphic design, and badminton. A goal of mine is to touch on more areas of software-focused BME, immersing myself in academia, and helping to build stronger communities.</p>
            <p>Currently SWE @ <a href="https://versa-networks.com/" target="_blank"><span className="font-bold">Versa Networks</span></a> | Previously @ <a href="https://www.loblawdigital.co/" target="_blank"><span className="font-bold">Loblaw Digital</span></a>, <a href="https://www.purolator.com/" target="_blank"><span className="font-bold">Purolator</span></a>.<br />Seeking 2025 New Grad Full-time Opportunities! Get my <a href="https://drive.google.com/file/d/1Um-_rE17upYQryH7cFDOwAjfnY5Er44-/view?usp=sharing" target="_blank"><span className="hover:underline">resume ↗</span></a></p>
            </div>
            <div className="lg:basis-1/4">
              <Image className="hidden md:block rounded-t-[200px]" src={aboutMe} alt="profile picture" />
              <Image className="md:hidden rounded-t-[70px]" src={aboutMeMobile} alt="profile picture" />
              <div className="spotify-container flex items-center p-5">
                <BsSpotify className="opacity-90 spotify-icon shrink-0" size="40px" alt="Spotify" />
                <div className="ml-6 md:ml-5">
                  {/* <SpotifyCurrentlyPlaying /> */}
                  <SpotifyRecentlyPlayed />
                  {/* <SpotifyOnRepeat /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-12 md:pt-16" id="work">
          <h2 className="text-4xl md:text-5xl font-medium">Work</h2>
          <h4 className="text-xl md:text-3xl">What I have been working on</h4>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 pt-7 pb-8 items-stretch">
            <div className="card col-span-1 flex flex-col">
              <div className="card-img max-w-max rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={versa} alt="Versa Networks" />
              </div>
              <div className="card-body max-w-max rounded-b-[15px] p-6 md:p-8 grow">
                <div className="flex flex-wrap justify-between items-center title">
                  <div className="font-medium text-xl xl:text-2xl pr-12 md:pr-0"><a href="https://versa-networks.com/" target="_blank">Versa Networks ↗</a></div>
                  <div className="font-normal italic text-base sm:text-lg xl:text-xl pt-1 sm:pt-0">May 2023 - Present</div>
                </div>
                <p className="font-normal text-base lg:text-lg pt-1.5 sm:pt-4">Improved website functionality and user engagement by migrating legacy code to UI features, resulting in a 30% improvement in performance and scalability.</p>
                <ul className="flex flex-wrap text-sm md:text-base xl:text-lg gap-1 sm:gap-2 pt-3.5 sm:pt-5">
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">React.js</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">SCSS</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Bootstrap</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">WordPress</li>
                </ul>
              </div>
            </div>
            <div className="card col-span-1 flex flex-col">
              <div className="card-img max-w-max rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={loblaw} alt="Loblaw Digital" />
              </div>
              <div className="card-body max-w-max rounded-b-[15px] p-8 grow">
                <div className="flex flex-wrap justify-between items-center title">
                  <div className="font-medium text-xl xl:text-2xl pr-12 md:pr-0"><a href="https://www.loblawdigital.co/" target="_blank">Loblaw Digital ↗</a></div>
                  <div className="font-normal italic text-base sm:text-lg xl:text-xl pt-1 sm:pt-0">Sep - Dec 2022</div>
                </div>
                <p className="font-normal text-base lg:text-lg pt-1.5 sm:pt-4">Empowered prescription management experience by developing website components and features for Shoppers Drug Mart Digital Pharmacy, prioritizing responsive design and accessibility </p>
                <ul className="flex flex-wrap text-sm md:text-base xl:text-lg gap-1 sm:gap-2 pt-3.5 sm:pt-5">
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">React.js</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Redux</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">SASS</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Jest</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 pt-7 pb-8 items-stretch">
          <div className="card col-span-1 flex flex-col">
              <div className="card-img max-w-max rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={purolator} alt="Purolator" />
              </div>
              <div className="card-body max-w-max rounded-b-[15px] p-8 grow">
                <div className="flex flex-wrap justify-between items-center title">
                  <div className="font-medium text-xl xl:text-2xl pr-12 md:pr-0"><a href="https://www.purolator.com/" target="_blank">Purolator Inc. ↗</a></div>
                  <div className="font-normal italic text-base sm:text-lg xl:text-xl pt-1 sm:pt-0">Jan - Apr 2022</div>
                </div>
                <p className="font-normal text-base lg:text-lg pt-1.5 sm:pt-4">Enhanced user retention and monthly visitors by implementing JS algorithms on Google Analytics tracking and addressed rendering issues by 30% by revamping and developing Purolator&apos;s website</p>
                <ul className="flex flex-wrap text-sm md:text-base xl:text-lg gap-1 sm:gap-2 pt-3.5 sm:pt-5">
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">HTML/CSS</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">JavaScript</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Bootstrap</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Drupal</li>
                </ul>
              </div>
            </div>
            <div className="card col-span-1 flex flex-col">
              <div className="card-img max-w-max rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={bespoke} alt="Bespoke Metrics" />
              </div>
              <div className="card-body max-w-max rounded-b-[15px] p-8 grow">
                <div className="flex flex-wrap justify-between items-center title">
                  <div className="font-medium text-xl xl:text-2xl pr-12 md:pr-0"><a href="https://compass.bespokemetrics.com/company_press.html" target="_blank">Bespoke Metrics ↗</a></div>
                  <div className="font-normal italic text-base sm:text-lg xl:text-xl pt-1 sm:pt-0">May - Aug 2021</div>
                </div>
                <p className="font-normal text-base lg:text-lg pt-1.5 sm:pt-4">Standardized and designed marketing materials, enhanced product accessibility, improving social media engagement by 23% and reconstructed the digital asset management system</p>
                <ul className="flex flex-wrap text-sm md:text-base xl:text-lg gap-1 sm:gap-2 pt-3.5 sm:pt-5">
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Adobe XD</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Adobe InDesign</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Graphic Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-12 md:pt-16" id="projects">
          <h2 className="text-4xl md:text-5xl font-medium">Projects</h2>
          <h4 className="text-xl md:text-3xl">What I do outside of work</h4>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 pt-7 pb-8 items-stretch">
            <div className="card col-span-1 flex flex-col">
              <div className="card-img max-w-max rounded-t-[15px] overflow-hidden">
                <Image src={portfolio} alt="Personal Website" />
              </div>
              <div className="card-body max-w-max rounded-b-[15px] p-8 shadow-lg grow">
                <div className="font-medium text-xl xl:text-2xl title"><a href="https://github.com/bxokhxnhle/khanh-le-portfolio" target="_blank">Personal Website ↗</a></div>
                <p className="font-normal text-base lg:text-lg pt-1.5 sm:pt-4">Designed and coded a responsive website from scratch to showcase experiences</p>
                <ul className="flex flex-wrap text-sm md:text-base xl:text-lg gap-1 sm:gap-2 pt-5">
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Next.js</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">React.js</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">TypeScript</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Tailwind CSS</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Figma</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Frontend Development</li>
                </ul>
              </div>
            </div>
            <div className="card col-span-1 flex flex-col">
              <div className="card-img max-w-max rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={signupForm} alt="Sign Up Form" />
              </div>
              <div className="card-body max-w-max rounded-b-[15px] p-8 grow">
                <div className="font-medium text-xl xl:text-2xl title"><a href="https://github.com/bxokhxnhle/signup-form" target="_blank">Simple Sign Up Form ↗</a></div>
                <p className="font-normal text-base lg:text-lg pt-1.5 sm:pt-4">Re-designed and prototyped a responsive sign up form</p>
                <ul className="flex flex-wrap text-sm md:text-base xl:text-lg gap-1 sm:gap-2 pt-5">
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">HTML/CSS Flexbox</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">React.js</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">JavaScript</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Figma</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">UI Design</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Prototyping</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 pt-7 pb-8 items-stretch">
          <div className="card col-span-1 flex flex-col">
              <div className="card-img max-w-max rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={lifeos} alt="LifeOS Chrome extension" />
              </div>
              <div className="card-body max-w-max rounded-b-[15px] p-8 grow">
                <div className="font-medium text-xl xl:text-2xl title"><a href="https://devpost.com/software/lifeos" target="_blank">LifeOS ↗</a></div>
                <p className="font-normal text-base lg:text-lg pt-1.5 sm:pt-4">Developed a Chrome extension that allows productivity enhancement & mindfulness</p>
                <ul className="flex flex-wrap text-sm md:text-base xl:text-lg gap-1 sm:gap-2 pt-5">
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Adobe XD</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Adobe Illustrator</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Figma</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">UI Design</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Wireframing</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Prototyping</li>
                </ul>
              </div>
            </div>
            {/* <div className="card col-span-1 flex flex-col">
              <div className="card-img max-w-max lg:max-w-[544px] rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={cochlearImplant} alt="Cochlear Implant" />
              </div>
              <div className="card-body max-w-max lg:max-w-[544px] rounded-b-[15px] p-8 grow">
                <div className="underline font-medium text-xl xl:text-2xl"><a href="https://github.com/bxokhxnhle/cochlear-implant-singal-processor" target="_blank">Cochlear Implant Signal Processing ↗</a></div>
                <p className="font-normal text-base lg:text-lg pt-4">Developed a processor for cochlear implants by reading &  filtering sound signals, returning the processed sounds</p>
                <ul className="flex flex-wrap text-sm md:text-base xl:text-lg gap-x-2.5 gap-y-2 pt-5">
                  <li className="pill px-2 py-1 rounded-lg">MATLAB</li>
                  <li className="pill px-2 py-1 rounded-lg">Signal Analysis</li>
                </ul>
              </div>
            </div> */}
            <div className="card col-span-1 flex flex-col">
              <div className="card-img max-w-max rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={handScanner} alt="Ultrasonic Hand Gesture Scanner" />
              </div>
              <div className="card-body max-w-max rounded-b-[15px] p-8 grow">
                <div className="font-medium text-xl xl:text-2xl title"><a href="https://github.com/sofrod/bme386proj" target="_blank">Ultrasonic Hand Gesture Scanner ↗</a></div>
                <p className="font-normal text-base lg:text-lg pt-1.5 sm:pt-4">Assembled an ultrasonic hand scanner and developed an algorithm to read, process, detect different hand gestures and control Spotify playback from the classification</p>
                <ul className="flex flex-wrap text-sm md:text-base xl:text-lg gap-1 sm:gap-2 pt-5">
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Python</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Spotify Web APIs</li>
                  <li className="pill p-1.5 md:px-2.5 md:py-1.5 rounded-md">Arduino/C++</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </div>
        
      </main>
    </div>
  )
}