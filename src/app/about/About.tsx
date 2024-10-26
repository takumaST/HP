import PageTitle from "@/modules/conponents/PageTitle"
import Image from "next/image"

const About = () => {
  return (
    <>
      <div className="mx-auto w-4/5">
        <PageTitle title="会社概要　-About Us-" />
        {/* <Image src="/images/zouji_webp/画像15.webp" alt="back" width={1000} height={600}/> */}
        <div className="p-20 hidden relative lg:block">
          <div className="text-6xl min-h-1/2 font-bold text-center">
            <p>EXSEND　＝　『 Exceed × End 』</p>
          </div>
          <div className="py-8 text-3xl min-h-1/2 font-bold text-center">
            <p>限界を超え、「自分自身がやりたいこと」を全部できるようになる未来を創る</p>
          </div>
        </div>
        <div className="px-4 lg:px-8 py-4 lg:py-16">
          <div className="w-1/2 lg:w-1/6 lg:text-center py-4 lg:py-8 text-2xl lg:text-3xl lg:font-bold">ご挨拶</div>
          <div className="lg:py-4 lg:px-8 text-lg lg:text-xl">
            <p className="py-1 lg:py-2">合同会社エクセンドは、YouTubeやSNSを活用した動画マーケティング企業です。</p>
            <p className="py-1 lg:py-2">動画制作・YouTube運用・InstagramやTikTokなどのSNSマーケティング、</p>
            <p className="py-1 lg:py-2">SEOやMEO対策を踏まえたマーケティング支援を通して、</p>
            <p className="py-1 lg:py-2">お客様のニーズを実現します。</p>
          </div>
        </div>

        {/* mission/vision/value */}
        <div className="p-4 lg:p-8 bg-black text-white dark:invert flex flex-col">
          {/* mission */}
          <div className="p-4 lg:p-8">
            <div className="py-4">
              <div className="w-1/6 md:w-full py-2 my-4 pl-4 lg:pl-8 border-l-2 border-white">
                <div>01　ミッション</div>
                <div className="text-3xl font-bold">MISSON</div>
              </div>
              <div className="py-4 text-xl lg:text-4xl underline decoration-zinc-500 underline-offset-4 lg:no-underline">
                世の中に価値のあるコンテンツを広め、文化を創る。
              </div>
            </div>
            <div className="px-0 lg:px-8 text-lg">
              <p className="py-1">
                九州の福岡で生まれ育った我々エクセンドのメンバーは、上京し日本全国で活動するようになってから、
              </p>
              <p className="py-1">
                自分たちでは当たり前だと思っていた『九州・福岡の文化・コミュニティ』などの素晴らしい価値があまりにも知られていないことを知りました。
              </p>
              <p className="py-1">九州の観光地や食文化、歴史など他にはない素晴らしい価値を日本全国に広めるため、</p>
              <p className="py-1">
                我々エクセンドが、価値を創出する地域の人々とその価値を受け取る日本全国の人々を繋ぐハブとして、
              </p>
              <p className="py-1">
                動画マーケティングの知識・技術を通して、九州地方や福岡県の地域創生に貢献していきます。
              </p>
            </div>
          </div>
          {/* vision */}
          <div className="p-4 lg:p-8">
            <div className="py-4">
              <div className="w-1/6 md:w-full py-2 my-4 pl-4 lg:pl-8 border-l-2 border-white">
                <div>02　ビジョン</div>
                <div className="text-3xl font-bold">VISION</div>
              </div>
              <div className="py-4 text-xl lg:text-4xl underline decoration-zinc-500 underline-offset-4 lg:no-underline">
                “限界を超える組織”として、すべてのお客様、そして社会に貢献し続ける。
              </div>
            </div>
            <div className="px-0 lg:px-8 text-lg">
              <p className="py-1">
                社名の由来『Exceed ×
                End』であるように、我々はお客様や社会に価値提供するため、常に妥協せず全力で取り組み、
              </p>
              <p className="py-1">その取り組んだ先の未来で全員が幸せでいられる世界を目指し、そう在り続けます。</p>
            </div>
          </div>
          {/* value */}
          <div className="p-4 lg:p-8">
            <div className="py-4">
              <div className="w-1/6 md:w-full py-2 my-4 pl-4 lg:pl-8 border-l-2 border-white">
                <div>03　バリュー</div>
                <div className="text-3xl font-bold">VALUE</div>
              </div>
              <div className="py-4 text-xl lg:text-4xl underline decoration-zinc-500 underline-offset-4 lg:no-underline">
                爆速でぶち抜き、プロフェッショナルとして限界を超える。
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="w-1/2 lg:w-1/6 text-center py-4 text-2xl font-bold">役員紹介</div>
          <div className="flex flex-col lg:flex-row">
            <Image
              className="rounded-full p-4"
              src="/images/園田拓真_宣材写真.webp"
              alt="about"
              width={400}
              height={400}
            />
            <div className="lg:p-8">
              <div className="flex text-xl font-bold py-4">
                <div>代表　</div>
                <div className="px-4">園田 拓真</div>
              </div>
              <div className="text-lg py-4">
                エクセンドは、地元である福岡県・九州地方を動画マーケティングの力で盛り上げ、日本中にさらなる価値を創出し盛り上げたいという理念のもと設立しました。
                私たちが今まで培ってきた動画マーケティング、WEBマーケティングの知識・技術を武器に、お客様の求める成果を追求し続け、あらゆる限界を超える組織として日本中に価値を提供します。
                YouTubeやSNSに特化した運用や動画制作で、お客様の売上アップや認知拡大、業務コストカットによる負担削減に貢献します。
              </div>
              <div className="flex">
                <div className="rounded-lg bg-black h-10 w-10 flex justify-center items-center m-1">
                  <a className="" href="https://x.com/takumarke" target="_blank">
                    <Image className="" src="/publicLogos/x_logo.svg" alt="x" width={25} height={25} />
                  </a>
                </div>
                <div className="h-10 w-10 flex justify-center items-center m-1">
                  <a className="" href="https://x.com/takumarke" target="_blank">
                    <Image className="rounded-lg" src="/publicLogos/LI_in_logo.svg" alt="x" width={44} height={44} />
                  </a>
                </div>
                <div className="rounded-lg h-10 w-10 flex justify-center items-center m-1">
                  <a className="" href="https://www.facebook.com/profile.php?id=100089727375576" target="_blank">
                    <Image
                      className=""
                      src="/publicLogos/Facebook_blue_logo.svg"
                      alt="facebook"
                      width={44}
                      height={44}
                    />
                  </a>
                </div>
                <div className="rounded-lg h-10 w-10 flex justify-center items-center m-1">
                  <a
                    className=""
                    href="https://www.instagram.com/takumarke?igsh=N3hkY3d4dnBkNzRr&utm_source=qr"
                    target="_blank"
                  >
                    <Image className="" src="/publicLogos/Insta_logo.svg" alt="instagram" width={44} height={44} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="w-1/2 lg:w-1/6 text-center py-4 text-2xl font-bold">会社情報</div>
          <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
            <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <div>
                <div className="border-b border-gray-200 dark:border-gray-700 flex">
                  <div className="w-2/5 lg:w-1/3 px-2 lg:px-6 py-4 font-semibold dark:font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    会社名
                  </div>
                  <div className="w-3/5 lg:w-2/3 px-2 lg:px-6 py-4 bg-neutral-200 dark:bg-neutral-900">
                    合同会社エクセンド
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 flex">
                  <div className="w-2/5 lg:w-1/3 px-2 lg:px-6 py-4 font-semibold dark:font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800">
                    設立
                  </div>
                  <div className="w-3/5 lg:w-2/3 px-2 lg:px-6 py-4 bg-neutral-100 dark:bg-neutral-900">
                    2024年5月29日
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 flex">
                  <div className="w-2/5 lg:w-1/3 px-2 lg:px-6 py-4 font-semibold dark:font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    所在地
                  </div>
                  <div className="w-3/5 lg:w-2/3 px-2 lg:px-6 py-4 bg-neutral-200 dark:bg-neutral-900">
                    福岡県福岡市博多区 博多駅前1-23-2 ParkFront 博多駅前1丁目5F-B
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 flex">
                  <div className="w-2/5 lg:w-1/3 px-2 lg:px-6 py-4 font-semibold dark:font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800">
                    従業員数
                  </div>
                  <div className="w-3/5 lg:w-2/3 px-2 lg:px-6 py-4 bg-neutral-100 dark:bg-neutral-900">
                    15名（業務委託含む）
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 flex">
                  <div className="w-2/5 lg:w-1/3 px-2 lg:px-6 py-4 font-semibold dark:font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    電話番号
                  </div>
                  <div className="w-3/5 lg:w-2/3 px-2 lg:px-6 py-4 bg-neutral-200 dark:bg-neutral-900">
                    090-4487-5390（代表）
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 flex">
                  <div className="w-2/5 lg:w-1/3 px-2 lg:px-6 py-4 font-semibold dark:font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800">
                    メールアドレス
                  </div>
                  <div className="w-3/5 lg:w-2/3 px-2 lg:px-6 py-4 bg-neutral-100 dark:bg-neutral-900">
                    t-sonoda@exsend.co.jp
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 flex">
                  <div className="w-2/5 lg:w-1/3 px-2 lg:px-6 py-4 font-semibold dark:font-medium text-gray-900 whitespace-nowrap bg-gray-200 dark:text-white dark:bg-gray-800">
                    事業内容
                  </div>
                  <div className="w-3/5 lg:w-2/3 px-2 lg:px-6 py-4 bg-neutral-200 dark:bg-neutral-900">
                    <p>・YouTube運用 / 集客支援</p>
                    <p>・動画制作 / 撮影</p>
                    <p>・SNS運用代行</p>
                    <p>・SNS広告制作</p>
                    <p>・HP制作</p>
                    <p>・株式会社ライアートプロモーション福岡事業所の運営・管理</p>
                    <p>・美容医療SNS支援「メディカルライアート」運営</p>
                    <p>・MEO対策</p>
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 flex">
                  <div className="w-2/5 lg:w-1/3 px-2 lg:px-6 py-4 font-semibold dark:font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    代表
                  </div>
                  <div className="w-3/5 lg:w-2/3 px-2 lg:px-6 py-4 bg-neutral-100 dark:bg-neutral-900">園田拓真</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
