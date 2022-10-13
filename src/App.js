import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import HeadPhones from './Pages/HeadPhones';
import Speakers from './Pages/Speakers';
import Earphones from './Pages/Earphones';
import Error from './Pages/Error';
import Form from './Pages/Form';
import Singleproduct from './Pages/Singleproduct';
import SharedLayout from './Pages/SharedLayout';
import ScrollToTop from './Components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='headphones' element={<HeadPhones />} />
          <Route path='speakers' element={<Speakers />} />
          <Route path='earphones' element={<Earphones />} />
          <Route path='product/:productId' element={<Singleproduct />} />
          <Route path='checkout' element={<Form />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
