import "react-native-gesture-handler";
import React from "react";
//native-base
import { NativeBaseProvider } from "native-base";
import { Text } from "react-native";
//styles
import { ThemeProvider } from "styled-components";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation/index";

const theme = {
  mainColor: "#293241",
  backgroundColor: "#e0fbfc",
  pink: "#f283a2",

  red: "red",
  white: "#fff",
  blue: "#90d4ed",
};
// const MyTheme = {
//   dark: false,
//   colors: {
//     primary: "rgb(255, 45, 85)",
//     background: "rgb(242, 242, 242)",
//     card: "rgb(255, 255, 255)",
//     text: "rgb(28, 28, 30)",
//     border: "rgb(199, 199, 204)",
//     notification: "rgb(255, 69, 58)",
//   },
// };
export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
