interface iErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<iErrorMessageProps> = ({ message }) => {
  return (
    <>
      <div className="text-red-600">{message}</div>
    </>
  )
}

export default ErrorMessage
