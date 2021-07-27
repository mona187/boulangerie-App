// import React from "react";

// //react-native
// import { Alert } from "react-native";

// import { useNavigation } from "@react-navigation/native";

// import { CartButtonStyled, CartTextStyled } from "../styles";

// import cartStore from "../../../stores/cartStore";
// import authStore from "../../../stores/authStore";

// import { Button } from "native-base";

// //observer
// import { observer } from "mobx-react";
// const CartButton = () => {
//   // const navigation = useNavigation();
//   // const handlePress = () => {
//   //   if (authStore.user) {
//   //     navigation.navigate("CartList");
//   //   } else {
//   //     Alert.alert(
//   //       "Sign in",
//   //       "You need to signin ",
//   //       [
//   //         {
//   //           text: "Cancel",
//   //           onPress: () => console.log("Cancel Pressed"),
//   //           style: "cancel",
//   //         },
//   //         { text: "Signin", onPress: () => navigation.navigate("Signin") },
//   //       ],
//   //       { cancelable: false }
//   //     );
//   //   }
//   // };
//   return (
//     <Button onPress={handlePress}>
//       <CartButtonStyled name="shopping-cart" size={24} />
//       <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
//     </Button>
//   );
// };

// export default observer(CartButton);
import React from "react";

import { useNavigation } from "@react-navigation/native";

//styles
import { CartButtonStyled, CartTextStyled } from "../styles";

//store
import cartStore from "../../../stores/cartStore";

//native-base
import { Button } from "native-base";

//observer
import { observer } from "mobx-react";
const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button onPress={() => navigation.navigate("CartList")}>
      <CartButtonStyled name="shopping-cart" size={24} />
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
    </Button>
  );
};

export default observer(CartButton);
