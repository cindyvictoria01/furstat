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
      viewBox="0 0 512 512"
      {...rest}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M106.667 80C91.939 80 80 91.94 80 106.667v298.666C80 420.061 91.94 432 106.667 432h298.666C420.061 432 432 420.061 432 405.333V106.667C432 91.939 420.061 80 405.333 80H106.667zM48 106.667C48 74.266 74.266 48 106.667 48h298.666C437.734 48 464 74.266 464 106.667v298.666C464 437.734 437.734 464 405.333 464H106.667C74.266 464 48 437.734 48 405.333V106.667z"
        clipRule="evenodd"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M181.333 165.332c-8.836 0-16 7.163-16 16s7.164 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zm-48 16c0-26.51 21.491-48 48-48 26.51 0 48 21.49 48 48s-21.49 48-48 48c-26.509 0-48-21.49-48-48zM330.019 202.018c6.249-6.248 16.38-6.248 22.628 0l106.667 106.667c6.248 6.248 6.248 16.379 0 22.627-6.249 6.249-16.379 6.249-22.628 0l-95.353-95.353L117.98 459.312c-6.248 6.249-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627l234.666-234.667z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default Icon;