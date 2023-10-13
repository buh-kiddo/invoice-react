import React from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CreateInvoiceForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        title: '',
        cost_per_page: 0,
        pages_done: 0,
        total_amount_per_job: 0,
        total_amount_for_all_jobs: 0,
        paid_amount: 0,
        advance_amount: 0,
        remaining: 0,
        due_date: '',
        job_status: false,
        order_status: false,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="title" as={TextField} label="Title" fullWidth />
        <Field name="cost_per_page" as={TextField} label="Cost Per Page" type="number" fullWidth />
        <Field name="pages_done" as={TextField} label="Pages Done" type="number" fullWidth />
        <Field name="total_amount_per_job" as={TextField} label="Total Amount Per Job" type="number" fullWidth />
        <Field name="total_amount_for_all_jobs" as={TextField} label="Total Amount For All Jobs" type="number" fullWidth />
        <Field name="paid_amount" as={TextField} label="Paid Amount" type="number" fullWidth />
        <Field name="advance_amount" as={TextField} label="Advance Amount" type="number" fullWidth />
        <Field name="remaining" as={TextField} label="Remaining" type="number" fullWidth />
        <Field name="due_date" as={TextField} label="Due Date" type="datetime-local" fullWidth />
        <FormControlLabel control={<Field name="job_status" as={Checkbox} />} label="Job Status" />
        <FormControlLabel control={<Field name="order_status" as={Checkbox} />} label="Order Status" />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    </Formik>
  );
}

export default CreateInvoiceForm;
