import React from "react";
import { useState } from "react";
import { Text, Image } from "react-native";

import { List, Button } from "native-base";
import cartStore from "../../stores/cartStore";
import NumericInput from "react-native-numeric-input";
const CakeItem = ({ cake }) => {
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    const newItem = { cakeId: cake.id, quantity };
    cartStore.addToCart(newItem);
  };
  return (
    <List.Item>
      <Image source={{ uri: cake.image }} style={{ width: 100, height: 100 }} />
      <Text>{cake.name}</Text>
      <NumericInput
        rounded
        totalWidth={80}
        totalHeight={40}
        initValue={quantity}
        minValue={1}
        onChange={setQuantity}
      />
      <Button
        onPress={handleAdd}
        style={{ backgroundColor: "rgba(52, 52, 52, 0)" }}
      >
        <Text>Add</Text>
      </Button>
    </List.Item>
  );
};

export default CakeItem;
