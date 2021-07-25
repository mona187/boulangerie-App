import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import BakeryList from "../bakery/BakeryList";
import BakeryDetail from "../bakery/BakeryDetail";
import CartButton from "../cart/buttons/CartButton";
import CartList from "../cart/CartList";

const Stack = createStackNavigator();
export default RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BakeryList"
        component={BakeryList}
        options={{
          title: "Choose a Bakery",
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen
        name="BakeryDetail"
        component={BakeryDetail}
        options={({ route }) => {
          const { bakery } = route.params;
          return {
            title: bakery.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Stack.Screen name="CartList" component={CartList} />
    </Stack.Navigator>
  );
};
