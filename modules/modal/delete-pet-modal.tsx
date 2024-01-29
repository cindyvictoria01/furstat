import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Button from "../../src/components/button";
import color from "../../constants/color";

interface Props {
  petName: string;
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeletePetModal(props: Props) {
  const { petName, isVisible, onConfirm, onCancel } = props;
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Apakah anda yakin akan menghapus "{petName}"?
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            children="Ya, hapus"
            onPress={onConfirm}
            contentStyle={{ width: 100 }}
          />
          <Button
            children="Tidak"
            onPress={onCancel}
            contentStyle={{ backgroundColor: "#AF1313", width: 100 }}
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
    justifyContent: "space-between",
    marginTop: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
