import Image from "next/image"

const ContactFooter = () => {
    return (
    <>
        <div className="h-32 w-auto bg-black text-white flex items-center justify-center">
            <div className="h-1/2 border border-white rounded-lg w-1/2 lg:w-1/3"><a className="h-full w-full flex items-center justify-center text-center" href="/contact">お問い合わせはこちら</a></div>
        </div>

        {/* <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
            <Image src={`/images/kira938.webp`} alt="back" layout={`fill`} objectFit={`cover`} width={1920} height={1080} />
        </div> */}
    </>
    )
}

export default ContactFooter