const SvgBicycle = (props) => (
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
      d="M37.195 22.244a3.13 3.13 0 0 0 3.122-3.122A3.13 3.13 0 0 0 37.195 16a3.13 3.13 0 0 0-3.122 3.122 3.13 3.13 0 0 0 3.122 3.122M20.805 32.39c-4.37 0-7.805 3.434-7.805 7.805S16.434 48 20.805 48s7.805-3.434 7.805-7.805-3.434-7.805-7.805-7.805m0 13.268c-2.966 0-5.463-2.497-5.463-5.463s2.497-5.463 5.463-5.463 5.463 2.497 5.463 5.463-2.497 5.463-5.463 5.463m9.054-15.61 3.746-3.746 1.249 1.25c2.029 2.029 4.683 3.277 7.96 3.277v-3.122c-2.34 0-4.214-.936-5.619-2.341L34.23 22.4c-.78-.624-1.56-.937-2.497-.937s-1.717.313-2.186.937l-4.37 4.37c-.625.625-.937 1.406-.937 2.186 0 .937.312 1.717.937 2.186l4.995 4.37v7.805h3.122V33.64zm12.8 2.342c-4.371 0-7.805 3.434-7.805 7.805S38.288 48 42.658 48c4.371 0 7.805-3.434 7.805-7.805s-3.434-7.805-7.805-7.805m0 13.268c-2.966 0-5.464-2.497-5.464-5.463s2.498-5.463 5.463-5.463c2.966 0 5.464 2.497 5.464 5.463s-2.498 5.463-5.464 5.463"
    />
  </svg>
);

export default SvgBicycle;
