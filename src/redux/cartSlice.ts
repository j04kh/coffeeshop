import { createSlice, Slice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CartState {
  addedIds: number[];
  quantityById: { [key: string]: number };
}

const initialState: CartState = {
  addedIds: [],
  quantityById: {},
};

export const cartSlice: Slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.addedIds.indexOf(action.payload) === -1) {
        state.addedIds.push(action.payload);
        state.quantityById[action.payload] = 1;
      } else {
        state.quantityById[action.payload] += 1;
      }
    },
    checkout: (state) => {
      state.addedIds = [];
      state.quantityById = {};
    },
    removeFromCart: (state, action) => {
      const index = state.addedIds.indexOf(action.payload);
      if (index > -1) {
        state.addedIds.splice(index, 1);
        state.quantityById[index] = 0;
      }
    },
  },
});

export const { addToCart, checkout, removeFromCart } = cartSlice.actions;

export const selectItemsQuantity = (state: RootState) =>
  state.cart.addedIds.length;

export const selectItemsAdded = (state: RootState) => state.cart.addedIds;

export const selectItemsQtyById = (state: RootState) => state.cart.quantityById;

export default cartSlice.reducer;
