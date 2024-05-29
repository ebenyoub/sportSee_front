import { forwardRef } from "react";

const SvgCheeseburger = forwardRef((props, iconRef) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={19}
    fill="none"
    viewBox="0 0 18 20"
    {...props}
  >
    <path
      fill="#FD5181"
      d="M1.25 15c0 2.125 1.625 3.75 3.75 3.75h10c2.125 0 3.75-1.625 3.75-3.75zM18.75 12.5H1.25C.5 12.5 0 12 0 11.25S.5 10 1.25 10h17.5c.75 0 1.25.5 1.25 1.25s-.5 1.25-1.25 1.25"
    />
    <path
      ref={iconRef}
      fill="#FD5181"
      fillRule="evenodd"
      d="M11.25 0h-2.5c-4.125 0-7.5 3.375-7.5 7.5h17.5c0-4.125-3.375-7.5-7.5-7.5M7.5 5c-.75 0-1.25-.5-1.25-1.25S6.75 2.5 7.5 2.5s1.25.5 1.25 1.25S8.25 5 7.5 5m5 0c0 .75.5 1.25 1.25 1.25S15 5.75 15 5s-.5-1.25-1.25-1.25-1.25.5-1.25 1.25"
      clipRule="evenodd"
    />
  </svg>
));

SvgCheeseburger.displayName = "SvgCheeseburger"

export default SvgCheeseburger;
