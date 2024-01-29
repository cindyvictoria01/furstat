import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function Icon(props: any) {
  const { size = 64, color = "#000", ...rest } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 64 70"
      {...rest}
    >
      <Rect
        width="60.5"
        height="41.5"
        x="1.75"
        y="26.75"
        stroke={color}
        strokeWidth="3.5"
        rx="4.25"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.5"
        d="M4.003 28.09l25.282 25.63a4 4 0 005.657.038l25.629-25.282M43 48l18.385 18.385M3 66.385L21.385 48"
      ></Path>
    </Svg>
  );
}

export default Icon;
