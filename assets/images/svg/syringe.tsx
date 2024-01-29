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
      <G clipPath="url(#clip0_941_432)">
        <Path
          fill={color}
          d="M31.61 7.057L24.942.391a1.333 1.333 0 00-1.886 1.885l2.391 2.39-1.981 1.978a6.667 6.667 0 00-8.642.641l-8.092 8.096A9.273 9.273 0 004 21.98v4.133L.39 29.724a1.333 1.333 0 101.886 1.885L5.886 28h4.133a9.27 9.27 0 006.598-2.733l8.096-8.096a6.657 6.657 0 00.643-8.638l1.977-1.981 2.391 2.39a1.333 1.333 0 001.885-1.885zm-8.78 8.228l-8.097 8.096a6.622 6.622 0 01-4.713 1.952H6.667V21.98c0-.437.042-.873.126-1.301l1.6 1.6a1.334 1.334 0 101.886-1.886l-2.322-2.321c.201-.284.424-.551.667-.8L10 15.885l2.39 2.391a1.333 1.333 0 001.886-1.885L11.886 14 14 11.885l2.39 2.391a1.333 1.333 0 001.886-1.885L15.886 10l.829-.83a4.097 4.097 0 015.656 0l.458.46a4 4 0 010 5.655z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_941_432">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
