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
      viewBox="0 0 24 24"
      {...rest}
    >
      <G clipPath="url(#clip0_951_753)">
        <Path
          fill={color}
          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm1.379-15.621l-5.914 5.914A4.968 4.968 0 006 15.828V17a1 1 0 001 1h1.172a4.968 4.968 0 003.535-1.465l5.914-5.914a3.002 3.002 0 000-4.242 3.002 3.002 0 00-4.242 0zm-3.086 8.742A3.02 3.02 0 018.172 16H8v-.172c0-.789.32-1.562.879-2.121l3.457-3.457 1.414 1.414-3.457 3.457zm5.914-5.914l-1.043 1.043-1.414-1.414 1.043-1.043a.999.999 0 111.414 1.414z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_951_753">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
