import cheerio from "cheerio";

export const parseHTML = (html: string): string => {
    if (!html) return "";

    const $ = cheerio.load(html);

    $("h1").each((_, element)=> {
        $(element).html()
        $(element).addClass("text-4xl mt-12")
    })

    $("h2").each((_, element)=> {
        $(element).html()
        $(element).addClass("text-.xl mt-10")
    })

    $("h3").each((_, element)=> {
        $(element).html()
        $(element).addClass("text-2xl mt-8")
    })

    $("h4").each((_, element)=> {
        $(element).html()
        $(element).addClass("text-xl mt-6")
    })

    $("p").each((_, element)=> {
        $(element).html()
        $(element).addClass("py-2")
    })

    $("u").each((_, element)=> {
        $(element).html()
        $(element).addClass("underline underline-offset-4")
    })

    $("figure").each((_, element)=> {
        $(element).html()
        $(element).addClass("py-8")
    })

    $("table").each((_, element)=> {
        $(element).html()
        $(element).addClass("border border-gray-800")
    })

    // $("h")
    const children = $("body").html()
    return children ?? "";
};

export const tokyoDate = (date: string): string => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo' });
}