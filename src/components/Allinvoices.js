import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllInvoices() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch all invoices when the component mounts.
    axios.get('http://127.0.0.1:8000/invoice/all')
      .then((response) => {
        // Set the fetched data to the 'invoices' state.
        setInvoices(response.data);
      })
      .catch((error) => {
        console.error('Error fetching invoices:', error);
      });
  }, []);

  return (
    <div>
      <h3>All Invoices</h3>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <div>Order Number: {invoice.order_number}</div>
            <div>Title: {invoice.title}</div>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllInvoices;
