import Image from "next/image"

interface iHeaderProps {
  title?: "About Us" | "Business" | "Media" | "News"
}

const Header: React.FC<iHeaderProps> = ({ title }) => {
  return (
    <>
      <div className="fixed top-0 z-10 w-screen bg-zinc-300/50 backdrop-blur-sm dark:bg-black/50 lg:sticky">
        <div className="flex items-center justify-between p-4 lg:h-24">
          <div>
            <div className="w-56">
              <a className="w-full flex items-center justify-center" href="/">
                <div className="mx-auto flex">
                  <Image
                    className="relative invert dark:invert-0 dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    src="/whiteLogo.svg"
                    alt="Exsend Logo"
                    width={24}
                    height={24}
                    priority
                  />
                  <div className="p-2 font-bold">合同会社エクセンド</div>
                </div>
              </a>
            </div>
          </div>

          <div className="hidden lg:visible lg:flex">
            <div
              className={`w-24 ${title === "About Us" ? "underline decoration-sky-400 decoration-2 underline-offset-8" : ""}`}
            >
              <a className="h-24" href="/about">
                会社概要
              </a>
            </div>
            <div
              className={`w-24 ${title === "Business" ? "underline decoration-sky-400 decoration-2 underline-offset-8" : ""}`}
            >
              <a href="/business">事業内容</a>
            </div>
            <div
              className={`w-24 ${title === "Media" ? "underline decoration-sky-400 decoration-2 underline-offset-8" : ""}`}
            >
              <a href="/media">コラム</a>
            </div>
            <div
              className={`w-24 ${title === "News" ? "underline decoration-sky-400 decoration-2 underline-offset-8" : ""}`}
            >
              <a href="/news">最新情報</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
