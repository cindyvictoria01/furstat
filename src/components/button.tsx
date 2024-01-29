import React from "react";
import {
  ActivityIndicator,
  TextStyle,
  View,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import color from "../../constants/color";

export interface IButtonProps {
  children: React.ReactNode;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  variant?: "default" | "outlined" | "text";
  loadingColor?: string;
  onPress: () => void;
}

export default function Button(props: IButtonProps) {
  const {
    onPress,
    disabled,
    loading,
    style,
    contentStyle,
    variant = "default",
    textStyle,
    loadingColor = color.defaultText,
  } = props;
  let { children } = props;

  if (typeof children === "string") {
    children = (
      <Text
        style={[
          styles.baseText,
          variant === "outlined"
            ? styles.outlineText
            : variant === "text"
            ? {}
            : styles.defaultText,
          textStyle,
        ]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {children}
      </Text>
    );
  }

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={style}
    >
      {variant === "outlined" ? (
        <View
          style={[
            styles.container,
            styles.outlineContainer,
            contentStyle,
            disabled ? styles.disabled : {},
          ]}
        >
          {loading ? <ActivityIndicator color={loadingColor} /> : children}
        </View>
      ) : variant === "text" ? (
        <View
          style={[
            styles.container,
            styles.textContainer,
            contentStyle,
            disabled ? styles.disabled : {},
          ]}
        >
          {loading ? <ActivityIndicator color={loadingColor} /> : children}
        </View>
      ) : (
        <View
          style={[
            styles.container,
            styles.button,
            contentStyle,
            disabled ? styles.disabled : {},
          ]}
        >
          {loading ? <ActivityIndicator color="white" /> : children}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    minHeight: 51,
    overflow: "visible",
  },
  outlineContainer: {
    borderWidth: 0.8,
    borderColor: color.primary3,
    minHeight: 34,
  },
  textContainer: {
    minHeight: 51,
  },
  retryContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  baseText: {
    color: color.primary3,
    fontWeight: "700",
    fontSize: 13.28,
  },
  defaultText: {
    color: "white",
  },
  outlineText: {
    color: color.primary3,
  },
  button: {
    backgroundColor: color.primary3,
  },
  disabled: {
    opacity: 0.5,
  },
});
