import React from 'react';
import CreateInvoiceForm from './CreateInvoiceForm';

function CreateInvoice() {
  // Handle form submission (POST request to your API)
  const handleSubmit = (values) => {
    // Make a POST request to your API with the form values
    fetch('http://127.0.0.1:8000/invoice/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response as needed
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Create a New Invoice</h2>
      <CreateInvoiceForm onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateInvoice;
