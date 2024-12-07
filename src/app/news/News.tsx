import PageTitle from "@/modules/conponents/PageTitle"
import { parseHTML, tokyoDate } from "@/modules/function"
import { Content } from "@/modules/type"
import { client } from "../../../libs/client"

const NewsPage = async () => {
  const data = await client.get({
    endpoint: "news",
  })

  const parsedContents: Content[] = data.contents.map((content: Content) => {
    const elements = parseHTML(content.content)
    return {
      ...content,
      parsedElements: elements,
    }
  })

  return (
    <>
      <PageTitle title="最新情報　-News-" />
      <div className="mx-auto min-h-screen w-11/12 lg:w-2/3">
        {/* <Image src={`/images/zouji_webp/画像4.webp`} alt="back" objectFit={`cover`} width={1500} height={720} /> */}
        {parsedContents.map((content: Content) => {
          const date = tokyoDate(content.revisedAt)
          return (
            <div className="min-h-16" key={content.id}>
              <div className="w-full border-b border-zinc-500">
                <div className="font-semibold hover:bg-neutral-400 hover:invert dark:font-normal">
                  <p className="text-sm text-cyan-800 lg:text-lg lg:text-black">{date}</p>
                  <a className="" href={`./${content.id}`}>
                    <div className="w-full truncate whitespace-nowrap">{content.title}</div>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default NewsPage
