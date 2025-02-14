import { Customer } from './home';
import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import { AddCustomer } from './AddCustomer';
function App() {
  const userContext = createContext([]);
  return (
    
    <Router>
      <Routes>
        <Route path = "/add-customer" element={<AddCustomer/>}/>
        <Route path='/show-customer' element={<Customer formData/>} />

      </Routes>
    </Router>
  );
}

export default App;
