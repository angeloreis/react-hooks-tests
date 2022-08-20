import React, { useState } from "react";
import "./index.css";

function CustomerList() {
  const [customers, setCustomer] = useState([])
  const [name, setName] = useState('')

  const handleCustomers = (e) => {
    e.preventDefault();
    name !== '' && setCustomer([...customers, name])
    setName('')
  }

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value)
  }

  return (
    <form onSubmit={handleCustomers} >
      <div className="mt-75 layout-column justify-content-center align-items-center">
        <section className="layout-row align-items-center justify-content-center">
          <input
            type="text"
            className="large"
            placeholder="Name"
            data-testid="app-input"
            value={name}
            onChange={(e) => handleName(e)} />
          <button type="submit" className="ml-30" data-testid="submit-button">Add Customer</button>
        </section>

        {customers.length > 0 && (
          <ul className="styled mt-50" data-testid="customer-list">
            {customers.map((customer, key) => {
              return (
                <li
                  className="slide-up-fade-in"
                  data-testid={`list-item${key}`}
                  key={`list-item${key}`}>
                  {customer}
                </li>
              )
            }
            )
            }
          </ul>
        )}
      </div>
    </form>
  );
}

export default CustomerList