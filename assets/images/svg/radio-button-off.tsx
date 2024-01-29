import React from "react";
import Svg, { Path } from "react-native-svg";

function Icon(props: any) {
  const { size = 16, color = "#19DC74", ...rest } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <Path
        stroke={color}
        strokeWidth="2"
        d="M15 8A7 7 0 111 8a7 7 0 0114 0z"
      />
    </Svg>
  );
}

export default Icon;
