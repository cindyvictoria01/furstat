import React from "react";
import Svg, { Path } from "react-native-svg";

function Icon(props: any) {
  const { size = 32, color = "#000", ...rest } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 19 16"
      {...rest}
    >
      <Path
        fill={color}
        d="M17.333 6.667H4L8.387 2.28A1.333 1.333 0 106.507.387L.787 6.12A2.667 2.667 0 000 8c.006.701.29 1.372.787 1.867l5.72 5.733a1.334 1.334 0 101.88-1.893L4 9.333h13.333a1.333 1.333 0 100-2.666z"
      />
    </Svg>
  );
}

export default Icon;
