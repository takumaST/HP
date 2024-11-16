import Image from "next/image"
interface iPageTitleProps {
  title: string
  imagePath?: string
}

const PageTitle: React.FC<iPageTitleProps> = ({ title, imagePath }) => {
  return (
    <div className="relative flex h-16 w-full items-center lg:h-96">
      {/* 背景画像 */}
      {imagePath && (
        <Image
          src={`/images/title/${imagePath}`} // 背景画像のパス
          alt="Background"
          fill // 画像を親要素にフィットさせる
          className="z-[-1] hidden object-cover lg:block"
        />
      )}
      <div className="ml-8 h-16 p-4 text-center text-2xl font-bold lg:text-3xl">{title}</div>
    </div>
  )
}

export default PageTitle
