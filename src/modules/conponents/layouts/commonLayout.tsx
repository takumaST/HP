const commonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen py-16 lg:py-0">{children}</div>
    </>
  )
}

export default commonLayout
