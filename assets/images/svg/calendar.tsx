import React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

function Icon(props: any) {
  const { size = 32, color = "#000", ...rest } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
      {...rest}
    >
      <G clipPath="url(#clip0_948_457)">
        <Path
          fill={color}
          d="M25.333 2.667H24V1.333a1.333 1.333 0 10-2.667 0v1.334H10.667V1.333a1.333 1.333 0 10-2.667 0v1.334H6.667A6.674 6.674 0 000 9.333v16A6.674 6.674 0 006.667 32h18.666A6.674 6.674 0 0032 25.333v-16a6.674 6.674 0 00-6.667-6.666zM6.667 5.333h18.666c2.206 0 4 1.795 4 4v1.334H2.667V9.333c0-2.205 1.794-4 4-4zm18.666 24H6.667c-2.206 0-4-1.794-4-4v-12h26.666v12c0 2.206-1.794 4-4 4zm-1.557-11.797c.512.53.496 1.375-.033 1.885l-6.32 6.091a3.962 3.962 0 01-2.811 1.155 3.97 3.97 0 01-2.828-1.172l-3.003-2.79a1.334 1.334 0 011.815-1.953l3.037 2.823c.578.573 1.418.536 1.919.034l6.339-6.109a1.334 1.334 0 011.885.035v.001z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_948_457">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
