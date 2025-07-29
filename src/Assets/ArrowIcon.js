const ArrowIcon = ({ color = "#000", direction }) => {
  const getDirection = {
    downRight: 'rotate(90, 9, 9)'
  }
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill={{ color }}
      xmlns="http://www.w3.org/2000/svg"
      style={{ color }}
    >
      <g transform={getDirection[direction]}>
        <path d="M1.98071 2.01923H16.0192" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M1.98071 16.0192L15.9807 2.01923" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M15.9807 16.0192L15.9807 1.98077" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  )
};
export default ArrowIcon
