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

export default cartReducer;
