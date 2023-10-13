// EditInvoice.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditInvoice() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    // Implement code to fetch the invoice with the specified ID from the server and set it to the 'invoice' state.
    // You can use Axios or another HTTP library for this.

    // Example:
    // axios.get(`http://127.0.0.1:8000/invoice/${id}`)
    //   .then((response) => setInvoice(response.data))
    //   .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h3>Edit Invoice</h3>
      {invoice && (
        <form>
          {/* Display the details of the invoice and allow editing */}
          <div>Order Number: {invoice.order_number}</div>
          <div>Title: {invoice.title}</div>
          {/* Add form fields for editing invoice details */}
          {/* Add an update button to submit changes */}
        </form>
      )}
    </div>
  );
}

export default EditInvoice;
