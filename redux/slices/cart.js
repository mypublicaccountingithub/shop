import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  uuid: null,
  totalPrice: 0,
  isPaid: false,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeCartTotalPrice: (state, action) => {
      var state2 = current(state);
      var cartTotalPrice = 0;

      state2.items.map((item) => {
        var price = 0;
        if (item.reduced_price) price = item.quantity * item.reduced_price;
        else {
          price = item.quantity * item.price;
        }
        cartTotalPrice += price;
      });

      state.totalPrice = cartTotalPrice;
    },
    increaseItemQuantity: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity + 1;
          item.total_price =
            item.quantity * (item?.reduced_price ?? item?.price);
        }
      });
      
    },

    decreaseItemQuantity: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity - 1;
          item.total_price = item.quantity * (item.reduced_price ?? item.price);
        }
      });
    },
    changeItemTotalPrice: (state, action) => {},
    addCartItem: (state, action) => {
      var isExist = state.items.find((item) => item.id === action.payload.id);

      // add product to item if does not exist
      if (!isExist)
        state.items.push({
          ...action.payload,
          quantity: 1,
          total_price: action.payload?.reduced_price ?? action.payload?.price,
        });
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    changeAllItems: (state, action) => {
      const payload = action.payload;
      payload?.map((payloadItem) => {
        state.items.map((item) => {
          if (item.id === payloadItem.id) {
            payloadItem["quantity"] = item.quantity;
            payloadItem["totalPrice"] =
              item.quantity * (payloadItem.reduced_price ?? payloadItem.price);
          }
        });
      });
      state.items = payload;
    },
    resetCart: () => initialState,
  },
});

export const {
  changeCartTotalPrice,
  increaseItemQuantity,
  decreaseItemQuantity,
  changeItemTotalPrice,
  addCartItem,
  removeCartItem,
  changeAllItems,
  resetCart,
} = cartSlice.actions;


export default cartSlice.reducer;