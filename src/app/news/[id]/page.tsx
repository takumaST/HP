import { parseHTML } from "@/modules/function";
import { client } from "../../../../libs/client";
import { newsResponse } from "@/modules/apitype";
import Header from "@/modules/conponents/Header";
import Footer from "@/modules/conponents/Footer";

interface Params {
    params : {
        id: string,
    }
}

export default async function Page ({ params }: Params) {
    const data = await client.get<newsResponse>({
        endpoint: "news",
        contentId: params.id,
    })

    const { id, createdAt, publishedAt, revisedAt, title, content } = data
    const parsedHTML = parseHTML(content)

    return (
    <>
    <Header title="News" />
    <div className="min-h-screen max-w-6xl mx-auto">
        <div className="">{id}</div>
        <div className="" dangerouslySetInnerHTML={{__html:parsedHTML}}/>
    </div>
    <Footer />
    </>
    )

}

export async function generateStaticParams () {
    const data = await client.get<{
        contents: newsResponse[]
    }>({
        endpoint: "news",
    })

    return data.contents.map(item => ({
        id: item.id,
    }))
}