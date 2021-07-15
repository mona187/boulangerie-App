import React from "react";

import { List, Spinner } from "native-base";
import { observer } from "mobx-react";
import CakeItem from "./CakeItem";

import { ListWrapper } from "./styles";
import cakeStore from "../../stores/cakeStore";

const CakeList = ({ cakes }) => {
  if (cakeStore.loading) return <Spinner />;
  const cakeList = cakes.map((cake) => <CakeItem cake={cake} key={cake.id} />);
  return (
    <ListWrapper>
      <List>{cakeList}</List>
    </ListWrapper>
  );
};

export default observer(CakeList);
