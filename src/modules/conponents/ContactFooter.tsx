import Image from "next/image"

const ContactFooter = () => {
  return (
    <>
      <div className="flex h-32 w-auto items-center justify-center bg-black text-white">
        <div className="size-1/2 rounded-lg border border-white lg:w-1/3">
          <a className="flex size-full items-center justify-center text-center" href="/contact">
            お問い合わせはこちら
          </a>
        </div>
      </div>

      {/* <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
            <Image src={`/images/kira938.webp`} alt="back" layout={`fill`} objectFit={`cover`} width={1920} height={1080} />
        </div> */}
    </>
  )
}

export default ContactFooter
