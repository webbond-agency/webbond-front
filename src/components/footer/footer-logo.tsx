const FooterLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 320 143"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="320"
        height="143"
        rx="12"
        fill="url(#paint0_linear_540_1786)"
      />
      <text
        x="160"
        y="74"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        style={{ mixBlendMode: 'overlay' }}
        fontFamily="Manrope, sans-serif"
        fontSize="40"
        fontWeight={600}
        letterSpacing="6"
      >
        WEBBOND
      </text>
      <defs>
        <linearGradient
          id="paint0_linear_540_1786"
          x1="160"
          y1="0"
          x2="62.9882"
          y2="134.152"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF2B1F" />
          <stop offset="1" stopColor="#680C0C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FooterLogo;
