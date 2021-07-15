import React from "react";

//stores
import bakeryStore from "../../stores/bakeryStore";
import cakeStore from "../../stores/cakeStore";

//observer
import { observer } from "mobx-react";
import CakeList from "../cake/CakeList";

//styles
import {
  BakeryDetailTitle,
  BakeryDetailImage,
  BakeryDetailWrapper,
} from "./styles";

//native-base
import { Spinner } from "native-base";

BakeryDetail = ({ navigation, route }) => {
  const { bakery } = route.params;

  if (bakeryStore.loading || cakeStore.loading) return <Spinner />;
  console.log(bakery.cakes);
  const cakes = bakery.cakes.map((cake) => cakeStore.getCakeById(cake.id));
  console.log(cakes);
  return (
    <>
      <BakeryDetailWrapper>
        <BakeryDetailImage source={{ uri: bakery.image }} />
        <BakeryDetailTitle>{bakery.name}</BakeryDetailTitle>
      </BakeryDetailWrapper>
      <CakeList cakes={cakes} />
    </>
  );
};

export default observer(BakeryDetail);
