import { forwardRef } from "react";

const SvgEnergy = forwardRef((props, iconRef) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 20"
    {...props}
  >
    <path
      ref={iconRef}
      fill="#FF0000"
      d="M10.905 7.866S11.838 2.381 8.032 0A6.71 6.71 0 0 1 5.5 4.859C3.875 6.287.819 9.5.851 12.925A7.86 7.86 0 0 0 5.165 20a4.98 4.98 0 0 1 1.742-3.444 4.07 4.07 0 0 0 1.558-2.731 7.32 7.32 0 0 1 3.875 6.101v.017a7.35 7.35 0 0 0 4.285-6.383c.27-3.218-1.492-7.592-3.056-9.022a8.5 8.5 0 0 1-2.664 3.328"
    />
  </svg>
));

SvgEnergy.displayName = "SvgEnergy"

export default SvgEnergy;
