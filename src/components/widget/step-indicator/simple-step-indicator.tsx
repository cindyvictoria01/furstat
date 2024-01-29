import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { STEP_STATUS } from "./types";
import color from "../../../../constants/color";

type SimpleStepIndicatorListType = {
  key: string;
  label: string;
  status: STEP_STATUS;
};

interface SimpleStepIndicatorProps {
  indicatorList: SimpleStepIndicatorListType[];
}

function SimpleStepIndicator(props: SimpleStepIndicatorProps) {
  const { indicatorList } = props;
  return (
    <View style={styles.container}>
      {indicatorList.map((item, idx) => (
        <React.Fragment key={item.key + idx}>
          {idx === 0 ? (
            <></>
          ) : (
            <View
              style={
                item.status !== STEP_STATUS.UNFINISHED
                  ? styles.lineBar
                  : [styles.lineBar, { backgroundColor: color.defaultText }]
              }
            />
          )}
          {item.status === STEP_STATUS.UNFINISHED && (
            <View style={styles.item}>
              <View style={styles.inactiveCircle} />
              <Text style={styles.inactiveText}>{item.label}</Text>
            </View>
          )}
          {item.status === STEP_STATUS.CURRENT && (
            <View style={styles.item}>
              <View style={styles.emptyCircle} />
              <Text style={styles.activeText}>{item.label}</Text>
            </View>
          )}
          {item.status === STEP_STATUS.FINISHED && (
            <View style={styles.item}>
              <View style={styles.circle} />
              <Text style={styles.activeText}>{item.label}</Text>
            </View>
          )}
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  lineBar: {
    flex: 1,
    marginHorizontal: 8,
    height: 3,
    backgroundColor: color.primary3,
    borderRadius: 9,
    marginTop: 11,
  },
  circle: {
    height: 24,
    width: 24,
    borderRadius: 24,
    backgroundColor: color.primary3,
  },
  emptyCircle: {
    height: 24,
    width: 24,
    borderRadius: 24,
    borderColor: color.primary3,
    borderWidth: 3,
  },
  inactiveCircle: {
    height: 24,
    width: 24,
    borderRadius: 24,
    borderColor: color.defaultText,
    borderWidth: 3,
  },
  activeText: {
    fontSize: 12,
    fontWeight: "500",
    color: color.primary3,
    maxWidth: 60,
    textAlign: "center",
    marginTop: 4,
  },
  inactiveText: {
    fontSize: 12,
    fontWeight: "500",
    color: color.defaultText,
    maxWidth: 60,
    textAlign: "center",
    marginTop: 4,
  },
  checkCircle: {
    backgroundColor: color.success2,
    borderRadius: 99,
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default SimpleStepIndicator;
