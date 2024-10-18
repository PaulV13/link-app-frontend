
type props = {
    width: number
    fill: string
}

const DevlinksLogo = ({width, fill}: props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 24 24" >
    <title />
    <path
      fill={fill}
      d="M7 17A5 5 0 0 1 7 7h3a5 5 0 0 1 5 5 1 1 0 0 1-2 0 3 3 0 0 0-3-3H7a3 3 0 0 0 0 6 1 1 0 0 1 0 2Z"
    />
    <path
      fill={fill}
      d="M17 17h-3a5 5 0 0 1-5-5 1 1 0 0 1 2 0 3 3 0 0 0 3 3h3a3 3 0 0 0 0-6 1 1 0 0 1 0-2 5 5 0 0 1 0 10Z"
    />
  </svg>
)
export default DevlinksLogo