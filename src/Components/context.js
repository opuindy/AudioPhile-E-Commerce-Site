import React, { useEffect, useContext, useReducer } from 'react';
import data from '../data.json';
import reducer from './reducer';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

const AppContext = React.createContext();
const initialState = {
  isModalOpen: false,
  data: data,
  cart: getLocalStorage(),
  windowWidth: window.innerWidth,
  amount: 0,
  total: 0,
  isCartModalOpen: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headPhones = state.data.filter(
    (product) => product.category === 'headphones'
  );
  const speakers = state.data.filter(
    (product) => product.category === 'speakers'
  );

  const earphones = state.data.filter(
    (product) => product.category === 'earphones'
  );

  const handleSize = () => {
    dispatch({ type: 'HANDLE_SIZE' });
  }
  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  const openModal = () => {
    dispatch({ type: 'OPEN_MODAL' });
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const openCartModal = () => {
    dispatch({ type: 'OPEN_CART_MODAL' });
  };

  const closeCartModal = () => {
    dispatch({ type: 'CLOSE_CART_MODAL' });
  };

  const addToCart = (id, amount) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, amount } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const increment = (id) => {
    dispatch({ type: 'INCREMENT', payload: id });
  };

  const decrement = (id) => {
    dispatch({ type: 'DECREMENT', payload: id });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        openModal,
        closeModal,
        headPhones,
        speakers,
        earphones,
        openCartModal,
        closeCartModal,
        addToCart,
        clearCart,
        increment,
        decrement,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
