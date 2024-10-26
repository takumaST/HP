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
      <div className="min-h-80 lg:min-h-96 m-4 rounded-3xl hover:border-4 border-zinc-700 bg-zinc-400 dark:bg-zinc-900 dark:border-zinc-500">
        <div className="h-full">
          <a className="text-xl" href={`./${id}`}>
            <div className="relative h-5/6 w-full">
              <Image src={eyecatch.url} alt="back" className="object-cover rounded-t-3xl" fill={true} />
            </div>
            <p className="text-sm text-cyan-700 dark:text-yellow-400 px-4">{tokyoDate(createdAt)}</p>
            <div className="px-4">{title}</div>
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
      <div className="min-h-screen mx-auto w-5/6 lg:w-2/3">
        <PageTitle title="コラム　-Media-" />
        <div className="h-full lg:p-12 grid lg:grid-cols-2">
          {parsedContents.map((content: blogContent) => (
            <MediaContent key={content.id} {...content} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Media
