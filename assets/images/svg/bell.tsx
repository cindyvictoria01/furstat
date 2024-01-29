import React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

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
      <G clipPath="url(#clip0_638_316)">
        <Path
          fill="#000"
          d="M31.012 21.6L27.545 9.105a12.428 12.428 0 00-24.11.628L.753 21.8a4 4 0 003.904 4.867h4.81a6.667 6.667 0 0013.066 0h4.627a4.001 4.001 0 003.852-5.067zM16 29.333a4 4 0 01-3.755-2.666h7.51A4 4 0 0116 29.333zm12.22-5.86a1.324 1.324 0 01-1.067.527H4.657a1.333 1.333 0 01-1.301-1.623l2.681-12.066a9.761 9.761 0 0118.934-.496l3.466 12.494a1.323 1.323 0 01-.217 1.164z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_638_316">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
