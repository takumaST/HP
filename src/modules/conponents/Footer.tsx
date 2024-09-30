import Image from "next/image";

const Footer = () => {
    return (
    <>
    <div className="py-4 lg:py-8 bg-black text-white items-center justify-between text-sm">
        <div className="justify-center lg:flex">
            <a href="/about"><div className="w-28 flex items-center justify-center">会社概要</div></a>
            <a href="/business"><div className="w-28 flex items-center justify-center">事業内容</div></a>
            <a href="/media"><div className="w-28 flex items-center justify-center">コラム</div></a>
            <a href="/news"><div className="w-28 flex items-center justify-center">最新情報</div></a>
        </div>
        <div className="justify-center lg:flex">
            <a href="/pp">
                <div className="w-40 text-center">プライバシーポリシー</div>
            </a>
        </div>
        <div className="bottom-0 left-0 flex h-12 lg:h-24 items-end justify-center from-black via-black">
            <a href="/">
            <Image
                src="/monoLogoRow.svg"
                alt="Exsend Row Logo"
                className="invert"
                width={100}
                height={24}
                priority={true}
            />
            </a>
        </div>
    </div>
    </>
    )
}

export default Footer