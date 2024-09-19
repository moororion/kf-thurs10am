import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderList from '../OrderList/OrderList';
import Checkout from '../Checkout/Checkout';
import './App.css';
import OrderForm from  '../OrderForm/OrderForm';
import CustomerInfo from '../CustomerInfo/CustomerInfo';



function App() {
  return (


    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <CustomerInfo />

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <OrderForm />
    <Routes>
          <Route path="/" element={<OrderList />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </div>
  </Router>

  );
}

export default App;
