import BusinessContents from "@/modules/conponents/BusinessContents"
import PageTitle from "@/modules/conponents/PageTitle"

export interface iBusinessContents {
  "With Tube": iBusinessContent
  "動画制作/撮影": iBusinessContent
  SNS運用代行: iBusinessContent
  "SNS広告運用/制作": iBusinessContent
  HP制作: iBusinessContent
  "美容医療SNS支援「メディカルライアート」運営": iBusinessContent
  MEO対策: iBusinessContent
}

export interface iBusinessContent {
  title: string
  body: string
  image?: string
}

const BUSINESS_CONTENTS: iBusinessContents = {
  "With Tube": {
    title: "With Tube",
    body: "合同会社エクセンドでは、お客様のお悩み・目的・状態に合わせて、YouTubeマーケットの事例を基に、適切なYouTube運用や集客のご提案・ご支援を行っております。",
    image: "/images/26847482_s.webp",
  },
  "動画制作/撮影": {
    title: "動画制作/撮影",
    body: "合同会社エクセンドでは、お客様のお悩み・目的・状態に合わせて、動画の撮影・撮影サポート、そして動画・映像の制作といったクリエイティブ業務をまるっと請け負います。",
    image: "/images/3586238_s.webp",
  },
  SNS運用代行: {
    title: "SNS運用代行",
    body: "合同会社エクセンドでは、お客様のお悩み・目的・状態に合わせて、TikTokやInstagramといったSNSマーケットの事例を基に、適切なSNS運用や認知拡大、集客のご提案・ご支援をおこなっております。",
    image: "/images/27049676_s.webp",
  },
  "SNS広告運用/制作": {
    title: "SNS広告運用/制作",
    body: "合同会社エクセンドでは、お客様のお悩み・目的・状態に合わせて、主にMeta広告（TikTok・Instagram）でのマーケットの事例を基に、適切な動画広告運用のご提案・ご支援をおこなっております。",
    image: "/images/19156310_s.webp",
  },
  HP制作: {
    title: "HP制作",
    body: "合同会社エクセンドでは、お客様のお悩み・目的・状態に合わせて、過去のHP制作・運用事例を基に、適切なHP制作やプログラミングのご提案・ご支援を行っております。",
    image: "/images/47170035_s.webp",
  },
  "美容医療SNS支援「メディカルライアート」運営": {
    title: "美容医療SNS支援「メディカルライアート」運営",
    body: "合同会社エクセンドでは、美容医療に関わる企業様を対象に、株式会社ライアートプロモーションと連携して、お客様のお悩み・目的・状態に合わせた適切なYouTube運用や集客のご提案・ご支援を行っております。特に美容整形・美容外科領域・美容皮膚科領域に関しては業界屈指の事例とノウハウから、求められている成果にコミットした運用をおこないます。",
    image: "/images/15079236_s.webp",
  },
  MEO対策: {
    title: "MEO対策",
    body: "合同会社エクセンドでは、集客・採用を目的としている店舗様や企業様を対象に、売上アップ、店舗のファン化、来店効率化などを実現するGoogleマップ活用・店舗集客支援サービスをおこなっております。",
    image: "/images/94466168_s.webp",
  },
}

const Business = () => {
  return (
    <>
      <div className="mx-auto text-center lg:w-4/5">
        <PageTitle title="事業内容　-Business-" />
        <BusinessContents side="left" content={BUSINESS_CONTENTS["With Tube"]} />
        <BusinessContents side="right" content={BUSINESS_CONTENTS["動画制作/撮影"]} />
        <BusinessContents side="left" content={BUSINESS_CONTENTS["SNS運用代行"]} />
        <BusinessContents side="right" content={BUSINESS_CONTENTS["SNS広告運用/制作"]} />
        <BusinessContents side="left" content={BUSINESS_CONTENTS["HP制作"]} />
        <BusinessContents side="right" content={BUSINESS_CONTENTS["美容医療SNS支援「メディカルライアート」運営"]} />
        <BusinessContents side="left" content={BUSINESS_CONTENTS["MEO対策"]} />
      </div>
    </>
  )
}

export default Business
