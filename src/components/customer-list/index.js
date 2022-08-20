import React, { useState } from "react";
import "./index.css";

function CustomerList() {
  const [customers, setCustomer] = useState([])
  const [name, setName] = useState()

  const handleCustomers = (e, value) => {
    e.preventDefault();
    setName('')
    setCustomer({ ...customers, value })
  }

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <form onSubmit={e => handleCustomers(e, name)} >
        <section className="layout-row align-items-center justify-content-center">
          <input type="text" className="large" placeholder="Name" data-testid="app-input" onChange={(e) => setName(e.target.value)} />
          <button type="submit" className="ml-30" data-testid="submit-button">Add Customer</button>
        </section>
      </form>

      <ul className="styled mt-50" data-testid="customer-list">
        {customers && customers.map((customer, key) => {
          return (
            <li className="slide-up-fade-in" data-testid={`list-item${key}`} key={`list-item${key}`} >customer</li>
          )
        }
        )
        }

      </ul>
    </div>
  );
}

export default CustomerList