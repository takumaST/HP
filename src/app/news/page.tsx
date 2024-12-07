import React from "react"
import { client } from "../../../libs/client"
import { parseHTML, tokyoDate } from "@/modules/function"
import Header from "@/modules/conponents/organisms/Header"
import Footer from "@/modules/conponents/organisms/Footer"
import PageTitle from "@/modules/conponents/PageTitle"
import Image from "next/image"
import { Content } from "@/modules/type"
import NewsPage from "./News"

const News: React.FC = () => {
  return (
    <>
      <Header title="News" />
      <NewsPage />
      <Footer />
    </>
  )
}

export default News
