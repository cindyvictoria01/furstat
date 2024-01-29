import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Button from "../../src/components/button";
import color from "../../constants/color";

interface Props {
  text: string;
  isVisible: boolean;
  onConfirm: () => void;
}

export default function RedirectModal(props: Props) {
  const { text, isVisible, onConfirm } = props;
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <View style={styles.buttonContainer}>
          <Button
            children="Ya, lanjutkan"
            onPress={onConfirm}
            contentStyle={{ width: 150 }}
            variant="text"
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    padding: 32,
    borderRadius: 8,
    margin: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
