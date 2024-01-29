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
      <G fill={color} clipPath="url(#clip0_951_755)">
        <Path d="M29.333 5.333h-6.666V2.667A2.667 2.667 0 0020 0h-8a2.667 2.667 0 00-2.667 2.667v2.666H2.667V8h2.666v20a4 4 0 004 4h13.334a4 4 0 004-4V8h2.666V5.333zM12 2.667h8v2.666h-8V2.667zM24 28a1.333 1.333 0 01-1.333 1.333H9.333A1.333 1.333 0 018 28V8h16v20z" />
        <Path d="M14.667 13.333H12V24h2.667V13.333zM20 13.333h-2.667V24H20V13.333z" />
      </G>
      <Defs>
        <ClipPath id="clip0_951_755">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
