import { extractTOC, parseHTML, tokyoDate } from "@/modules/function"
import Image from "next/image"
import { client } from "../../../../libs/client"
import { blogResponse } from "@/modules/apitype"
import Header from "@/modules/conponents/Header"

interface Params {
  params: {
    id: string
  }
}

const MediaChildPage = async ({ params }: Params) => {
  const data = await client.get<blogResponse>({
    endpoint: "blogs",
    contentId: params.id,
  })

  const { id, createdAt, publishedAt, revisedAt, eyecatch, title, introduction, toc, content } = data

  const parsedIntro = parseHTML(introduction)
  const topicOfContents = extractTOC(content)
  const parsedContent = parseHTML(content)

  return (
    <>
      <Header title="Media" />
      <div className="min-h-screen px-12 max-w-7xl mx-auto bg-gray-200">
        <div className="flex flex-row-reverse">
          <div className="p-2">
            <div className="text-sm">掲載日　{tokyoDate(createdAt)}</div>
            <div className="text-sm">更新日　{tokyoDate(revisedAt)}</div>
          </div>
        </div>

        {/* 画像 */}
        <div className="w-full h-96">
          <div className="relative size-full">
            <Image src={eyecatch?.url ?? ""} alt="back" className="object-cover rounded-t-3xl" fill={true} />
          </div>
        </div>
        {/* タイトル */}
        <div className="my-4 lg:m-12 text-2xl lg:text-4xl font-bold">{title}</div>

        {/* 導入文 */}

        <div className="py-4" dangerouslySetInnerHTML={{ __html: parsedIntro }} />

        {/* 目次 */}
        {(toc && topicOfContents.length !== 0) && (
          <>
            <div className="py-6 pl-16 text-2xl font-bold border-b border-zinc-400">目次</div>
            <div className="my-2 w-4/5 lg:w-5/6 mx-auto">
            {topicOfContents.map((content, index) => (
              <div key={`${index}${content?.id} ?? ""`} className="p-2 text-lg">
                {content?.text}
              </div>
            ))}
            </div>
            <div className="border-b border-zinc-400"></div>
          </>
        )}

        {/* 本文 */}
        <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
      </div>
    </>
  )
}

export default MediaChildPage

export async function generateStaticParams() {
  const data = await client.get({
    endpoint: "blogs",
  })

  return data.contents.map((item: any) => ({
    id: item.id,
  }))
}
