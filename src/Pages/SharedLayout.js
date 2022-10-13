import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle, Section } from './sharedLayoutStyled';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Modal from '../Components/Modal';
import CartComponent from '../Components/CartComponent/Cart';
import { useGlobalContext } from '../Components/context';

const SharedLayout = () => {
  const { isModalOpen, isCartModalOpen } = useGlobalContext();
  return (
    <>
      <GlobalStyle />
      {isModalOpen && <Modal />}
      {isCartModalOpen && <CartComponent />}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
