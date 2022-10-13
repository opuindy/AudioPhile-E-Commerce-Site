import React from 'react';
import { ModalContainer } from './modalStyles';
import Category from '../Categories';
import { useGlobalContext } from '../context';

const Modal = () => {
  const { closeModal } = useGlobalContext();
  return (
    <ModalContainer onClick={closeModal}>
      <Category />
    </ModalContainer>
  );
};

export default Modal;
