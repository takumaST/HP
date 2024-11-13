import Header from "@/modules/conponents/organisms/Header"
import Test from "./Test"
import Footer from "@/modules/conponents/organisms/Footer"
import CommonLayout from "@/modules/conponents/layouts/commonLayout"

export default function TestPage() {
  return (
    <>
      <Header />
      <CommonLayout>
        <Test />
      </CommonLayout>
      <Footer />
    </>
  )
}