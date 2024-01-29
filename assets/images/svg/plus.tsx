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
      viewBox="0 0 32 32"
      {...rest}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="6"
        d="M16 29L16 3"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="6"
        d="M3 16L29 16"
      />
    </Svg>
  );
}

export default Icon;
