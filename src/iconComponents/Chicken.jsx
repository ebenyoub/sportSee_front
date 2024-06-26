import { forwardRef } from "react";

const SvgChicken = forwardRef((props, iconRef) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    {...props}
  >
    <path
      ref={iconRef}
      fill="#4AB8FF"
      d="M18.235 2.47c-.353-.352-.823-.588-1.176-.588-.118-.47-.236-.823-.588-1.176-.824-.824-2.236-.824-3.06 0-.705.706-.823 1.882-.234 2.706l-2.589 2.47-1.294-1.294-2.588 2.588c-.235-.117-.588-.117-.824-.117C2.588 7.059 0 9.647 0 12.94s2.588 5.882 5.882 5.882 5.883-2.588 5.883-5.882c0-.235 0-.588-.118-.823l2.588-2.589-1.294-1.294 2.47-2.47c.824.588 2 .47 2.707-.236a2.1 2.1 0 0 0 .117-3.058"
    />
  </svg>
));

SvgChicken.displayName = "SvgChicken"

export default SvgChicken;
