interface iPageTitleProps {
    title: string
}

const PageTitle:React.FC<iPageTitleProps> = ({ title }) => {
    return (
        <div className="h-16 text-2xl lg:text-3xl font-bold text-center p-4">{title}</div>
    )
}

export default PageTitle