const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen">
            <div className="mx-auto w-4/5 lg:w-1/2 py-12">
                <div className="text-center py-8 text-3xl font-bold">個人情報保護方針について</div>
                <div className="py-2 text-lg">
                    お客様より個人情報をお預かりするということは、お客様の貴重な財産をお預かりすることであると考えております。 このような認識に基づいて当社では、以下のガイドラインに従い、お客様よりお預かりした個人情報の適切な管理に努めてまいります。
                </div>

                {/* 1. 個人情報の取得 */}
                <div className="py-4">
                    <div className="py-4 font-bold text-xl">個人情報の取得</div>
                    <div className="text-lg">
                        当WEBサイトでは、商品に関するお問い合わせ、その他サービスの提供にお客様の個人情報が必要な場合、お客様から氏名、住所、電話番号、メールアドレス等の個人情報を提供していただくことがあります。
                    </div>
                </div>

                {/* 2. 個人情報の利用目的*/}
                <div className="py-4">
                    <div className="py-4 font-bold text-xl">個人情報の利用目的</div>
                    <div className="text-lg">お客様から提供していただいた個人情報を利用する場合は、その都度、利用目的を明示し、その利用目的の範囲内で利用します。
                        <br />
                        また、お客様の同意を得ずに、明示した利用目的以外の目的で提供いただいた個人情報を利用することはありません。
                    </div>
                </div>

                {/* 3. 個人情報の提供 */}
                <div className="py-4">
                    <div className="py-4 font-bold text-xl">個人情報の提供</div>
                    <div className="text-lg">
                        お客様から提供していただいた個人情報は、次の場合を除いて、第三者に提供することはありません。また、第三者に提供する場合であっても、第三者と個人情報保護に関する取り決めを行い、個人情報保護に万全を期すよう努めます。
                        <br />
                        イ) お客様の同意がある場合
                        <br />
                        ロ) システムの維持・管理に関わる業務委託先
                        <br />
                        ハ) 法令に基づき要請があった場合 個人情報の管理・保護 当社は個人情報の正確性を保ち、これを安全に管理します。
                        <br />
                        また、個人情報の紛失、破壊、改ざん及び漏えいなどを防止するため、不正アクセス、コンピュータウィルス等に対する適切な情報セキュリティ対策を講じます。
                    </div>
                </div>

                {/* 4. 社員教育の強化*/}
                <div className="py-4">
                    <div className="py-4 font-bold text-xl">社員教育の強化</div>
                    <div className="text-lg">
                        当社は、個人情報に係わる全員が個人情報保護に関して十分な知識を持って業務を遂行出来るように、全従業員に対して個人情報保護に関する教育の強化・徹底を図ります。
                    </div>
                </div>

                {/* 5. 法令・規範の遵守*/}
                <div className="py-4">
                    <div className="py-4 font-bold text-xl">法令・規範の遵守</div>
                    <div className="text-lg">
                        当社は、個人情報の取扱いにおいて「個人情報の保護に関する法律」（平成17年4月1日施行）、並びに関連するその他法律、ガイドライン及び規範を遵守します。
                    </div>
                </div>

                {/* 6. Cookieの利用*/}
                <div className="py-4">
                    <div className="py-4 font-bold text-xl">Cookieの利用</div>
                    <div className="text-lg">
                        本ウェブサイトでは、より適切なサービス・コンテンツをお客様にご提供するためにCookieを利用しております。お客様のブラウザの設定により、事前にクッキー使用サイトであることを表示したり、受け取りを拒否することができます。お客様がクッキーを使用しない設定としている場合、当ウェブサイトで使用できる機能については制限される可能性がありますのでご了承ください。
                        <br />
                        ブラウザの設定により、Cookieの機能を無効にすることができますが、その結果本ウェブサイトのサービスの一部がご利用いただけなくなることがあります。
                    </div>
                </div>

                {/* 7. プライバシーポリシーの改訂*/}
                <div className="py-4">
                    <div className="py-4 font-bold text-xl">プライバシーポリシーの改訂</div>
                    <div className="text-lg">
                        本プライバシーポリシーに重要な変更がある場合には、本ウェブサイト上で告知いたします。その他の変更については、最新の情報を本ウェブサイト上で随時ご確認ください。確認をされていなかったことに起因するトラブルに関しては、当社は一切責任を負いかねますので予めご了承ください。
                    </div>
                </div>

                {/* 8. 開示・訂正・利用停止等への対応*/}
                <div className="py-4">
                    <div className="py-4 font-bold text-xl">開示・訂正・利用停止等への対応</div>
                    <div className="text-lg">
                        お客様から当社へご提供頂きました個人情報につきましては、お客様ご本人により開示・訂正・利用停止等のお申し出がありました場合、当社は、遅滞なく対応いたします。
                    </div>
                </div>

                {/* 9. お問い合わせ*/}
                <div className="py-4">
                    <div className="py-4 font-bold text-xl">お問い合わせ</div>
                    <div className="text-lg">
                        当社における個人情報保護に関してご質問・ご意見がございましたら、お問い合わせのページよりご連絡お願いいたします。
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy