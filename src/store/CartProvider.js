import { useReducer, useEffect } from 'react';
import CartContext from './cart-context';

let defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.productPrice * action.item.amount;

    const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'UPDATE_STATE') {
    return action.value;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('products'))) {
      //checking if there already is a state in localstorage
      dispatchCartAction({
        type: 'UPDATE_STATE',
        value: JSON.parse(localStorage.getItem('products')),
        //if yes, update the current state with the stored one
      });
    }
  }, []);

  useEffect(() => {
    if (cartState !== defaultCartState) {
      localStorage.setItem('products', JSON.stringify(cartState));
      //create and/or set a new localstorage variable called "state"

      console.log(cartState);
    }
  }, [cartState]);

  const addProductToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeProductFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addToCart: addProductToCartHandler,
    removeFromCart: removeProductFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
