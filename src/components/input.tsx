import * as React from "react";
import {
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useField, useFormikContext } from "formik";
import TextInput, { ITextInputProps } from "./text-input";
import Button, { IButtonProps } from "./button";
import typography from "../../constants/typography";
import { FormContext } from "./form";
import { EyeOffIcon, EyeOnIcon } from "../../assets/images/svg";
import color from "../../constants/color";

type InputType =
  | "text"
  | "password"
  | "phone"
  | "email"
  | "submit"
  | "otp"
  | "number";

export interface InputProps {
  type: InputType;
  name: string;
}

interface TextInputProps extends InputProps, ITextInputProps {
  type: "text" | "email";
  label?: string;
  viewStyle?: ViewStyle;
}

interface NumberInputProps extends InputProps, ITextInputProps {
  type: "number";
  label?: string;
  viewStyle?: ViewStyle;
}

interface PasswordInputProps extends InputProps, ITextInputProps {
  type: "password";
  label?: string;
  viewStyle?: ViewStyle;
  onPressShowPassword?: () => void;
  isShowingPassword?: boolean;
}

interface PhoneInputProps extends InputProps, ITextInputProps {
  type: "phone";
  label?: string;
  viewStyle?: ViewStyle;
  dialCode?: string;
}

interface SubmitProps extends Omit<IButtonProps, "onPress" | "children"> {
  type: "submit";
  label?: string;
}

function TextFieldInput(props: TextInputProps) {
  const [field, meta, helper] = useField(props.name);
  const { label, viewStyle, style, ...rest } = props;

  return (
    <View style={[{ width: "100%", marginBottom: 16 }, viewStyle]}>
      {label && (
        <Text style={{ marginBottom: 8, ...typography.h4 }}>{label}</Text>
      )}
      <TextInput
        {...rest}
        onChangeText={(val) => {
          helper.setValue(val);
          props.onChangeText && props.onChangeText(val);
        }}
        value={field.value}
      />
      {meta.error && <Text style={styles.errorMessage}>{meta.error}</Text>}
    </View>
  );
}

function NumberFieldInput(props: NumberInputProps) {
  const [field, meta, helper] = useField(props.name);
  const { label, viewStyle, style, ...rest } = props;

  return (
    <View style={[{ width: "100%", marginBottom: 16 }, viewStyle]}>
      {label && (
        <Text style={{ marginBottom: 8, ...typography.h4 }}>{label}</Text>
      )}
      <TextInput
        {...rest}
        onChangeText={(val) => {
          helper.setValue(val.replace(/[^0-9.]/g, ""));
          props.onChangeText && props.onChangeText(val);
        }}
        value={field.value}
        keyboardType="numeric"
      />
      {meta.error && <Text style={styles.errorMessage}>{meta.error}</Text>}
    </View>
  );
}

function PhoneFieldInput(props: PhoneInputProps) {
  const [field, meta, helper] = useField(props.name);
  const context = React.useContext(FormContext);
  const { label, viewStyle, style, dialCode = "62", ...rest } = props;

  const _onChange = React.useCallback(
    (value: string) => {
      let newValue = value;
      const prefix = dialCode;
      let maskedText = value.replace(/(\D|^0)/g, "");
      if (maskedText.length <= prefix.length) {
        maskedText = prefix;
      }
      if (!maskedText.startsWith(prefix)) {
        maskedText = prefix.concat(maskedText);
      }
      newValue = `+${maskedText}`;
      helper.setValue(newValue);
    },
    [dialCode]
  );

  const onBlur = React.useCallback(() => {
    field.onBlur(props.name);
    helper.setTouched(true);
  }, [props.name, field, helper]);

  return (
    <View style={[{ width: "100%", marginBottom: 8 }, viewStyle]}>
      {label && (
        <Text style={{ marginBottom: 8, ...typography.h4 }}>{label}</Text>
      )}
      <TextInput
        {...rest}
        // {...field}
        value={field.value}
        keyboardType="numeric"
        onBlur={onBlur}
        onChangeText={_onChange}
      />
      {meta.error && <Text style={styles.errorMessage}>{meta.error}</Text>}
    </View>
  );
}

function PasswordFieldInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(true);
  const [field, meta, helper] = useField(props.name);
  const context = React.useContext(FormContext);
  const { label, viewStyle, style, ...rest } = props;

  const _onChange = React.useCallback(
    (value: string) => helper.setValue(value),
    []
  );

  const onBlur = React.useCallback(() => {
    field.onBlur(props.name);
    helper.setTouched(true);
  }, [props.name, field, helper]);

  return (
    <View style={[{ width: "100%", marginBottom: 16 }, viewStyle]}>
      {label && (
        <Text style={{ marginBottom: 8, ...typography.body5 }}>{label}</Text>
      )}
      <View style={{ position: "relative" }}>
        <TextInput
          {...rest}
          // {...field}
          value={field.value}
          onBlur={onBlur}
          onChangeText={_onChange}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword((prev) => !prev)}
        >
          <View>
            {showPassword ? (
              <EyeOffIcon color={color.defaultText} />
            ) : (
              <EyeOnIcon color={color.defaultText} />
            )}
          </View>
        </TouchableOpacity>
      </View>
      {meta.error && <Text style={styles.errorMessage}>{meta.error}</Text>}
    </View>
  );
}

function SubmitField(props: SubmitProps) {
  const { disabled, label, ...rest } = props;
  const formik = useFormikContext();

  return (
    <Button
      {...rest}
      onPress={() => {
        formik.handleSubmit();
      }}
      disabled={
        disabled ||
        (formik && !formik.isValid) ||
        (formik && formik.isSubmitting)
      }
    >
      {label}
    </Button>
  );
}

export default function Input(
  props:
    | TextInputProps
    | SubmitProps
    | PhoneInputProps
    | PasswordInputProps
    | NumberInputProps
) {
  switch (props.type) {
    case "submit":
      return <SubmitField {...props} />;
    case "password":
      return <PasswordFieldInput {...props} />;
    case "phone":
      return <PhoneFieldInput {...props} />;
    case "number":
      return <NumberFieldInput {...props} />;
    default:
      return <TextFieldInput {...props} />;
  }
}

const styles = StyleSheet.create({
  errorMessage: {
    marginTop: 4,
    color: color.error,
  },
  eyeIcon: {
    position: "absolute",
    top: 8,
    right: 10,
    zIndex: 2,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
});
