import "./CustomButton.css"

type Props = {
    className: string
    type: "submit" | "button"
    title: string
    onHandleClick: <T>(value: T) => void
}

function CustomButton({className, type, title, onHandleClick}: Props) {
  return (
    <button type={type} className={className} onClick={onHandleClick}>{title}</button>
  )
}

export default CustomButton