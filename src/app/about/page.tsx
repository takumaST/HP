import Footer from "@/modules/conponents/Footer"
import Header from "@/modules/conponents/Header"
import ContactFooter from "@/modules/conponents/ContactFooter"
import About from "./About"

const AboutPage = () => {
    const description = "合同会社エクセンドは、YouTubeやSNSを活用した動画マーケティング企業です。動画制作、YouTube運用、InstagramやTikTokなどのSNSマーケティング、SEOやMEO対策を踏まえたマーケティング支援を通して、お客様のニーズを実現します。"
    return (
    <>
        <meta property="description" content={description}/>
        <Header title="About Us" />
        <main className="min-h-screen">
            <About />
        </main>
        <ContactFooter />
        <Footer />
    </>
    )
}

export default AboutPage