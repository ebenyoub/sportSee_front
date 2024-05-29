const SvgWeight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <rect width={64} height={64} fill="#fff" rx={6} />
    <path
      fill="#FF0101"
      d="M45.712 36.576 48 34.288 45.712 32 40 37.712 26.288 24 32 18.288 29.712 16l-2.288 2.288L25.136 16l-3.424 3.424-2.288-2.288-2.288 2.288 2.288 2.288L16 25.136l2.288 2.288L16 29.712 18.288 32 24 26.288 37.712 40 32 45.712 34.288 48l2.288-2.288L38.864 48l3.424-3.424 2.288 2.288 2.288-2.288-2.288-2.288L48 38.864z"
    />
  </svg>
);
export default SvgWeight;