type CVIconProps = {
  backgroundColor: string;
};

const CVIcon = ({ backgroundColor }: CVIconProps) => {
  return (
    <svg
      width="484"
      height="290"
      viewBox="0 0 484 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="c-cv-icon"
    >
      <path
        d="M0 8C0 3.58173 3.58172 0 8 0H435.008C436.938 0 438.802 0.697202 440.258 1.96316L481.249 37.6082C482.997 39.1276 484 41.3295 484 43.645V282C484 286.418 480.418 290 476 290H7.99999C3.58171 290 0 286.418 0 282V8Z"
        fill={backgroundColor}
      />
      <mask
        id="mask0_5_553"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="484"
        height="290"
      >
        <path
          d="M0 8C0 3.58173 3.58172 0 8 0H435.008C436.938 0 438.802 0.697202 440.258 1.96316L481.249 37.6082C482.997 39.1276 484 41.3295 484 43.645V282C484 286.418 480.418 290 476 290H7.99999C3.58171 290 0 286.418 0 282V8Z"
          fill={backgroundColor}
        />
      </mask>
      <g mask="url(#mask0_5_553)">
        <path d="M436 0V42H484" stroke="#FFBC11" strokeWidth="6" />
      </g>
      <circle cx="109" cy="91" r="49" stroke="#FFBC11" strokeWidth="10" />
      <circle cx="109" cy="77" r="13" stroke="#FFBC11" strokeWidth="8" />
      <mask
        id="mask1_5_553"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="60"
        y="42"
        width="98"
        height="98"
      >
        <circle cx="109" cy="91" r="49" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask1_5_553)">
        <circle cx="110" cy="130" r="28" stroke="#FFBC11" strokeWidth="8" />
      </g>
      <path
        d="M208 116H400"
        stroke="#FFBC11"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M218 184H238"
        stroke="#FFBC11"
        strokeWidth="32"
        strokeLinecap="round"
      />
      <path
        d="M218 228H238"
        stroke="#FFBC11"
        strokeWidth="32"
        strokeLinecap="round"
      />
      <path
        d="M294 184H314"
        stroke="#FFBC11"
        strokeWidth="32"
        strokeLinecap="round"
      />
      <path
        d="M294 228H314"
        stroke="#FFBC11"
        strokeWidth="32"
        strokeLinecap="round"
      />
      <path
        d="M370 184H390"
        stroke="#FFBC11"
        strokeWidth="32"
        strokeLinecap="round"
      />
      <path
        d="M370 228H390"
        stroke="#FFBC11"
        strokeWidth="32"
        strokeLinecap="round"
      />
      <path
        d="M60 174H158"
        stroke="#FFBC11"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M60 206H158"
        stroke="#FFBC11"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M60 238H158"
        stroke="#FFBC11"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CVIcon;
