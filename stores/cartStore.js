import { makeAutoObservable } from "mobx";

class CartStore {
  items = [
    {
      cakeId: 3,
      quantity: 2,
    },
    {
      cakeId: 23,
      quantity: 3,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const cartStore = new CartStore();

export default cartStore;
