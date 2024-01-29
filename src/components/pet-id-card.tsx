import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import ShadowCard from "./shadow-card";
import {
  BirdIcon,
  BoneIcon,
  CarrotIcon,
  CatIcon,
  DogIcon,
  FeatherIcon,
  FishBoneIcon,
  HorseIcon,
  LettuceIcon,
  RabbitIcon,
} from "../../assets/images/svg";
import color from "../../constants/color";
import typography from "../../constants/typography";

interface Props {
  name: string;
  sex: string;
  birthday: string;
  breed: string;
  furColor: string;
  weight: string;
  type: string;
  owner: string;
  imageUrl?: string;
  onPressImage?: () => void;
}

export default function PetIDCard(props: Props) {
  const {
    name,
    sex,
    birthday,
    breed,
    furColor,
    weight,
    type,
    owner,
    imageUrl,
    onPressImage,
  } = props;
  return (
    <ShadowCard style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.heading}>Kartu Tanda Peliharaan</Text>
        {type === "anjing" && <BoneIcon size={24} color={color.white} />}
        {type === "burung" && <FeatherIcon size={24} color={color.white} />}
        {type === "kelinci" && <CarrotIcon size={24} color={color.white} />}
        {type === "kucing" && <FishBoneIcon size={24} color={color.white} />}
        {type === "kuda" && <LettuceIcon size={24} color={color.white} />}
      </View>
      <View style={styles.separator} />
      <View style={styles.card}>
        <View style={{ alignItems: "center", maxWidth: 80 }}>
          <TouchableOpacity onPress={onPressImage}>
            {imageUrl ? (
              <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.image}>
                <Text style={{ fontSize: 28, fontWeight: "bold" }}>
                  {name.charAt(0)}
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <Text style={styles.title}>{name}</Text>
          {type === "anjing" && <DogIcon size={20} color={color.white} />}
          {type === "burung" && <BirdIcon size={20} color={color.white} />}
          {type === "kelinci" && <RabbitIcon size={20} color={color.white} />}
          {type === "kucing" && <CatIcon size={20} color={color.white} />}
          {type === "kuda" && <HorseIcon size={20} color={color.white} />}
        </View>
        <View style={styles.text}>
          <View style={styles.row}>
            <Text style={styles.label}>Jenis Kelamin</Text>
            <Text style={styles.twodots}>:</Text>
            <Text style={styles.content}>{sex}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Tanggal Lahir</Text>
            <Text style={styles.twodots}>:</Text>
            <Text style={styles.content}>{birthday}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Breed</Text>
            <Text style={styles.twodots}>:</Text>
            <Text style={styles.content}>{breed}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Warna bulu</Text>
            <Text style={styles.twodots}>:</Text>
            <Text style={styles.content}>{furColor}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Berat badan</Text>
            <Text style={styles.twodots}>:</Text>
            <Text style={styles.content}>{weight} Kg</Text>
          </View>
          <View style={[styles.row, { paddingBottom: 0 }]}>
            <Text style={styles.label}>Pemilik</Text>
            <Text style={styles.twodots}>:</Text>
            <Text style={styles.content}>{owner}</Text>
          </View>
        </View>
      </View>
    </ShadowCard>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cf5c36",
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  card: {
    flexDirection: "row",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  separator: {
    borderColor: color.white,
    borderTopWidth: 1,
    paddingBottom: 16,
    width: 175,
  },
  image: {
    alignContent: "center",
    backgroundColor: "#d3d3d3",
    height: 80,
    width: 80,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginLeft: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    paddingVertical: 8,
    textAlign: "center",
  },
  label: {
    fontSize: 12,
    color: "#fff",
    width: 80,
  },
  twodots: {
    fontSize: 12,
    color: "#fff",
  },
  content: {
    paddingLeft: 4,
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    paddingBottom: 8,
  },
  heading: {
    ...typography.h4,
    color: "#fff",
    paddingBottom: 5,
  },
});
