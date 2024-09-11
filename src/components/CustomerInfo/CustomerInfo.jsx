import { useDispatch } from "react-redux";

// Whenever you have a form
// You still need local react variables to track the user input
import { useState } from "react";

const CustomerInfo = () => {

  const dispatch = useDispatch();


  const [newCust, setNewCust] = useState({
    Name: "Mel", 
    Address: "12240 51st Ave N",
    City: "Plymouth",
    Zip: 55442,
    Pickup: "False"
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({ type: 'ADD_CUST', payload: newCust });
    setNewCust({});
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