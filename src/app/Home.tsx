import ContactFooter from "@/modules/conponents/ContactFooter"
import Footer from "@/modules/conponents/organisms/Footer"
import Image from "next/image"
import { client } from "../../libs/client"
import { Content } from "@/modules/type"
import { parseHTML, tokyoDate } from "@/modules/function"
import Header from "@/modules/conponents/organisms/Header"
import React from "react"

const Home = async () => {
  const data = await client.get({
    endpoint: "news",
  })

  const parsedContents: Content[] = data.contents.map((content: Content) => {
    const elements = parseHTML(content.content)
    return {
      ...content,
      parsedElements: elements,
    }
  })

  return (
    <>
      <Header />
      <main className="flex min-h-lvh flex-col items-center justify-between py-16">
        <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
          <a
            href="./contact"
            className="fixed left-0 top-0 flex w-full justify-center border-b border-sky-950 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          >
            お問い合わせ / Contact Us
          </a>
        </div>

        {/**
         * ロゴ
         */}
        <div className="relative my-12 flex w-full place-items-center justify-center">
          {/* <Image
            className="absolute z-[-1] inset-0 h-full w-full object-cover dark:drop-shadow-[0_0_0.3rem_#ffffff70] hidden lg:block lg:dark:block"
            src="/images/47170035_s.webp"
            alt="Exsend Logo"
            width={180}
            height={37}
            priority
          /> */}
          <Image
            className="absolute z-[-1] hidden size-full -translate-y-4 translate-x-20 object-cover drop-shadow-[0_0_0.2rem_#000000] dark:hidden lg:block"
            src="/images/home2.png"
            alt="home"
            width={180}
            height={37}
            priority
            // /image_fx-office-1.jpg
          />
          <div className="absolute inset-0 z-[-3] size-full -translate-x-40 translate-y-8 bg-sky-900"></div>
          <div className="relative z-[-1] flex min-h-96 place-items-center">
            <div className="absolute h-48 w-44 rounded-full bg-white blur-lg"></div>
            {/* <div className="relative z-[-1] min-h-64 flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"> */}
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/monoLogo.svg"
              alt="Exsend Logo"
              width={180}
              height={37}
              priority
            />
          </div>
        </div>

        {/**
         * お知らせ
         */}
        <div className="my-4 w-5/6 lg:w-2/3">
          <div className="relative">
            <div className="absolute text-6xl font-extrabold italic opacity-30">News</div>
            <div className="m-4 pt-12 text-3xl font-bold">お知らせ</div>
          </div>
          <div>
            {parsedContents.map((content: Content, idx: number) => {
              const date = tokyoDate(content.revisedAt)

              return (
                <React.Fragment key={content.id}>
                  {idx < 3 ? (
                    <div className="min-h-16">
                      <div className="w-full border-b border-zinc-500 hover:text-sky-800">
                        <div className="flex h-12 items-center dark:font-normal">
                          <p className="px-6 font-bold text-sky-900">{date}</p>
                          <a className="font-semibold" href={`/news/${content.id}`}>
                            <div>{content.title}</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </React.Fragment>
              )
            })}
          </div>
        </div>

        {/**
         * company
         */}
        <div className="my-4 w-5/6 lg:w-2/3">
          <div className="relative">
            <div className="absolute text-6xl font-extrabold italic opacity-30">About</div>
            <div className="m-4 pt-12 text-3xl font-bold">会社概要</div>
          </div>
          <div className="m-4 flex flex-col items-center justify-center pt-12 text-2xl font-bold lg:text-5xl lg:font-extrabold">
            <div className="italic text-gray-600 lg:m-8">
              <p className="my-1 lg:ml-0">
                世の中に<span className="text-3xl font-bold text-black lg:text-6xl">価値のある</span>
              </p>
              <p className="my-1 lg:ml-48">コンテンツを広め、</p>
              <p className="my-1 lg:ml-96">
                <span className="text-3xl font-bold text-black lg:text-6xl">文化</span>を創る。
              </p>
            </div>
          </div>
        </div>

        {/**
         * case
         * 差し色追加
         */}
        <div className="my-4 w-5/6 lg:w-2/3">
          {/* <div className="absolute translate-x-1/3 z-[-1] h-full w-full bg-sky-700"></div> */}
          <div className="mx-auto w-full">
            <div className="relative">
              <div className="absolute text-6xl font-extrabold italic opacity-30">Case</div>
              <div className="m-4 pt-12 text-3xl font-bold">導入事例</div>
            </div>
          </div>

          <div className="z-[-1] flex h-96 w-screen -translate-x-96 bg-sky-900">
            <div className="mx-auto flex w-4/5">
              <div className="m-8 flex w-1/5 items-center justify-center bg-white">
                <div className="w-5/6 object-cover">
                  <Image src="/images/logo/footer_logo.png" alt="" width={280} height={180} />
                </div>
              </div>

              <div className="m-8 flex w-1/5 items-center justify-center bg-white">
                <div className="w-5/6 object-cover">
                  <Image src="/images/logo/LIART_logo.png" alt="" width={280} height={180} />
                </div>
              </div>

              <div className="m-8 flex w-1/5 items-center justify-center bg-white">
                <div className="w-5/6 object-cover">
                  <Image src="/images/logo/Brave_logo.png" alt="" width={280} height={180} />
                </div>
              </div>

              <div className="m-8 flex w-1/5 items-center justify-center bg-white">
                <div className="w-5/6 object-cover">
                  <Image src="/images/logo/jibanda-01.png" alt="" width={280} height={180} />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="h-96"></div> */}
        </div>

        {/**
         * service
         */}
        <div className="my-4 w-5/6 lg:w-2/3">
          <div className="relative">
            <div className="absolute text-6xl font-extrabold italic opacity-30">Service</div>
            <div className="m-4 pt-12 text-3xl font-bold">サービス</div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="m-4 bg-white text-center hover:drop-shadow-lg">
                {/** Youtube */}
                <div className="m-4 mx-auto w-5/6 lg:w-3/4">
                  {/* ロゴ */}
                  <div className="flex h-48 items-center justify-center">
                    <div className="m-1 flex size-40 items-center justify-center rounded-full bg-sky-500">
                      <Image src="/images/businessIcons/YoutubeIcon.svg" alt="YouTube Icon" width={100} height={100} />
                    </div>
                  </div>
                  {/* サービス名 */}
                  <div className="flex h-16 items-center justify-center font-bold lg:h-24 lg:text-2xl">
                    Youtube運用代行
                  </div>
                  {/* サービス概要 */}
                  <div className="h-36 text-center">
                    <p>お客様の悩み・目的・状態に合わせて、</p>
                    <p>YouTube、TikTokやInstagramといったSNS、</p>
                    <p>Meta広告におけるマーケットの事例を基に、</p>
                    <p>適切なYouTube運用や集客のサポートを行います。</p>
                  </div>
                </div>
              </div>

              <div className="m-4 bg-white text-center hover:drop-shadow-lg">
                <div className="m-4 mx-auto w-5/6 lg:w-3/4">
                  {/* ロゴ */}
                  <div className="flex h-48 items-center justify-center">
                    <div className="m-1 flex size-40 items-center justify-center rounded-full bg-sky-500">
                      <Image src="/images/businessIcons/MovieIcon.svg" alt="Movie Icon" width={100} height={100} />
                    </div>
                  </div>
                  {/* サービス名 */}
                  <div className="flex h-16 items-center justify-center font-bold lg:h-24 lg:text-2xl">
                    動画制作/撮影
                  </div>
                  {/* サービス概要 */}
                  <div className="h-36 text-center">
                    <p>お客様の悩み・目的・状態に合わせて、</p>
                    <p>動画の撮影・撮影サポート、</p>
                    <p>そして動画・映像の制作といった</p>
                    <p>クリエイティブ業務を請け負います。</p>
                  </div>
                </div>
              </div>

              <div className="m-4 bg-white text-center hover:drop-shadow-lg">
                <div className="m-4 mx-auto w-5/6 lg:w-3/4">
                  {/*ロゴ*/}
                  <div className="flex h-48 items-center justify-center">
                    <div className="m-1 flex h-40 w-40 items-center justify-center rounded-full bg-sky-500">
                      <Image
                        className=""
                        src="/images/businessIcons/MarketingIcon.svg"
                        alt=""
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                  {/*サービス名*/}
                  <div className="flex h-16 items-center justify-center font-bold lg:h-24 lg:text-2xl">
                    SNS広告運用/制作
                  </div>
                  {/*サービス概要*/}
                  <div className="h-36 text-center">
                    <p>お客様の悩み・目的・状態に合わせて、</p>
                    <p>主にMeta広告（TikTok・Instagram）</p>
                    <p>でのマーケットの事例を基に、</p>
                    <p>適切な動画広告運用のご提案・ご支援を</p>
                    <p>行っております。</p>
                  </div>
                </div>
              </div>
              <div className="m-4 bg-white text-center hover:drop-shadow-lg">
                <div className="m-4 mx-auto w-5/6 lg:w-3/4">
                  {/*ロゴ*/}
                  <div className="flex h-48 items-center justify-center">
                    <div className="m-1 flex size-40 items-center justify-center rounded-full bg-sky-500">
                      <Image className="" src="/images/businessIcons/MedicalIcon.svg" alt="" width={100} height={100} />
                    </div>
                  </div>
                  {/*サービス名*/}
                  <div className="flex h-12 items-center justify-center font-bold lg:h-24 lg:text-xl">
                    美容医療SNS支援メディカルライアート
                  </div>
                  {/*サービス概要*/}
                  <div className="h-36 text-center text-sm">
                    <p>美容医療に関わる企業様を対象に、</p>
                    <p>株式会社ライアートプロモーションと連携して、</p>
                    <p>YouTube運用や集客のサポートを行っております。</p>
                    <p>特に美容事業に関しては</p>
                    <p>業界屈指の事例とノウハウから、</p>
                    <p>求められている成果にコミットした運用を行います。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/**
         *
         */}
        {/* <div className="w-2/3">
      <div className="text-2xl font-bold m-4">お役立ち情報</div>
    </div>
     */}

        {/**
         * 制作実績
         */}
        {/* <div className="w-2/3">
      <div className="text-2xl font-bold m-4">制作実績</div>
      <div>
      {parsedContents.map((content:Content) => {
        const date = tokyoDate(content.revisedAt);
        return (
        <div className="min-h-16" key={content.id}>
            <div className="w-full border-b border-zinc-500">
                <div className="flex dark:font-normal">
                    <p className="px-6">{date}</p>
                    <a className="font-semibold" href={`./${content.id}`}><div>{content.title}</div></a>    
                </div>
            </div>
        </div>
        )
      })}
      </div>
    </div> */}

        <div className="m-8 mb-32 grid lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-4 lg:text-center">
          <a
            href="./about"
            className="group mx-1 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-sky-600 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 flex text-2xl font-semibold">
              <div>
                About Us <div className="text-xs">会社概要</div>
              </div>
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &nbsp;&nbsp;&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              合同会社エクセンドは、SNSネイティブ世代のメンバーによる最先端の動画マーケティングを、お客様にご提供・ご提案させていただく企業です。YouTube運用やSNS集客支援、TikTok広告やMEO対策を踏まえたマーケティング支援を行います。
            </p>
          </a>

          <a
            href="./business"
            className="group mx-1 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-sky-600 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 flex text-2xl font-semibold">
              <div>
                Business <div className="text-xs">事業内容</div>
              </div>
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &nbsp;&nbsp;&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              弊社では、企業様の集客・採用・認知拡大における悩み解決や目的達成のため、動画マーケティングを活用したご提案やご支援を行っております。
            </p>
          </a>

          <a
            href="./media"
            className="group mx-1 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-sky-600 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 flex text-2xl font-semibold">
              <div>
                Media <div className="text-xs">コラム</div>
              </div>
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &nbsp;&nbsp;&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              弊社のコラムページです。弊社の事例や仮説検証を基に体系化したYouTube運用ノウハウを随時発信していきます。YouTubeでの集客や運用、動画マーケティングの活用を検討されている方、既に運用している方はぜひご覧ください。
            </p>
          </a>

          <a
            href="./news"
            className="group mx-1 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-sky-600 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 flex text-2xl font-semibold">
              <div>
                News <div className="text-xs">最新情報</div>
              </div>
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &nbsp;&nbsp;&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              エクセンドからの最新ニュースをお届けします。弊社の最新情報や活動報告にご興味のある方は、ぜひニュースページをご覧ください。最新情報をお見逃しなく。
            </p>
          </a>
        </div>
      </main>
      <ContactFooter />
      <Footer />
    </>
  )
}

export default Home
