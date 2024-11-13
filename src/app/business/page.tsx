import Footer from "@/modules/conponents/organisms/Footer"
import Header from "@/modules/conponents/organisms/Header"
import Business from "./Business"
import ContactFooter from "@/modules/conponents/ContactFooter"

const BusinessPage = () => {
  const description =
    "合同会社エクセンドは、YouTubeやSNSを活用した動画マーケティング企業です。動画制作、YouTube運用、InstagramやTikTokなどのSNSマーケティング、SEOやMEO対策を踏まえたマーケティング支援を通して、お客様のニーズを実現します。"
  return (
    <>
      <meta property="description" content={description} />
      <Header title="Business" />
      <main>
        <Business />
      </main>
      <ContactFooter />
      <Footer />
    </>
  )
}

export default BusinessPage
