import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_500Medium,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic,
} from "@expo-google-fonts/nunito";
import React from "react";
import Router from "./src/router";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { setLocale } from "yup";
import yupIdValidation from "./locales/id/validation.yup";
import app from "./src/config/FIREBASE";

setLocale(yupIdValidation as any);

export default function App() {
  const navigation = React.useRef<any>();
  const [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_500Medium,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!app) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <Router ref={navigation} />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </I18nextProvider>
  );
}
