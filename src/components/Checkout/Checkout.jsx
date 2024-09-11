import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cart = useSelector(state => state.cart.pizzas);
  const total = useSelector(state => state.cart.total);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const orderData = {
      total,
      pizzas: cart,
    };

    axios.post('/api/checkout', orderData)
      .then(response => {
        navigate('/'); 
      })
      .catch(error => {
        console.error('Error during checkout:', error);
      });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div className="order-summary">
        <h2>Your Order</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map(pizza => (
              <li key={pizza.id}>
                {pizza.name} - ${pizza.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <h3>Total: ${typeof total === 'number' ? total.toFixed(2) : 0}</h3>
      </div>
      <button onClick={handleCheckout}>Complete Checkout</button>
    </div>
  );
};

export default Checkout;
