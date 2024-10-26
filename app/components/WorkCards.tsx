import Image from "next/image"

export default function Cards({title, url, duration, imageSrc, description, tags}: any) {
  return (
    <div className="card col-span-1 flex flex-col">
      <div className="card-img max-w-max rounded-t-[15px] overflow-hidden">
        <Image src={imageSrc} alt={title} />
      </div>
      <div className="card-body max-w-max rounded-b-[15px] p-8 shadow-lg grow">
        <div className="flex flex-wrap justify-between items-center title">
          <div className="font-medium text-xl xl:text-2xl pr-12 md:pr-0">
            <a href={url} target="_blank" className="relative after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200">{title} ↗</a>
          </div>
          <div className="font-normal italic text-base sm:text-lg xl:text-xl pt-1 sm:pt-0">{duration}</div>
        </div>
        <p className="font-normal text-base lg:text-lg pt-1.5 sm:pt-4">{description}</p>
        <ul className="flex flex-wrap text-sm md:text-base xl:text-lg gap-1 sm:gap-2 pt-3.5 sm:pt-5">
          {tags.map((tag: any) => (
            <li className="pill p-1.5 md:px-2.5 md:pt-1.5 md:pb-1 rounded-md" key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}