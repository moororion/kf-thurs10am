import { useDispatch } from "react-redux";

// Whenever you have a form
// You still need local react variables to track the user input
import { useState } from "react";

const OrderForm = () => {

  const dispatch = useDispatch();


  const [pizza, setPizza] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({ type: 'PIZZA_ADD', payload: pizza });
    setPizza('');
  }

  return (
    <>
      <h2>Order Form</h2>

      <form onSubmit={handleSubmit}>
        <input type='text' value={pizza} onChange={(evt) => setPizza(evt.target.value)}></input>
        <button type='submit'>Submit Order</button>
      </form>

    </>
  )
};

export default OrderForm;
