import React from "react";
import Svg, { Circle } from "react-native-svg";

function Icon(props: any) {
  const { size = 16, color = "#000", ...rest } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 4 18"
      {...rest}
    >
      <Circle cx="2" cy="2" r="2" fill={color} />
      <Circle cx="2" cy="16" r="2" fill={color} />
      <Circle cx="2" cy="9" r="2" fill={color} />
    </Svg>
  );
}

export default Icon;
