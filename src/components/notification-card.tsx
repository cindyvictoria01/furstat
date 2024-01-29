import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { BathIcon, FoodIcon, SryingeIcon } from "../../assets/images/svg";
import typography from "../../constants/typography";

interface Props {
  type: string;
  title: string;
  time: string;
  petName: string;
  onPress: () => void;
}

export default function NotificationCard(props: Props) {
  const { type, title, time, petName, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <View>
          {type === "bath" && <BathIcon size={24} color={"#000"} />}
          {type === "food" && <FoodIcon size={24} color={"#000"} />}
          {type === "vaccine" && <SryingeIcon size={24} color={"#000"} />}
        </View>
        <Text style={styles.title}>
          {title} {petName}
        </Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    borderRadius: 16,
    padding: 16,
  },
  title: {
    ...typography.h5,
    marginLeft: 16,
  },
  time: {
    ...typography.body5,
  },
});
