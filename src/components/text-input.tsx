import React from "react";
import {
  TextInput,
  TextInputProps as RawTextInputProps,
  StyleSheet,
} from "react-native";
import useCustomFont from "../../hooks/use-custom-font";
import color from "../../constants/color";
import size from "../../constants/size";

export interface ITextInputProps extends RawTextInputProps {
  value?: string;
  children?: any;
  ref?: React.Ref<TextInput>;
  multiline?: boolean;
}

function CustomTextInput(props: ITextInputProps, ref: React.Ref<TextInput>) {
  const { value, editable = true, multiline } = props;
  const customFont = useCustomFont(props, styles.defaultStyle);

  return (
    <TextInput
      style={[
        customFont.style,
        (editable && value && styles.filledStyle) || {},
        (!editable && styles.disabledStyle) || {},
        { textAlignVertical: multiline ? "top" : "auto" },
      ]}
      {...customFont.props}
      value={value}
      placeholderTextColor={color.placeholder}
      ref={ref}
    />
  );
}

export default React.forwardRef(CustomTextInput);

const styles = StyleSheet.create({
  defaultStyle: {
    minHeight: 42,
    borderRadius: 4,
    color: color.defaultText,
    borderWidth: 1,
    borderColor: color.neutral4,
    paddingHorizontal: 16,
    width: "100%",
    fontSize: size.defaultText,
  },
  filledStyle: {
    borderColor: color.neutral1,
    borderWidth: 1,
    color: color.fullblack,
    backgroundColor: color.neutral7,
  },
  disabledStyle: {
    backgroundColor: color.neutral6,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: color.neutral6,
  },
});
