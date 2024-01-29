import * as React from "react";
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  Platform,
  LayoutChangeEvent,
  StatusBar,
  Dimensions,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import Constants from "expo-constants";
import typography from "../../../constants/typography";
import ActionButton from "../elements/action-button";
import color from "../../../constants/color";
import { ArrowLeftIcon } from "../../../assets/images/svg";

interface Props {
  title?: React.ReactNode;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  bottomComponent?: React.ReactNode;
  children?: React.ReactNode;
  wrapperStyle?: StyleProp<ViewStyle>;
  back?: boolean;
  titleColor?: string;
  showUpperHeader?: boolean;
  hideAndroidStatusBar?: boolean;
  concave?: boolean;
  topSafeArea?: boolean;
}

export const HEADER_HEIGHT = Platform.OS === "ios" ? 60 : 65;
const preLollipop = Platform.OS === "android" && Platform.Version < 21;

const { width: screenWidth } = Dimensions.get("window");

export default function Header(props: Props) {
  const [width, setWidth] = React.useState<number | undefined>();
  const navigation = useNavigation();
  const {
    back,
    leftComponent,
    rightComponent,
    bottomComponent,
    wrapperStyle,
    title,
    children,
    showUpperHeader = true,
    titleColor = "black",
    concave,
    hideAndroidStatusBar,
    topSafeArea,
  } = props;
  const { goBack } = navigation;

  const close = React.useCallback(() => {
    goBack();
  }, [goBack]);

  const renderTitle = React.useCallback(() => {
    return (
      <View>
        {title ? (
          typeof title === "string" ? (
            <View style={[styles.titleContainer]}>
              <Text
                style={[typography.h4, { color: titleColor }]}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {title}
              </Text>
            </View>
          ) : (
            title
          )
        ) : null}
      </View>
    );
  }, [title, titleColor]);

  const onLayout = React.useCallback(
    (e: LayoutChangeEvent) => {
      if (!width || e.nativeEvent.layout.width > width) {
        setWidth(e.nativeEvent.layout.width);
      }
    },
    [width]
  );

  const renderLeft = React.useCallback(() => {
    switch (typeof leftComponent) {
      case "undefined":
        return back ? (
          <ActionButton
            onPress={close}
            render={(iconSize) => (
              <ArrowLeftIcon color={color.black} size={iconSize} />
            )}
          />
        ) : null;

      default:
        return leftComponent;
    }
  }, [leftComponent, back, onLayout, close]);

  const renderRight = React.useCallback(
    () => (rightComponent ? rightComponent : null),
    [rightComponent]
  );

  const renderBottom = React.useCallback(
    () => (bottomComponent ? bottomComponent : null),
    [bottomComponent]
  );

  return (
    <>
      <View style={[styles.wrapper, wrapperStyle, concave && styles.flat]}>
        {!topSafeArea && <View style={styles.statusBar} />}
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="dark-content"
        />
        {!preLollipop && !hideAndroidStatusBar && topSafeArea && (
          <View
            style={[
              styles.statusBar,
              {
                backgroundColor: color.primary,
              },
            ]}
          />
        )}

        {showUpperHeader && (
          <View style={styles.container}>
            {children ? (
              children
            ) : (
              <>
                <View style={{ width }}>
                  <View
                    onLayout={onLayout}
                    style={[
                      styles.left,
                      {
                        width,
                      },
                    ]}
                  >
                    {renderLeft()}
                  </View>
                </View>
                <View style={styles.center}>{renderTitle()}</View>
                <View
                  style={{
                    width,
                  }}
                >
                  <View onLayout={onLayout} style={[styles.right]}>
                    {renderRight()}
                  </View>
                </View>
              </>
            )}
          </View>
        )}
        <View>{renderBottom()}</View>
      </View>
      {concave && (
        <View style={[styles.concaveContainer]}>
          <View style={[styles.concave]} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    backgroundColor: color.white,
    zIndex: 1,
  },
  flat: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  concaveContainer: {
    backgroundColor: color.white,
    width: screenWidth,
    height: 20,
    marginBottom: -15,
  },
  concave: {
    backgroundColor: color.white,
    height: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  container: {
    height: HEADER_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  left: {
    justifyContent: "center",
    height: HEADER_HEIGHT,
  },
  center: {
    justifyContent: "center",
    flexGrow: 1,
    flexShrink: 1,
    height: HEADER_HEIGHT,
  },
  right: {
    justifyContent: "center",
    height: HEADER_HEIGHT,
  },
  statusBar: {
    height: Constants.statusBarHeight,
  },
});
