const ShadowEllipseForIphone = ({ className }: { className?: string }) => {
  return (
    <svg
      width="348"
      height="490"
      viewBox="0 0 348 490"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_341_4424)">
        <ellipse cx="257.5" cy="245" rx="118.5" ry="106" fill="#0A0705" />
      </g>
      <defs>
        <filter
          id="filter0_f_341_4424"
          x="0"
          y="0"
          width="515"
          height="490"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="69.5"
            result="effect1_foregroundBlur_341_4424"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ShadowEllipseForIphone;
