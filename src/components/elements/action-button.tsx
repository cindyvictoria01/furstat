import * as React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  I18nManager,
  TouchableOpacity,
  View,
} from "react-native";
import color from "../../../constants/color";

type RenderFunc = (size: number) => React.ReactElement<any>;
interface Props {
  disabled?: boolean;
  render: React.ReactElement<any> | RenderFunc | string;
  onPress?: () => void;
  badge?: number;
}

export const size = 16;
export const margin = 24;

export default function ActionButton(props: Props) {
  const { render, onPress, badge, disabled } = props;
  const isText = typeof render === "string";

  const renderContent = React.useCallback(() => {
    switch (typeof render) {
      case "string":
        return <Text style={styles.text}>{render}</Text>;
      case "function":
        const renderFunc = render as RenderFunc;
        return renderFunc(size);
      default:
        return render;
    }
  }, [render]);

  return (
    <TouchableOpacity disabled={!!disabled} onPress={onPress} delayPressIn={0}>
      <View style={styles.container}>
        <View style={[styles.content, isText && styles.contentText]}>
          {renderContent()}
        </View>
        {!!badge && <Text style={styles.badge}>{badge}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  content: {
    backgroundColor: "transparent",
    height: size - 6,
    width: size - 6,
    margin,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
  contentText: {
    width: size + margin * 3,
    margin: 2,
  },
  badge: {
    textAlign: "center",
    textAlignVertical: "center",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: color.badge,
    color: "white",
    ...Platform.select({
      ios: {
        width: 16,
        height: 16,
        top: 2,
        right: 4,
        borderRadius: 8,
        fontSize: 9,
        lineHeight: 16,
      },
      android: {
        width: 18,
        height: 18,
        top: 8,
        right: 8,
        borderRadius: 9,
        fontSize: 10,
        lineHeight: 17,
      },
    }),
  },
  text: {
    fontSize: 16,
    color: color.primary,
    fontWeight: "500",
  },
});
