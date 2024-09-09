import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderList from '../OrderList/OrderList';
import axios from 'axios';
import './App.css';
function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>

        <img src='images/pizza_photo.png' alt='Pizza' />
        <p>Pizza is great.</p>

        <Routes>
          <Route path="/" element={<OrderList />} /> {/* Default route to OrderList */}
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
