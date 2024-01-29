import React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

function Icon(props: any) {
  const { size = 32, color = "#000", ...rest } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
      {...rest}
    >
      <G clipPath="url(#clip0_948_461)">
        <Path
          fill={color}
          d="M16 0C7.177 0 0 7.177 0 16s7.177 16 16 16 16-7.177 16-16S24.823 0 16 0zm-5.333 28.219V28A5.339 5.339 0 0116 22.667 5.339 5.339 0 0121.333 28v.219A13.257 13.257 0 0116 29.333c-1.896 0-3.699-.398-5.333-1.114zM23.9 26.735C23.292 22.923 19.981 20 16 20c-3.981 0-7.29 2.923-7.9 6.735C4.807 24.304 2.667 20.397 2.667 16 2.667 8.648 8.648 2.667 16 2.667S29.333 8.648 29.333 16c0 4.397-2.14 8.304-5.433 10.735zM16 6.667A5.339 5.339 0 0010.667 12 5.339 5.339 0 0016 17.333 5.339 5.339 0 0021.333 12 5.339 5.339 0 0016 6.667zm0 8A2.67 2.67 0 0113.333 12 2.67 2.67 0 0116 9.333 2.67 2.67 0 0118.667 12 2.67 2.67 0 0116 14.667z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_948_461">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
