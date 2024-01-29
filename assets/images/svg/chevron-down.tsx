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
      viewBox="0 0 15 15"
      {...rest}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="3"
        d="M7.071 12.021L2.121 7.071"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="3"
        d="M12.021 7.071L7.071 12.021"
      />
    </Svg>
  );
}

export default Icon;
