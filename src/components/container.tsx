import React from "react";
import { View, ViewStyle, StyleSheet, SafeAreaView } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function Container(props: Props) {
  const { children, style } = props;
  const containerStyle = [styles.container, style];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={containerStyle}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  topBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: "50%",
    backgroundColor: "#19DC74",
  },
});
