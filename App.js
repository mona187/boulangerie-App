import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import Home from "./components/Home";
import BakeryList from "./components/bakery/BakeryList";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#293241",
  backgroundColor: "#e0fbfc",
  pink: "#f283a2",
};
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home />
       */}
      <BakeryList />
    </ThemeProvider>
  );
}
