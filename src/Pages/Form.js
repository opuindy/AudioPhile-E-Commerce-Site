import React from 'react';
import Header from '../Components/Header/Header';
import FormPage from '../Components/FormContainer/FormPage';

const Form = () => {
  const text = `Payment Details`;
  return (
    <>
      <Header text={text} />
      <FormPage />
    </>
  );
};

export default Form;
