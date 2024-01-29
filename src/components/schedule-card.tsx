import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import ShadowCard from "./shadow-card";
import {
  BathIcon,
  CheckmarkIcon,
  FoodIcon,
  SryingeIcon,
} from "../../assets/images/svg";
import color from "../../constants/color";

interface Props {
  title: string;
  time: string;
  canTick?: boolean;
  // ticked?: boolean;
  onPress?: () => void;
  type: string;
}

export default function ScheduleCard(props: Props) {
  const { title, time, canTick, onPress, type } = props;
  const [ticked, setTicked] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);

  const handlePress = () => {
    if (canTick && !isDisabled) {
      setTicked(true);
      setIsDisabled(true);

      if (onPress) {
        onPress;
      }
    }
  };

  const renderIcon = () => {
    switch (type) {
      case "bath":
        return <BathIcon size={32} color={"#000"} />;
      case "food":
        return <FoodIcon size={32} color={"#000"} />;
      case "vaccine":
        return <SryingeIcon size={32} color={"#000"} />;
      default:
        return null;
    }
  };

  const renderTitle = () => {
    switch (type) {
      case "bath":
        return `Saatnya memberi mandi ${title}`;
      case "food":
        return `Saatnya memberi makan ${title}`;
      case "vaccine":
        return `Saatnya memberi vaksin ${title}`;
      default:
        return "";
    }
  };

  return (
    <ShadowCard style={canTick ? {} : styles.container}>
      <TouchableOpacity
        style={styles.container}
        onPress={handlePress}
        disabled={!canTick || isDisabled}
      >
        <View style={styles.card}>
          <View style={styles.box}>{renderIcon()}</View>
          <View style={styles.text}>
            <Text style={styles.title}>{renderTitle()}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
        {canTick && (
          <View style={styles.circle}>
            {ticked && <CheckmarkIcon size={12} />}
          </View>
        )}
      </TouchableOpacity>
    </ShadowCard>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    flexDirection: "row",
  },
  box: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    height: 48,
    width: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    justifyContent: "center",
    marginLeft: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#fff",
  },
  circle: {
    backgroundColor: "#FFF",
    borderRadius: 999,
    height: 16,
    width: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
