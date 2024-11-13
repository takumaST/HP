import React from "react"
import Header from "@/modules/conponents/organisms/Header"
import Footer from "@/modules/conponents/organisms/Footer"
import Media from "./Media"

const MediaHomePage: React.FC = async () => {
  return (
    <>
      <Header title="Media" />
      <Media />
      <Footer />
    </>
  )
}

export default MediaHomePage
