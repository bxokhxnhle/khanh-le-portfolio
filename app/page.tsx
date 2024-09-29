import Image from 'next/image'
import aboutMe from "../public/about me.svg"
import aboutMeMobile from "../public/about-me-mobile.svg"
import sunlife from "../public/sunlife.png"
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
import WorkCards from './components/WorkCards'
import ProjectCards from './components/ProjectCards'

export default function Home() {
  return (
    <div>
      <main>
        <div className="min-h-screen max-w-mobile mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <section className="pt-12 md:pt-16" id="about">
          <h2 className="text-4xl md:text-5xl font-medium">About me</h2>
          <h4 className="text-xl md:text-3xl">My background</h4>
          <div className="flex flex-row flex-wrap gap-y-14 pt-6 justify-center lg:justify-between">
            <div className="basis-full lg:basis-5/7 font-normal text-lg leading-6">
            <p className="pb-7 hidden md:flex">I was born and raised in Ho Chi Minh City, Vietnam – an energetic and bustling area. The city has infiltrated my core; I enjoy people watching and taking a sip of coffee every morning. I have grown up living amongst all kinds of people around Vietnam and the world, making me open to all kinds of experiences and enthusiastic about embracing anomalies.</p>
            <p className="pb-7">I am a 4th year <a href="https://uwaterloo.ca/biomedical-engineering" target="_blank" className="about-link font-bold relative after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200">Biomedical Engineering</a> at the University of Waterloo, with a passion in technology and healthcare. I have taken a keen interest in software development, as introduced to me in my individual projects, courses, and previous co-op placements. Outside of school, I enjoy dancing, photography, graphic design, and badminton. A goal of mine is to touch on more areas of software-focused BME, immersing myself in academia, and helping to build stronger communities.</p>
            <p>Previously @ <a href="https://www.sunlife.ca/" target="_blank" className="about-link font-bold relative after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200">Sun Life</a>, <a href="https://versa-networks.com/" target="_blank" className="about-link font-bold relative after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200">Versa Networks</a>, <a href="https://www.loblawdigital.co/" target="_blank" className="about-link font-bold relative after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200">Loblaw Digital</a>, <a href="https://www.purolator.com/" target="_blank" className="about-link font-bold relative after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200">Purolator</a>.<br />Seeking 2025 New Grad Full-time Opportunities! Get my <a href="https://drive.google.com/file/d/1_BLpUagBcRq4r4aXwRncV9wmg2Y65bFK/view?usp=sharing" target="_blank" className="about-link relative after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200">resume ↗</a></p>
            </div>
            <div className="lg:basis-1/4">
              <Image className="hidden md:block rounded-t-[200px]" src={aboutMe} alt="profile picture" />
              <Image className="md:hidden rounded-t-[70px]" src={aboutMeMobile} alt="profile picture" />
              <div className="spotify-container flex items-center p-5">
                <BsSpotify className="opacity-90 spotify-icon shrink-0" size="40px" />
                <div className="ml-6 md:ml-5">
                  <SpotifyCurrentlyPlaying />
                  {/* <SpotifyRecentlyPlayed /> */}
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
            <WorkCards
              title="Sun Life"
              url={'https://www.sunlife.ca/en/'}
              duration={'May - Aug 2024'}
              imageSrc={sunlife}
              description={'Developed and implemented functional and unit tests, integrated axe-devtools for accessibility compliance, and spearheaded to streamline testing processes and document best practices, enhancing overall code quality and team efficiency'}
              tags={['React Testing Library', 'Jest', 'Axe DevTools']}
            />

            <WorkCards
              title={'Versa Networks'}
              url={'https://versa-networks.com/'}
              duration={'May 2023 - Apr 2024'}
              imageSrc={versa}
              description={'Implemented and updated high prioritized UI components to enhance user engagement and improved website functionality by migrating legacy code to UI features, resulting in a 33% improvement in performance and scalability'}
              tags={['React.js', 'SCSS', 'Bootstrap', 'WordPress']}
            />
          </div>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 pt-7 pb-8 items-stretch">
            <WorkCards
              title={'Loblaw Digital'}
              url={'https://www.loblawdigital.co/'}
              duration={'Sep - Dec 2022'}
              imageSrc={loblaw}
              description={'Empowered prescription management experience by developing website components and features for Shoppers Drug Mart Digital Pharmacy, prioritizing responsive design and accessibility'}
              tags={['React.js', 'Redux', 'SASS', 'Jest']}
            />
            
            <WorkCards
              title="Purolator Inc"
              url={'https://www.purolator.com/'}
              duration={'Jan - Apr 2022'}
              imageSrc={purolator}
              description={"Enhanced user retention and monthly visitors by implementing JS algorithms on Google  Analytics tracking and addressed rendering issues by 30% by revamping and developing Purolator's website"}
              tags={['HTML/CSS', 'JavaScript', 'Bootstrap', 'Drupal']}
            />
            {/* <WorkCards
              title="Bespoke Metrics"
              url={'https://compass.bespokemetrics.com/company_press.html'}
              duration={'May - Aug 2021'}
              imageSrc={bespoke}
              description={'Standardized and designed marketing materials, enhanced product accessibility, improving social media engagement by 23% and reconstructed the digital asset management system'}
              tags={['Adobe XD', 'Adobe InDesign', 'Graphic Design']}
            /> */}
          </div>
        </section>
        <section className="pt-12 md:pt-16" id="projects">
          <h2 className="text-4xl md:text-5xl font-medium">Projects</h2>
          <h4 className="text-xl md:text-3xl">What I do outside of work</h4>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 pt-7 pb-8 items-stretch">
            <ProjectCards
              title={'Personal Website'}
              imageSrc={portfolio}
              url={'https://github.com/bxokhxnhle/khanh-le-portfolio'}
              description={'Designed and coded a responsive website from scratch to showcase experiences'}
              tags={['Next.js', 'React.js', 'TypeScript','Figma', 'Tailwind CSS', 'Frontend Development']}
            />
            <ProjectCards
              title={'Simple Sign Up Form'}
              imageSrc={signupForm}
              url={'https://github.com/bxokhxnhle/signup-form'}
              description={'Re-designed and prototyped a responsive sign up form'}
              tags={['HTML/CSS Flexbox', 'React.js', 'JavaScript', 'Figma', 'UI Design', 'Prototyping']}
            />
          </div>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 pt-7 pb-8 items-stretch">
            <ProjectCards
              title={'LifeOS'}
              imageSrc={lifeos}
              url={'https://devpost.com/software/lifeos'}
              description={'Developed a Chrome extension that allows productivity enhancement and mindfulness'}
              tags={['Adobe XD', 'Adobe Illustrator', 'Figma', 'UI Design', 'Wireframing', 'Prototyping']}
            />
            {/* <ProjectCards
              title={'Cochlear Implant Signal Processing'}
              imageSrc={cochlearImplant}
              url={'https://github.com/bxokhxnhle/cochlear-implant-singal-processor'}
              description={'Developed a processor for cochlear implants by reading &  filtering sound signals, returning the processed sounds'}
              tags={['MATLAB', 'Signal Analysis']}
            /> */}
            <ProjectCards
              title={'Ultrasonic Hand Gesture Scanner'}
              imageSrc={handScanner}
              url={'https://github.com/sofrod/bme386proj'}
              description={'Assembled an ultrasonic hand scanner and developed an algorithm to read, process, detect different hand gestures and control Spotify playback from the classification'}
              tags={['Spotify Web APIs', 'Python', 'Arduino/C++']}
            />
          </div>
        </section>
        </div>
      </main>
    </div>
  )
}