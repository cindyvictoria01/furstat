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
      <G clipPath="url(#clip0_941_430)">
        <Path
          fill={color}
          d="M6.5 19a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 016.5 19zM24 7c0 1.178-.78 2-1.898 2h-4.688l1.293 1.293a.999.999 0 11-1.414 1.414L15.5 9.914l-1.366 1.366 2.564 2.504a1 1 0 11-1.396 1.432l-2.582-2.521-1.306 1.306 3.293 3.293a.999.999 0 11-1.414 1.414L10 15.415l-.751.751a12.342 12.342 0 012.054 3.39 2.712 2.712 0 01-.08 2.209 2.705 2.705 0 01-1.701 1.406c-1.528.428-3.32.697-5.478.823a3.825 3.825 0 01-2.922-1.115 3.83 3.83 0 01-1.116-2.923c.126-2.153.395-3.945.824-5.479a2.709 2.709 0 011.408-1.701 2.704 2.704 0 012.207-.079 12.317 12.317 0 013.39 2.054L8.586 14l-3.293-3.293a.999.999 0 111.414-1.414L10 12.586l1.289-1.289-2.565-2.504a1 1 0 011.397-1.432l2.582 2.521 1.383-1.383-1.793-1.793a.999.999 0 111.414-1.414L15 6.585V1.898C15 .78 15.822 0 17 0c1.423 0 3.447.989 3.905 3.095C23.01 3.553 24 5.577 24 7zM9.447 20.3a10.411 10.411 0 00-5.748-5.747.7.7 0 00-.943.464c-.389 1.394-.636 3.047-.752 5.057a1.825 1.825 0 001.923 1.924c2.014-.118 3.667-.364 5.056-.753a.7.7 0 00.464-.944V20.3zM22 7c0-.02-.117-2-2-2a1 1 0 01-1-1c0-1.858-1.931-1.997-1.998-2L17 7h5z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_941_430">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
