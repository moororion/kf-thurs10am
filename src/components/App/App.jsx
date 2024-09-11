import React from 'react';
import axios from 'axios';
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
  
    </div>
  );
}

export default App;
