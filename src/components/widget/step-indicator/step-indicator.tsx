import * as React from "react";
import {
  StepIndicatorItemType,
  StepIndicatorProps,
  STEP_STATUS,
} from "./types";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import color from "../../../../constants/color";
import typography from "../../../../constants/typography";

function StepIndicator(props: StepIndicatorProps) {
  const { items, onChange, currentActive } = props;

  const itemColor = React.useCallback(
    (status: STEP_STATUS, disabled?: boolean) =>
      disabled ||
      status === STEP_STATUS.UNFINISHED ||
      status === STEP_STATUS.NEUTRAL
        ? color.neutral4
        : status === STEP_STATUS.FINISHED
        ? color.success
        : color.warning,
    []
  );
  const itemBgColor = React.useCallback(
    (status: STEP_STATUS, disabled?: boolean) =>
      disabled ||
      status === STEP_STATUS.UNFINISHED ||
      status === STEP_STATUS.NEUTRAL
        ? color.neutral6
        : status === STEP_STATUS.FINISHED
        ? color.success4
        : color.warning3,
    []
  );

  const Button = React.useCallback(
    (params: { item: StepIndicatorItemType; idx: number }) => {
      const { item, idx } = params;
      return (
        <TouchableOpacity
          disabled={item.disabled || item.status === STEP_STATUS.UNFINISHED}
          style={styles.button}
          onPress={() => {
            onChange && onChange(idx);
          }}
        >
          {item.icon && (
            <View
              style={[
                styles.circleButton,
                {
                  backgroundColor: itemBgColor(item.status, item.disabled),
                  borderColor:
                    currentActive === idx
                      ? itemColor(item.status, item.disabled)
                      : "transparent",
                },
              ]}
            >
              {item.icon(itemColor(item.status, item.disabled))}
            </View>
          )}
          <Text
            style={[
              styles.defaultText,
              { color: itemColor(item.status, item.disabled) },
              idx === currentActive ? typography.h5 : typography.body5,
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      );
    },
    [onChange]
  );

  return (
    <View style={styles.container}>
      {items.map((item, idx) => (
        <React.Fragment key={item.key + idx}>
          {idx > 0 && (
            <View
              style={[
                styles.lineBar,
                { backgroundColor: itemColor(item.status, item.disabled) },
              ]}
            />
          )}
          <Button idx={idx} item={item} />
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  lineBar: {
    flex: 1,
    marginHorizontal: 4,
    height: 2,
    backgroundColor: color.primary,
    borderRadius: 9,
    marginTop: 28,
  },
  button: {
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
    alignItems: "center",
    width: 96,
    borderRadius: 8,
  },
  circleButton: {
    marginBottom: 8,
    padding: 4,
    borderRadius: 999,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 42,
    width: 42,
  },
  defaultText: {
    textAlign: "center",
  },
});

export default StepIndicator;
