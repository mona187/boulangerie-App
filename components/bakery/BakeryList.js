import React from "react";

import { List, Spinner } from "native-base";

import BakeryItem from "./BakeryItem";

import { observer } from "mobx-react";

import bakeryStore from "../../stores/bakeryStore";
import { ListWrapper } from "./styles";
const BakeryList = () => {
  if (bakeryStore.loading) return <Spinner />;
  const bakeryList = bakeryStore.bakeries.map((bakery) => (
    <BakeryItem bakery={bakery} key={bakery.id} />
  ));

  return (
    <ListWrapper>
      <List>{bakeryList}</List>
    </ListWrapper>
  );
};

export default observer(BakeryList);
