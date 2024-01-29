import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ITextInputProps } from "../text-input";
import useCustomFont from "../../../hooks/use-custom-font";
import { SearchIcon } from "../../../assets/images/svg";
import color from "../../../constants/color";
import size from "../../../constants/size";

export default function SearchBar(props: ITextInputProps) {
  const {
    value,
    editable = true,
    onChangeText,
    keyboardType,
    placeholder,
  } = props;
  const customFont = useCustomFont(props, styles.defaultStyle);
  const [focus, setFocus] = React.useState(false);

  return (
    <View
      style={[
        styles.searchBar,
        (editable && value && focus && styles.filledStyle) || {},
        (!value && !focus && styles.disabledStyle) || {},
      ]}
    >
      <SearchIcon color={focus || value ? color.black : color.neutral4} />
      <TextInput
        style={[customFont.style]}
        value={value}
        {...customFont.props}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onPressIn={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    minHeight: 42,
    color: color.defaultText,
    paddingHorizontal: 16,
    width: "100%",
    fontSize: size.defaultText,
    borderWidth: 0,
  },
  filledStyle: {
    borderColor: color.fullblack,
    borderWidth: 1,
    color: color.fullblack,
  },
  disabledStyle: {
    backgroundColor: color.white,
    borderRadius: 4,
    paddingHorizontal: 16,
    borderColor: color.neutral4,
    borderWidth: 1,
  },
  searchBar: {
    flexDirection: "row",
    paddingHorizontal: 16,
    borderRadius: 4,
    borderColor: color.fullblack,
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 16,
  },
});
