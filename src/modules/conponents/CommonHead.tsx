import Head from "next/head"

interface commonHeadProps {
    title: string;
    description: string;
}

const CommonHead:React.FC<commonHeadProps> = ({
    title,
    description,
}) => {
    return (
    <>
    <Head>
        <meta property="title">{title}</meta>
        <meta property="description">{description}</meta>
    </Head>
    </>
    )
}

export default CommonHead