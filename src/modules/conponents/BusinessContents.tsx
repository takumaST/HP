"use client"
import { iBusinessContent } from "@/app/business/Business"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Hina_Mincho } from "next/font/google"
import { Oswald } from "next/font/google"

export const micho = Hina_Mincho({ subsets: ["latin"], weight: ["400"] })
export const oswald = Oswald({ subsets: ["latin"], weight: ["400"] })

const BusinessContents = ({ content, side }: { content: iBusinessContent; side: "left" | "right" }) => {
  const { title, body, image } = content
  const [ref, inView] = useInView({
    rootMargin: "-150px 0px -150px 0px",
    // triggerOnce: true,
  })

  return (
    <>
      <div className="border-b-2 border-t-2">
        <div
          ref={ref}
          className={`min-h-32 justify-between py-8 lg:flex ${image ? (side === "left" ? "flex-row" : "flex-row-reverse") : ""}`}
        >
          <div
            className={`mx-auto opacity-0 lg:w-2/3 ${inView && "animate-duration-4000 animate-fade-left opacity-100 animate-once animate-ease-out"}`}
          >
            <div className="mx-auto w-11/12">
              {image && <div className="hidden h-16 lg:block"></div>}
              <h3 className={`text-4xl ${oswald.className} py-2 font-extrabold text-yellow-800`}>{title}</h3>
              <div className="animate-fade p-4 text-lg animate-delay-1000">{body}</div>
            </div>
          </div>
          {image && (
            <div
              className={`opacity-0 shadow-lg lg:w-1/3 ${inView && "animate-fade opacity-100 animate-duration-[3000ms] animate-once animate-ease-out"}`}
            >
              <div className="">
                <Image className="lg:rounded" src={image} alt={title} width={520} height={250} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BusinessContents
