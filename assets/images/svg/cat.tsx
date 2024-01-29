import React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

function Icon(props: any) {
  const { size = 24, color = "#000", ...rest } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <G clipPath="url(#clip0_944_442)">
        <Path
          fill={color}
          d="M24 6.5V1a1.001 1.001 0 00-1.6-.8l-1.687 1.265a5.485 5.485 0 00-4.426 0L14.6.2A1 1 0 0013 1v5.5c0 1.047.294 2.026.804 2.86-8.499 2.833-8.811 11.141-8.807 12.419C3.467 21.351 2 20.291 2 18.5c0-1.565.718-2.724 1.479-3.949C4.227 13.344 5 12.097 5 10.5c0-2.565-1.374-4.16-3.869-4.491a1.007 1.007 0 00-1.123.86 1 1 0 00.86 1.123c1.494.198 2.131.949 2.131 2.509 0 1.027-.566 1.94-1.221 2.996-.834 1.345-1.779 2.869-1.779 5.004 0 3.133 2.762 5.119 5.689 5.45.098.032.733.05.869.05h16.442a1 1 0 100-2h-1v-11.26a5.491 5.491 0 002-4.24L24 6.5zM20 22h-2c0-3.309-2.691-6-6-6a1 1 0 100 2c2.206 0 4 1.794 4 4H6.999c-.017-.357-.31-8.744 8.331-11.008a5.5 5.5 0 004.67.8V22zm-1.5-12C16.57 10 15 8.43 15 6.5S16.57 3 18.5 3 22 4.57 22 6.5 20.43 10 18.5 10z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_944_442">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;