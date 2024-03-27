import { createStore } from "redux";

const cartReduce = (
  state = {
    cart: [
      {
        id: 1,
        qty: 1,
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(cartReduce);
console.log("onCreate Store : ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 1 } };
store.dispatch(action1);
// const action2 = { type: "ADD_TO_CART", payload: { id: 20, qty: 111 } };
// store.dispatch(action2);
