import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

interface Props {
  imgUrl?: string;
  name: string;
  information: string;
  onPress: () => void;
  onPressMore?: () => void;
}

export default function PetCard(props: Props) {
  const { imgUrl, name, information, onPress, onPressMore } = props;
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.header}>
          {imgUrl ? (
            <Image
              source={{ uri: imgUrl }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.image}>
              <Text style={styles.profileLetter}>
                {name.charAt(0).toLocaleUpperCase()}
              </Text>
            </View>
          )}
          <View style={styles.text}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.age}>{information}</Text>
          </View>
        </View>
        {/* <TouchableOpacity style={styles.more} onPress={onPressMore}>
          <TrashIcon />
        </TouchableOpacity> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginVertical: 12,
  },
  text: {
    justifyContent: "flex-end",
    margin: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
  },
  age: {
    fontSize: 16,
    fontWeight: "400",
    color: "#848484",
    paddingTop: 4,
  },
  image: {
    backgroundColor: "#d3d3d3",
    marginRight: 8,
    height: 100,
    width: 100,
    borderRadius: 8,
    display: "flex",
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  profileLetter: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  more: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
