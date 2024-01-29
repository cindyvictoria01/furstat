import {
  BottomSheetModal as RawBottomSheetModal,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import typography from "../../constants/typography";
import color from "../../constants/color";

interface Props {
  trigger: (
    sheetRef: React.RefObject<BottomSheetModalMethods>
  ) => React.ReactNode;
  children: (
    sheetRef: React.RefObject<BottomSheetModalMethods>
  ) => React.ReactNode;
  uniqueKey?: string;
  snapPoints?: (string | number)[];
  title?: string;
}

export default function BottomSheet(props: Props) {
  const {
    trigger,
    children,
    snapPoints = ["30%", "70%"],
    uniqueKey = "bottom-sheet",
    title,
    ...rest
  } = props;
  const bottomSheetModalRef = React.useRef<RawBottomSheetModal>(null);
  return (
    <>
      {trigger(bottomSheetModalRef)}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        key={uniqueKey}
        {...rest}
      >
        {title && (
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        )}
        {children(bottomSheetModalRef)}
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 16,
    height: 32,
    justifyContent: "center",
  },
  titleText: {
    ...typography.body5,
    color: color.neutral3,
  },
});
