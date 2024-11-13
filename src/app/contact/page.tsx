import React from "react"
import ContactForm from "@/modules/conponents/ContactForm"
import CommonHead from "@/modules/conponents/CommonHead"
import "./page.css"
import PageTitle from "@/modules/conponents/PageTitle"
import Header from "@/modules/conponents/organisms/Header"

const TITLE = "お問い合わせ"
const DESCRIPTION =
  "動画制作、YouTube運用、InstagramやTikTokなどのSNSマーケティング、SEOやMEO対策を踏まえたマーケティング支援についてのご相談は、お気軽にこちらのページから合同会社エクセンドまでお問い合わせください。"

const Contact: React.FC = async () => {
  return (
    <>
      <CommonHead title={TITLE} description={DESCRIPTION} />
      <Header />
      <main className="min-h-screen">
        <PageTitle title={TITLE} />
        <ContactForm />
      </main>
    </>
  )
}

export default Contact
