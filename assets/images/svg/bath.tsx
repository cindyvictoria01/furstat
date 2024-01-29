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
      <G clipPath="url(#clip0_942_434)">
        <Path
          fill={color}
          d="M31.327 21.164L31.97 16H2.667V5.777a3.115 3.115 0 013.11-3.11c.974 0 1.906.465 2.49 1.244l.345.46-.765 4.386 1.428 2.227 7.702-5.777L15.55 2.98l-4.809-.215-.341-.456A5.805 5.805 0 005.776 0 5.782 5.782 0 000 5.777V16l.692 5.164a10.822 10.822 0 003.635 6.823L3.335 32h2.748l.602-2.443c1.447.711 3.068 1.11 4.771 1.11h9.108c1.697 0 3.313-.395 4.756-1.102L25.921 32h2.748l-.989-4.001a10.826 10.826 0 003.65-6.835h-.003zM11.455 28a8.194 8.194 0 01-8.118-7.167l-.27-2.166H28.95l-.27 2.166A8.196 8.196 0 0120.563 28h-9.108z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_942_434">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
