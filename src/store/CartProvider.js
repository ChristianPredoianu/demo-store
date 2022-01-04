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

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.productId === action.item.productId
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    console.log(existingCartItem);
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    console.log('removing');
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.productId === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    console.log(existingItem);
    const updatedTotalAmount = state.totalAmount - existingItem.productPrice;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.productId !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

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
