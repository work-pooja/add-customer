import React, { useState, useEffect } from "react"
import { AddCustomer } from "./AddCustomer";
import react from "react";
import { redirect, useNavigate } from "react-router-dom";

const intialCustomerList = [{
  name: "customer1",
  address: "address1",
  stateCode: "sc1",
  premium: 1,
  product: "product1"
},
];


export function Customer(formData) {
  
  const customerList = useState(
    formData? [...intialCustomerList, formData] : [...intialCustomerList])
  useEffect(() => {
    customerList.push(formData)
  }, [customerList, formData])
  
  //const sortedList = customerList.sort((a, b) =>  a.stateCode.localeCompare(b.stateCode));
  const navigate = useNavigate();
  function handleClick(event) {
    navigate('/add-customer');
  }
  return (
    <div>
      <table>
       <tr style={{ display: "flex" , columnGap: "50px" }}>
          <th>Name</th>
          <th>Address</th>
          <th>StateCode</th>
          <th>Premium</th>
          <th>Product</th>
        </tr>
      {customerList.map((customer, index) => (
        <tr key={index} style={{ display: "flex", columnGap: "70px" }}>
          <td>{customer.name}</td>
          <td>{customer.address}</td>
          <td>{customer.stateCode}</td>
          <td>{customer.premium}</td>
          <td>{customer.product}</td>
          <td><button onClick={handleClick}>Add customer</button></td>
        </tr>

      ))}
  </table>
    </div>
  );
}


