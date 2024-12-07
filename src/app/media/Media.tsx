import { client } from "../../../libs/client"
import { parseHTML, tokyoDate } from "@/modules/function"
import PageTitle from "@/modules/conponents/PageTitle"
import Image from "next/image"

interface blogContent {
  id: string
  createdAt: string
  revisedAt: string
  title: string
  content: string
  eyecatch?: {
    url: string
  }
  parsedElements: string
}

const MediaContent: React.FC<blogContent> = ({
  id,
  title,
  createdAt,
  revisedAt,
  eyecatch = {
    url: "",
  },
  parsedElements,
}) => {
  return (
    <>
      {/* // 次のdivの枠に靄をかけて */}
      <div className="relative m-4 min-h-72 w-80 rounded-xl border-zinc-700 bg-white hover:border-2 dark:border-zinc-500 dark:bg-zinc-900 lg:min-h-96 lg:w-auto">
        <p className="absolute z-10 flex h-8 items-center rounded-lg bg-white px-6 text-center text-sm text-cyan-700 dark:text-yellow-400">
          {tokyoDate(createdAt).replaceAll("/", ".")}
        </p>
        <div className="m-2 h-full">
          <a className="text-xl" href={`./${id}`}>
            <div className="relative h-5/6 lg:w-full">
              <Image src={eyecatch.url} alt="back" className="rounded-lg object-cover" fill={true} />
            </div>
            <div className="rounded-b-xl border-x border-b border-transparent">
              <div className="truncate px-4 py-1 text-base lg:text-lg">{title}</div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

const Media = async () => {
  const data = await client.get({
    endpoint: "blogs",
  })

  const parsedContents: blogContent[] = data.contents.map((content: blogContent) => {
    const elements = parseHTML(content.content)
    return {
      ...content,
      parsedElements: elements,
    }
  })

  return (
    <>
      <PageTitle title="コラム　-Media-" imagePath="image-media.jpg" />
      <div className="mx-auto min-h-screen w-11/12 lg:w-2/3">
        <div className="p-4">
          <p className="text-lg">このページでは当社からのお得な情報を発信しています</p>
        </div>
        <div className="grid h-full lg:grid-cols-2 lg:p-12">
          {parsedContents.map((content: blogContent) => (
            <MediaContent key={`media-${content.id}`} {...content} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Media
