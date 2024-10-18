
type props = {
    stroke: string
    width: number
}

const ProfileIcon = ({width = 24, stroke} : props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    width={width}
  >
    <g
      fill="none"
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <circle cx={16} cy={16} r={15} />
      <path d="M26 27c0-5.523-4.477-10-10-10S6 21.477 6 27" />
      <circle cx={16} cy={11} r={6} />
    </g>
  </svg>
)
export default ProfileIcon