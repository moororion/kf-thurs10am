import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import OrderForm from  '../OrderForm/OrderForm';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import { useDispatch } from 'react-redux';



function App() {

  const dispatch = useDispatch();

  //get Pizza's to display from server when page loads

  useEffect(() => {
    console.log('in use effect');
    refreshPizza();
  }, []);

  //* KEEP THIS METHOD IN APP, IT WILL BE USED BY MULTIPLE COMPONENTS 
  //* DONT REPEAT IN THIS CODE 

  const refreshPizza = () => {
axios({
  method: "GET",
  url: '/api/pizza'

})
.then((response) => {
  console.log(response.data)
  dispatch({ type: "ADD_THE_PIZZA", paylood: response.data });

})
.catch((err) => {
  console.log('error during GET', err);

});
  };



  return (
    <div className='App'>
             <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
    
      <CustomerInfo />
       
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
     
      <OrderForm refreshPizza={refreshPizza} />
  
    </div>
  );
}

export default App;
