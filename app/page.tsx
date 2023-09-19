import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import linkedInIcon from "../public/linkedin.svg"
import gitHubIcon from "../public/github.svg"
import emailIcon from "../public/mail.svg"
import resumeIcon from "../public/resume.svg"
import aboutMe from "../public/about me.png"
import versa from "../public/versa.png"
import loblaw from "../public/loblaw.png"
import purolator from "../public/purolator.png"
import bespoke from "../public/bespoke.png"
import portfolio from"../public/portfolio.png"
import signupForm from "../public/signup-form.png"
import lifeos from "../public/lifeos.png"
import cochlearImplant from "../public/cochlear-implant.png"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khanh Le</title>
        <meta name="description" content="Khanh Le's Personal Website" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="bg-light-grey pt-10">
        <div className="min-h-screen max-w-desktop mx-auto">
        <section>
          <div className="font-medium text-5xl text-dark-blue pb-5">Hi there, I’m <span className="text-light-blue">Khanh</span> - developer & designer</div>
          <div className="font-medium text-4xl text-dark-blue leading-10 pb-10">a health tech enthusiast driven by the idea of integrating technology and healthcare to unveil novel solutions to health challenges ٩(๑❛ᴗ❛๑)۶</div>
          <div className="flex justify-start gap-x-6">
            <a href="https://www.linkedin.com/in/baokhanhle/" target="_blank"><Image src={linkedInIcon} alt="LinkedIn" /></a>
            <a href="https://github.com/bxokhxnhle" target="_blank"><Image src={gitHubIcon} alt="GitHub" /></a>
            <a href="mailto:khanh.le@uwaterloo.ca" target="_blank"><Image src={emailIcon} alt="Email" /></a>
            <a href="https://drive.google.com/file/d/1X3oPHDxcHcgUz8VV1UddrRW-SbZQX61F/view?usp=sharing" target="_blank"><Image src={resumeIcon} alt="Resume" /></a>
          </div>
          <div className="text-dark-blue text-lg pt-20">Scroll to see my work  ↓</div>
        </section>
        <section className="pt-16" id="about">
          <h2 className="text-light-blue text-5xl font-medium -mb-2">About me</h2>
          <h4 className="text-medium-blue text-3xl">My background</h4>
          <div className="flex flex-row gap-x-4 pt-4">
            <div className="basis-2/3 font-normal text-lg leading-6">
            <p className="pb-5">I was born and raised in Ho Chi Minh City, Vietnam – an energetic and bustling area. The city has infiltrated my code; I enjoy people watching and taking a sip of coffee every morning. I have grown up living amongst all kinds of people around Vietnam and the world, making me open to all kinds of experiences and enthusiastic about embracing anomalies.</p>
            <p className="pb-5">I am passionate about technology and healthcare, which has led me to study <a href="https://uwaterloo.ca/biomedical-engineering" target="_blank"><span className="font-bold">Biomedical Engineering</span></a> at the University of Waterloo. I have taken a keen interest in software development, as introduced to me in my individual projects, courses, and previous co-op placements. Outside of school, I enjoy dancing, photography, graphic design, and badminton. I embrace all challenges and believe it is the best testament to my potential. A goal of mine is to touch on more areas of software-focused BME, immersing myself in academia, and helping to build stronger communities.</p>
            <p>Previously SWE @ <a href="https://versa-networks.com/" target="_blank"><span className="font-bold">Versa Networks</span></a>, <a href="https://www.loblawdigital.co/" target="_blank"><span className="font-bold">Loblaw Digital</span></a>, <a href="https://www.purolator.com/" target="_blank"><span className="font-bold">Purolator</span></a>.<br />Seeking Winter & Summer 2024 Internship Opportunities! Get my <a href="https://drive.google.com/file/d/1X3oPHDxcHcgUz8VV1UddrRW-SbZQX61F/view?usp=sharing" target="_blank"><span className="underline">resume ↗</span></a></p>
            </div>
            <div className="basis-1/3">
              <Image src={aboutMe} alt="profile picture" />
            </div>
          </div>
        </section>
        <section className="pt-16" id="work">
          <h2 className="text-light-blue text-5xl font-medium -mb-2">Work</h2>
          <h4 className="text-medium-blue text-3xl">What I have been working on</h4>
          <div className="container mx-auto grid grid-cols-2 gap-x-8 pt-4 pb-8 items-stretch">
            <div className="col-span-1 flex flex-col">
              <div className="max-w-[544px] rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={versa} alt="Versa Networks" />
              </div>
              <div className="max-w-[544px] rounded-b-[15px] p-8 bg-dark-blue">
                <div className="flex justify-between items-center">
                  <div className="underline text-medium-blue font-medium text-3xl"><a href="https://versa-networks.com/" target="_blank">Versa Networks ↗</a></div>
                  <div className="text-medium-blue font-normal italic text-2xl">May - Aug 2023</div>
                </div>
                <p className="font-normal text-light-grey text-lg pt-4">Improved website functionality and user engagement by migrating legacy code to reusable components & UI features, resulting in a 30% increase in performance and scalability</p>
                <ul className="flex flex-wrap text-lg text-dark-blue gap-x-2.5 gap-y-2 pt-5">
                  <li className="bg-light-grey px-2 py-1 rounded-lg">React.js</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">SCSS</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Bootstrap</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">WordPress/PHP</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 flex flex-col">
              <div className="max-w-[544px] rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={loblaw} alt="Loblaw Digital" />
              </div>
              <div className="max-w-[544px] rounded-b-[15px] p-8 bg-dark-blue">
                <div className="flex justify-between items-center">
                  <div className="underline text-medium-blue font-medium text-3xl"><a href="https://www.loblawdigital.co/" target="_blank">Loblaw Digital ↗</a></div>
                  <div className="text-medium-blue font-normal italic text-2xl">Sep - Dec 2022</div>
                </div>
                <p className="font-normal text-light-grey text-lg pt-4">Empowered prescription management experience (renewal, refill & pickup service) by deploying website components & features for Shoppers Drug Mart Digital Pharmacy, prioritizing responsive design and accessibility</p>
                <ul className="flex flex-wrap text-lg text-dark-blue gap-x-2.5 gap-y-2 pt-5">
                  <li className="bg-light-grey px-2 py-1 rounded-lg">React.js</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Redux</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">SASS</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Jest</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-2 gap-x-8 items-stretch">
          <div className="col-span-1 flex flex-col">
              <div className="max-w-[544px] rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={purolator} alt="Purolator" />
              </div>
              <div className="max-w-[544px] rounded-b-[15px] p-8 bg-dark-blue">
                <div className="flex justify-between items-center">
                  <div className="underline text-medium-blue font-medium text-3xl"><a href="https://www.purolator.com/" target="_blank">Purolator ↗</a></div>
                  <div className="text-medium-blue font-normal italic text-2xl">Jan - Apr 2022</div>
                </div>
                <p className="font-normal text-light-grey text-lg pt-4">Enhanced user retention & monthly visitors by implementing JS algorithms on Google Analytics tracking and addressed rendering issues by 30% by revamping and developing Purolator&apos;s website</p>
                <ul className="flex flex-wrap text-lg text-dark-blue gap-x-2.5 gap-y-2 pt-5">
                  <li className="bg-light-grey px-2 py-1 rounded-lg">HTML/CSS</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">JavaScript</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Bootstrap</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Drupal</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 flex flex-col">
              <div className="max-w-[544px] rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={bespoke} alt="Bespoke Metrics" />
              </div>
              <div className="max-w-[544px] rounded-b-[15px] p-8 bg-dark-blue">
                <div className="flex justify-between items-center">
                  <div className="underline text-medium-blue font-medium text-3xl"><a href="https://compass.bespokemetrics.com/company_press.html" target="_blank">Bespoke Metrics ↗</a></div>
                  <div className="text-medium-blue font-normal italic text-2xl">May - Aug 2021</div>
                </div>
                <p className="font-normal text-light-grey text-lg pt-4">Standardized and designed marketing materials, enhanced product accessibility, improving social media engagement by 23% and reconstructed the digital asset management system, enhancing efficiency</p>
                <ul className="flex flex-wrap text-lg text-dark-blue gap-x-2.5 gap-y-2 pt-5">
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Adobe XD</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Adobe InDesign</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Graphic Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-16" id="projects">
          <h2 className="text-light-blue text-5xl font-medium -mb-2">Projects</h2>
          <h4 className="text-medium-blue text-3xl">What I do outside of work</h4>
          <div className="container mx-auto grid grid-cols-2 gap-x-8 pt-4 pb-8 items-stretch">
            <div className="col-span-1 flex flex-col">
              <div className="max-w-[544px] rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={versa} alt="Personal Website" />
              </div>
              <div className="max-w-[544px] rounded-b-[15px] p-8 bg-dark-blue grow">
                <div className="underline text-medium-blue font-medium text-3xl"><a href="https://github.com/bxokhxnhle/khanh-le-portfolio" target="_blank">Personal Website ↗</a></div>
                <p className="font-normal text-light-grey text-lg pt-4">Designed and coded a responsive website from scratch to showcase experiences</p>
                <ul className="flex flex-wrap text-lg text-dark-blue gap-x-2.5 gap-y-2 pt-5">
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Next.js</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">React.js</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Tailwind CSS</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Figma</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 flex flex-col">
              <div className="max-w-[544px] rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={signupForm} alt="Sign Up Form" />
              </div>
              <div className="max-w-[544px] rounded-b-[15px] p-8 bg-dark-blue">
                <div className="underline text-medium-blue font-medium text-3xl"><a href="https://github.com/bxokhxnhle/signup-form" target="_blank">Simple Sign Up Form ↗</a></div>
                <p className="font-normal text-light-grey text-lg pt-4">Re-designed and prototyped a responsive sign up form</p>
                <ul className="flex flex-wrap text-lg text-dark-blue gap-x-2.5 gap-y-2 pt-5">
                  <li className="bg-light-grey px-2 py-1 rounded-lg">HTML/CSS Flexbox</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">React.js</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">JavaScript</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Figma</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">UI Design</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Prototyping</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-2 gap-x-8 items-stretch">
          <div className="col-span-1 flex flex-col">
              <div className="max-w-[544px] rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={lifeos} alt="LifeOS Chrome extension" />
              </div>
              <div className="max-w-[544px] rounded-b-[15px] p-8 bg-dark-blue">
                <div className="underline text-medium-blue font-medium text-3xl"><a href="https://devpost.com/software/lifeos" target="_blank">LifeOS ↗</a></div>
                <p className="font-normal text-light-grey text-lg pt-4">Developed a Chrome extension that allows productivity enhancement & mindfulness</p>
                <ul className="flex flex-wrap text-lg text-dark-blue gap-x-2.5 gap-y-2 pt-5">
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Adobe XD</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Adobe Illustrator</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Figma</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">UI Design</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Wireframing</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Prototyping</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 flex flex-col">
              <div className="max-w-[544px] rounded-t-[15px] overflow-hidden shadow-lg">
                <Image src={cochlearImplant} alt="Cochlear Implant" />
              </div>
              <div className="max-w-[544px] rounded-b-[15px] p-8 bg-dark-blue grow">
                <div className="underline text-medium-blue font-medium text-3xl"><a href="" target="_blank">Cochlear Implant Signal Processing ↗</a></div>
                <p className="font-normal text-light-grey text-lg pt-4">Developed a processor for cochlear implants by reading &  filtering sound signals, returning the processed sounds</p>
                <ul className="flex flex-wrap text-lg text-dark-blue gap-x-2.5 gap-y-2 pt-5">
                  <li className="bg-light-grey px-2 py-1 rounded-lg">MATLAB</li>
                  <li className="bg-light-grey px-2 py-1 rounded-lg">Signal Analysis</li>
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