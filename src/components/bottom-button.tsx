import * as React from "react";
import { StyleSheet, View } from "react-native";
import Input from "./input";
import color from "../../constants/color";

interface Props {
  hasShadow?: boolean;
  label: string;
}

export default function BottomInputSubmit(props: Props) {
  const { hasShadow = true, label } = props;
  return (
    <View style={[styles.container, hasShadow && styles.shadow]}>
      <Input type="submit" label={label} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    backgroundColor: color.white,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
