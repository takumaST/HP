import cheerio from "cheerio";

export const parseHTML = (html: string): string => {
    if (!html) return "";

    const $ = cheerio.load(html);

    $("h1").each((_, element)=> {
        $(element).html()
        $(element).addClass("text-5xl")
    })

    $("h2").each((_, element)=> {
        $(element).html()
        $(element).addClass("text-4xl")
    })

    $("h3").each((_, element)=> {
        $(element).html()
        $(element).addClass("text-3xl")
    })

    $("p").each((_, element)=> {
        $(element).html()
        $(element).addClass("py-2")
    })

    // $("h")
    const children = $("body").html()
    return children ?? "";
};

export const tokyoDate = (date: string): string => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo' });
}