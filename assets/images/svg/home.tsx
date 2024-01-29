import React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

function Icon(props: any) {
  const { size = 16, color = "#D8D8D8", ...rest } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
      {...rest}
    >
      <G clipPath="url(#clip0_948_455)">
        <Path
          fill={color}
          d="M30.465 10.24l-1.158-.907h.028V2.667h-2.667v4.601L18.465.849a3.99 3.99 0 00-4.929 0L1.535 10.24A3.978 3.978 0 000 13.39V32h12V20c0-.735.597-1.333 1.333-1.333h5.334c.736 0 1.333.598 1.333 1.333v12h12V13.39c0-1.238-.56-2.387-1.535-3.15zm-1.132 19.093h-6.666V20c0-2.205-1.795-4-4-4h-5.334c-2.205 0-4 1.795-4 4v9.333H2.667V13.391c0-.414.186-.796.512-1.051l12-9.39a1.33 1.33 0 011.642 0l12 9.39c.326.255.512.637.512 1.05v15.943z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_948_455">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
