import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import LottieView from "lottie-react-native";
import color from "../../constants/color";
import typography from "../../constants/typography";

export default function LoadingView(props: { isLoading: boolean }) {
  return (
    <Modal isVisible={props.isLoading}>
      <View style={styles.container}>
        <LottieView
          style={styles.animation}
          autoPlay
          loop
          resizeMode="contain"
          source={require("../../assets/images/animations/loading.json")}
        />
        <Text style={styles.text}>Mohon menunggu</Text>
        <Text>Permintaan anda sedang diproses</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    padding: 16,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 250,
  },
  text: {
    ...typography.h4,
    marginTop: 32,
    marginBottom: 4,
  },
  animation: {
    width: 100,
    height: 100,
  },
});
