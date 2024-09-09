import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderList = () => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/pizza')
      .then(response => {
        setPizzas(response.data);
        console.log('Pizzas fetched:', response.data); // Debug fetched data
      })
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);

  const addToCart = (pizza) => {
    if (!cart.some(item => item.id === pizza.id)) {
      setCart([...cart, pizza]);
    }
  };

  const removeFromCart = (pizzaId) => {
    setCart(cart.filter(item => item.id !== pizzaId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + Number(pizza.price || 0), 0);
  };

  const handleNext = () => {
    navigate('/order-list'); // Redirect to the order details page
  };

  return (
    <div>
      <h1>Select Your Pizza</h1>
      <div className="pizza-list">
        {pizzas.map(pizza => (
          <div key={pizza.id} className="pizza-item">
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>${pizza.price}</p>
            {cart.some(item => item.id === pizza.id) ? (
              <button onClick={() => removeFromCart(pizza.id)}>Remove from Cart</button>
            ) : (
              <button onClick={() => addToCart(pizza)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3> {/* Format total as fixed-point number */}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default OrderList;
