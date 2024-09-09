import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const OrderList = () => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/api/pizza')
      .then(response => setPizzas(response.data))
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
    return cart.reduce((total, pizza) => total + pizza.price, 0);
  };

  const handleNext = () => {
    dispatch({
      type: 'SET_CART',
      payload: {
        pizzas: cart,
        total: calculateTotal(),
      },
    });
    navigate('/checkout'); 
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
        <h3>Total: ${calculateTotal()}</h3>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default OrderList;
