const reducer = (state, action) => {
  if (action.type === 'OPEN_MODAL') {
    return { ...state, isModalOpen: !state.isModalOpen };
  }

  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: !state.isModalOpen };
  }

  if (action.type === 'HANDLE_SIZE') {
    return { ...state, windowWidth: window.innerWidth };
  }

  if (action.type === 'OPEN_CART_MODAL') {
    return { ...state, isCartModalOpen: !state.isCartModalOpen };
  }

  if (action.type === 'CLOSE_CART_MODAL') {
    return { ...state, isCartModalOpen: !state.isCartModalOpen };
  }

  if (action.type === 'ADD_TO_CART') {
    let oldCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload.id
    );

    let newItem = state.data.filter(
      (product) => product.id === action.payload.id
    );
    newItem[0].amount = action.payload.amount;
    const cartItems = oldCart.concat(newItem);

    return {
      ...state,
      cart: cartItems,
      isCartModalOpen: !state.isCartModalOpen,
    };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE_ITEM') {
    const newItems = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    );

    return { ...state, cart: newItems };
  }

  if (action.type === 'INCREMENT') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === 'DECREMENT') {
    let num = (num) => {
      if (num <= 0) {
        return 1;
      }
      return num;
    };

    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: num(cartItem.amount - 1) };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem;
        let itemTotal = amount * price;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  throw new Error('no matching action type');
};

export default reducer;
