
type Props = {
  size: number
  stroke: string
}

function ArrowDownIcon({size, stroke}: Props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    strokeWidth={1.5}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6 9 6 6 6-6"
    />
  </svg>
  )
}

export default ArrowDownIcon