import React from "react";
import { Alert } from "react-native";
import BakeryList from "../bakery/BakeryList";
import { useNavigation } from "@react-navigation/native";
import authStore from "../../stores/authStore";
import { ButtonStyling, ButtonTime } from "../../styles";
const Signpage = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("BakeryList");
    } else {
      Alert.alert(
        "Sign in",
        "You need to signin ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <ButtonTime>
      <ButtonStyling onPress={handlePress}>LOGIN</ButtonStyling>
    </ButtonTime>
  );
};
export default Signpage;
