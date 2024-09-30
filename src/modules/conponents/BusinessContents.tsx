'use client'
import { iBusinessContent } from "@/app/business/Business"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

const BusinessContents = ( { content, side }: {content:iBusinessContent, side: "left" | "right"}) => {
    const {title, body, image} = content
    const [ref, inView] = useInView({
        rootMargin: "-150px 0px -150px 0px",
        // triggerOnce: true,
    })

    return (
    <>
    <div className="border-t-2 border-b-2">
    <div ref={ref} className={`min-h-32 justify-between py-8 lg:flex ${image ? side === "left" ? "flex-row" : "flex-row-reverse" : ""}`}>
        <div className={`lg:w-2/3 mx-auto opacity-0 ${inView && "opacity-100 animate-fade-left animate-once animate-duration-4000 animate-ease-out"}`}>
            <div className="w-11/12 mx-auto"> 
                {image && <div className="h-16 hidden lg:block"></div>}
                <h3 className="text-2xl font-bold py-2">{title}</h3>
                <div className="text-lg animate-fade animate-delay-1000">{body}</div>
            </div>
        </div>
        {image &&
        <div className={`lg:w-1/3 shadow-lg opacity-0 ${inView && "opacity-100 animate-fade animate-once animate-duration-[3000ms] animate-ease-out"}`}>
            <div className="">
                <Image className="lg:rounded" src={image} alt={title} width={520} height={250}/>
            </div>
        </div>
        }
    </div>
    </div>
    </>
    )
}

export default BusinessContents