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
      <div className="m-4 min-h-80 rounded-xl border-zinc-700 hover:border-2 dark:border-zinc-500 dark:bg-zinc-900 lg:min-h-96">
        <div className="h-full">
          <a className="text-xl" href={`./${id}`}>
            <div className="relative h-5/6 w-full">
              <Image src={eyecatch.url} alt="back" className="rounded-t-xl object-cover" fill={true} />
            </div>
            <div className="rounded-b-xl border-x border-b border-transparent">
              <p className="px-4 pt-1 text-sm text-cyan-700 dark:text-yellow-400">{tokyoDate(createdAt)}</p>
              <div className="truncate px-4 py-1">{title}</div>
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
      <div className="mx-auto min-h-screen w-5/6 lg:w-2/3">
        <PageTitle title="コラム　-Media-" />
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
