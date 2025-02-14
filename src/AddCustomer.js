import React, { useState } from "react"
import { Customer } from "./home"
const customerList = [

  {

    id: 1,

    name: 'Joe Smith',

    address: '1 Main Street',

    state: 'IL',

    premium: 123.23,

    product: 'Vehicle',

  },

  {

    id: 2,

    name: 'Jay Jomne',

    address: '2 High Street',

    state: 'CA',

    premium: 222.34,

    product: 'Home',

  },

  {

    id: 3,

    name: 'Ann Suth',

    address: '3 Middle Row',

    state: 'FL',

    premium: 502.15,

    product: 'Vehicle',

  }



];


export function AddCustomer() {

  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    address: "",
    state: "",
    premium: 0,
    product: ""
  })
  const [showList, setShowList] = useState(false)
  const [error, setError] = useState({ required: "", isInt: "",productOption: "" })
  function handleChange(e) {

    if (e.target.name === "premium") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
      if (!/^\d+$/.test(e.target.value)) {
        setError({ required: "", isInt: "Only Integers are allowed", productOption: "" })
      }
      
    }
    else {
     
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
    console.log(formData)
  }
  function handleListButtonClick() {
    setShowList(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (formData.name === "" || formData.address === "" ||
      formData.premium === 0 || formData.product === "" || formData.state === "") {
      setError({ required: "Field is mandatory to be filled", isInt: "", productOption:"" })
      return false;
    }
    // @ts-ignore
    else if(!["Vehicle", "Home"].includes(formData.product)){
      setError({required: "", isInt: "",productOption: "Please type Vehicle or Home in product"})
      return false;
    }
    setError({required: "", isInt: "",productOption: ""})
  

    setShowList(true);
    customerList.push(formData);
    console.log(error.productOption)
 
  }

  return (

    <div style={{ display: "flex", justifyContent: "center" }}>
      {showList === false &&
        <div>
          <div >Add Customer</div>
          <div>
            <form onSubmit={handleSubmit}>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <h6>Name</h6>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {!formData.name ? error.required : null}
                </li>
                <li>
                  <h6>Address</h6>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {!formData.address ? error.required : null}
                </li>
                <li>
                  <h6>StateCode</h6>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  {!formData.state ? error.required : null}
                </li>
                <li>
                  <h6>Premium</h6>
                  <input
                    type="text"
                    name="premium"
                    value={formData.premium}
                    onChange={handleChange}
                  />
                  {formData.premium === 0 ? error.required : null}
                  {error.isInt ? error.isInt : null}
                </li>
                <li>
                  <h6>Product</h6>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                  />
                  {!formData.product ? error.required : null}
                  {error.productOption? error.productOption: null}
                </li>
                <button type="submit"  >Submit</button>
                <button type="reset" onClick={() => setFormData({name: "", address: "", state: "", premium: 0, id: 0, product: ""})}>Cancel</button>
              </ul>
            </form>
          </div>
        </div>
      }
      {showList === true &&
        <div>
          <div >Customer List</div>
          <table>
            <tr style={{ display: "flex", columnGap: "50px" }}>
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
                <td><button onClick={handleListButtonClick}>Add customer</button></td>
              </tr>

            ))}
          </table>
        </div>}
    </div>
  );
}