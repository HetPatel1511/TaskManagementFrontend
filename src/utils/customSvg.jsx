import React from "react";

export const PlaySVG = () => {
  return (
    <svg width="120" height="120" viewBox="0 0 256 256" fill="#FFFFFF26">
      <defs></defs>
      <g
        // style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <circle
          cx="45"
          cy="45"
          r="45"
          //   style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,52,52); fill-rule: nonzero; opacity: 1;"
          transform="  matrix(1 0 0 1 0 0) "
        />
        <path
          d="M 37.288 65.53 l 24.754 -18.926 c 1.057 -0.808 1.057 -2.4 0 -3.208 L 37.288 24.47 c -1.329 -1.016 -3.246 -0.068 -3.246 1.604 v 37.852 C 34.042 65.598 35.959 66.546 37.288 65.53 z"
          //   style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
          //   transform=" matrix(1 0 0 1 0 0) "
          //   stroke-linecap="round"
          fill="white"
        />
      </g>
    </svg>
  );
};

export const PauseSVG = () => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="120" height="120" rx="60" fill="white" fillOpacity="0.15" />
      <rect x="46.5996" y="42" width="10" height="36" fill="white" />
      <rect x="63.3994" y="42" width="10" height="36" fill="white" />
    </svg>
  );
};

export const DownArrowSVG = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      // fill="#fff"
      // height="800px"
      // width="800px"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 512.011 512.011"
      {...props}
      // xml:space="preserve"
    >
      <g>
        <g>
          <path d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0    s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667    C514.096,145.416,514.096,131.933,505.755,123.592z" />
        </g>
      </g>
    </svg>
  );
};
