import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import ShadowCard from "./shadow-card";
import { SryingeIcon } from "../../assets/images/svg";
import color from "../../constants/color";

interface Props {
  title: string;
  dateGiven: string;
  repeat: boolean;
  nextSchedule: string;
  notes: string;
}

export default function VaccineCard(props: Props) {
  const { title, dateGiven, repeat, nextSchedule, notes } = props;
  return (
    title !== "" && (
      <ShadowCard style={styles.container}>
        <View style={styles.card}>
          <View style={styles.box}>
            <SryingeIcon size={32} color={"#000"} />
          </View>
          <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
              <Text style={styles.time}>Tanggal diberikan</Text>
              <Text style={styles.twodots}>:</Text>
              <Text style={styles.content}> {dateGiven}</Text>
            </View>
            {repeat && (
              <View style={styles.row}>
                <Text style={styles.time}>Jadwal berikutnya </Text>
                <Text style={styles.twodots}>:</Text>
                <Text style={styles.content}> {nextSchedule}</Text>
              </View>
            )}
            <View style={styles.row}>
              <Text style={styles.time}>Catatan Dokter </Text>
              <Text style={styles.twodots}>:</Text>
              <Text style={styles.content}> {notes}</Text>
            </View>
          </View>
        </View>
      </ShadowCard>
    )
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#fff",
    width: 100,
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
    width: "50%",
  },
  row: {
    flexDirection: "row",
    backgroundColor: color.transparent,
    paddingBottom: 4,
  },
  circle: {
    backgroundColor: "#FFF",
    borderRadius: 999,
    height: 16,
    width: 16,
  },
});
