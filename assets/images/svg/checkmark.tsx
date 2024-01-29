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
      viewBox="0 0 11 10"
      {...rest}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
        d="M3.828 8.485l5.657-5.657M1 5.657l2.828 2.828"
      />
    </Svg>
  );
}

export default Icon;
