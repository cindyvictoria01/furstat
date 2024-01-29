import { useFonts } from "expo-font";
import { useMemo } from "react";
import { StyleProp, TextStyle, TextProps, StyleSheet } from "react-native";

interface Fonts {
  fontFamily: string;
  fontStyles: any;
  fontWeights: any;
}

const fonts: Fonts = {
  fontFamily: "Nunito",
  fontWeights: {
    200: "ExtraLight",
    300: "Light",
    400: "Regular",
    500: "Medium",
    600: "SemiBold",
    700: "Bold",
    800: "ExtraBold",
    900: "Black",
  },
  fontStyles: {
    normal: "",
    italic: "_Italic",
  },
};

interface CustomFont {
  style: StyleProp<TextStyle>;
  props: TextProps;
}

export function getFontFamily({
  fontWeight = "400",
  fontStyle,
}: {
  fontWeight?: string;
  fontStyle?: string;
}) {
  const customFontWeight = fontWeight
    ? fonts.fontWeights[fontWeight]
    : "Regular";
  const customFontStyle = fontStyle ? fonts.fontStyles[fontStyle] : "";
  const modifier = fontWeight + customFontWeight + customFontStyle;
  return `${fonts.fontFamily}_${modifier}`;
}

const useCustomFont = (
  props: TextProps,
  defaultStyle: TextStyle
): CustomFont => {
  const { style, ...restProps } = props;
  const customizedStyle = useMemo((): StyleProp<TextStyle> => {
    const { fontWeight, fontStyle, ...rest } =
      StyleSheet.flatten(style) || ({} as any);
    return {
      ...rest,
      fontFamily: getFontFamily({ fontWeight, fontStyle }),
    };
  }, [style]);
  const newStyle = StyleSheet.flatten([defaultStyle, customizedStyle]);
  return {
    style: newStyle,
    props: restProps,
  };
};

export default useCustomFont;
