import { parseHTML, tokyoDate } from "@/modules/function";
import { client } from "../../../../libs/client";
import { blogResponse } from "@/modules/apitype";
import Header from "@/modules/conponents/Header";

interface Params {
    params : {
        id: string,
    }
}

export default async function Page ({ params }: Params) {
    const data = await client.get<blogResponse>({
        endpoint: "blogs",
        contentId: params.id,
    })

    const { id, createdAt, publishedAt, revisedAt, title, content } = data
    const parsedHTML = parseHTML(content)

    return (
    <>
    <Header title="Media" />
    <div className="min-h-screen max-w-6xl mx-auto">
        <div className="flex flex-row-reverse">
            <div>
            <div className="text-sm">掲載日　{tokyoDate(createdAt)}</div>
            <div className="text-sm">更新日　{tokyoDate(revisedAt)}</div>
            </div>
        </div>
        <div dangerouslySetInnerHTML={{__html:parsedHTML}}/>
    </div>
    </>
    )

}

export async function generateStaticParams () {
    const data = await client.get({
        endpoint: "blogs",
    })

    return data.contents.map((item:any) => ({
        id: item.id,
    }))
}