import { extractTOC, parseHTML, tokyoDate } from "@/modules/function"
import { client } from "../../../../libs/client"
import { blogResponse } from "@/modules/apitype"
import Header from "@/modules/conponents/Header"

interface Params {
  params: {
    id: string
  }
}

export default async function Page({ params }: Params) {
  const data = await client.get<blogResponse>({
    endpoint: "blogs",
    contentId: params.id,
  })

  const { id, createdAt, publishedAt, revisedAt, title, introduction, toc, content } = data

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
        <div className="m-12 text-2xl lg:text-4xl font-bold">{title}</div>

        {/* 導入文 */}
        <div className="py-4" dangerouslySetInnerHTML={{ __html: parsedIntro }} />

        {/* 目次 */}
        {toc && (
          <>
            <div className="py-4 text-2xl font-bold">目次</div>
            {topicOfContents.map((content) => (
              <div key={content?.id} className="p-2">
                {content?.text}
              </div>
            ))}
          </>
        )}

        <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const data = await client.get({
    endpoint: "blogs",
  })

  return data.contents.map((item: any) => ({
    id: item.id,
  }))
}
