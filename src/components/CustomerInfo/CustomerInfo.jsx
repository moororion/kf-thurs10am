import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

// Whenever you have a form
// You still need local react variables to track the user input


const CustomerInfo = () => {

  const dispatch = useDispatch();
  

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({ type: 'ADD_CUST', payload:  });
   
  }

  return (
    <>
      <h2>Customer Info</h2>

      <form onSubmit={handleSubmit}>
        <input type='text' value={newCust} onChange={(evt) => setNewCust(evt.target.value)}></input>
        <button type='submit'>Next</button>
      </form>

    </>
  )
};

export default CustomerInfo;