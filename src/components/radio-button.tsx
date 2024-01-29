import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import color from "../../constants/color";
import typography from "../../constants/typography";
import { RadioOffIcon, RadioOnIcon } from "../../assets/images/svg";

interface RadioButtonProps {
  value: string;
  label: string;
  activeColor?: string;
  inactiveColor?: string;
  status: boolean;
  onPress?: () => void;
  reversePosition?: boolean;
  textFontSize?: any;
  textActiveColor?: any;
  textInactiveColor?: any;
  iconSize?: number;
  disabled?: boolean;
}

export default function RadioButton(props: RadioButtonProps) {
  const {
    value,
    label,
    activeColor = color.primary3,
    inactiveColor = color.neutral3,
    status = false,
    onPress,
    reversePosition = false,
    textFontSize = typography.body4,
    textActiveColor = { color: color.neutral2 },
    textInactiveColor = { color: inactiveColor },
    iconSize = 20,
    disabled = false,
  } = props;
  return (
    <TouchableOpacity
      key={value}
      style={[styles.container]}
      disabled={disabled}
      onPress={onPress}
    >
      <View
        style={[
          styles.alignCenter,
          reversePosition ? styles.flexRowReverse : styles.flexRow,
          reversePosition && styles.justifyBetween,
        ]}
      >
        <View
          style={
            reversePosition ? styles.iconsMarginLeft : styles.iconsMarginRight
          }
        >
          {status ? (
            <RadioOnIcon
              color={status ? activeColor : inactiveColor}
              size={iconSize}
            />
          ) : (
            <RadioOffIcon
              color={status ? activeColor : inactiveColor}
              size={iconSize}
            />
          )}
        </View>
        <Text
          style={[textFontSize, status ? textActiveColor : textInactiveColor]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingRight: 32,
  },
  alignCenter: {
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexRowReverse: {
    flexDirection: "row-reverse",
  },
  iconsMarginRight: {
    marginRight: 8,
  },
  iconsMarginLeft: {
    marginLeft: 8,
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
});
