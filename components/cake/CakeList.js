import React from "react";

import { List, Spinner } from "native-base";

import CakeItem from "./CakeItem";

import { ListWrapper } from "./styles";
import cakeStore from "../../stores/cakeStore";

const CakeList = ({ cake }) => {
  if (cakeStore.loading) return <Spinner />;
  const cakeList = cake.map((cake) => <CakeItem cake={cake} key={cake.id} />);
  return (
    <ListWrapper>
      <List>{cakeList}</List>
    </ListWrapper>
  );
};

export default CakeList;
