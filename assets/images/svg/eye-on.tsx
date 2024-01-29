import React from "react";
import Svg, { Path } from "react-native-svg";

function Icon(props: any) {
  const { size = 16, color = "#000", ...rest } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 14"
      {...rest}
    >
      <Path
        fill={color}
        d="M15.359 4.923A8.87 8.87 0 007.999.878 8.87 8.87 0 00.64 4.923a3.686 3.686 0 000 4.15A8.87 8.87 0 008 13.123a8.87 8.87 0 007.36-4.045 3.686 3.686 0 000-4.155zm-1.657 3.015A6.8 6.8 0 018 11.112a6.801 6.801 0 01-5.703-3.174 1.667 1.667 0 010-1.876A6.801 6.801 0 018 2.888a6.801 6.801 0 015.703 3.174c.386.566.386 1.31 0 1.876z"
      />
      <Path
        fill={color}
        d="M8 9.68a2.68 2.68 0 100-5.36 2.68 2.68 0 000 5.36z"
      />
    </Svg>
  );
}

export default Icon;
