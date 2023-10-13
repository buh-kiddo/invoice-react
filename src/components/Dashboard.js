import React, { useState, handleSubmit } from 'react';
import { Link } from 'react-router-dom';
import CreateInvoiceForm from './CreateInvoiceForm'; // Import the CreateInvoiceForm component

function Dashboard() {
  const [showCreateInvoiceForm, setShowCreateInvoiceForm] = useState(false);

  const toggleCreateInvoiceForm = () => {
    setShowCreateInvoiceForm(!showCreateInvoiceForm);
  };

  return (
    <div className="dashboard">
      <h2>Welcome to the Invoice Application</h2>
      <p>What would you like to do?</p>
      <ul>
        <li>
          <button onClick={toggleCreateInvoiceForm}>Create New Invoice</button>
        </li>
        <li>
          <Link to="/my-invoices">Show All My Invoices</Link>
        </li>
      </ul>

      {showCreateInvoiceForm && (
        <div>
          <h3>Create a New Invoice</h3>
          <CreateInvoiceForm onSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
