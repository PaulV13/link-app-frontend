
type Props = {
  size: number
  stroke: string
}

function ArrowUpIcon({size, stroke}: Props) {
  return (
    <svg
    width={size}
    height={size}
    fill="none"
    strokeWidth={1.5}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6 15 6-6 6 6"
    />
  </svg>
  )
}

export default ArrowUpIcon