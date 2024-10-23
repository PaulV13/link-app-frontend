
type Props = {
    width: number
    fill: string
}

const LinesIcon = ({width, fill} : Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} fill={fill}>
    <path d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z" />
  </svg>
)
export default LinesIcon