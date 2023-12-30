import React from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  InputGroup,
} from "react-bootstrap";

// Validation schema using Yup
const validationSchema = yup.object().shape({
  expenseType: yup.string().required("Expense type is required"),
  date: yup.date().required("Date is required"),
  amount: yup.number().positive().required("Amount is required"),
  remark: yup.string(),
});

// Expense types options
const expenseTypeOptions = [
  "Travel",
  "Entertainment",
  "Food",
  "Utilities",
  "Other",
];

const ExpenseForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Call the CreateExpense function here
      // Replace with your actual function and logic
      console.log("Submitting expense:", values);
    } catch (error) {
      // Handle errors, you can show an error alert or perform other actions
      console.error("Error submitting expense:", error);
    } finally {
      // Reset the form and setSubmitting to false
      resetForm();
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        expenseType: "",
        date: "",
        amount: "",
        remark: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <BootstrapForm noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <FormGroup as={Col} md="4" controlId="validationFormik01">
              <FormLabel>Expense Type</FormLabel>
              <FormControl
                as="select"
                name="expenseType"
                value={values.expenseType}
                onChange={handleChange}
                isInvalid={touched.expenseType && !!errors.expenseType}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {expenseTypeOptions.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </FormControl>
              <FormControl.Feedback type="invalid">
                {errors.expenseType}
              </FormControl.Feedback>
            </FormGroup>

            <FormGroup as={Col} md="4" controlId="validationFormik02">
              <FormLabel>Date</FormLabel>
              <FormControl
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
                isInvalid={touched.date && !!errors.date}
              />
              <FormControl.Feedback type="invalid">
                {errors.date}
              </FormControl.Feedback>
            </FormGroup>

            <FormGroup as={Col} md="4" controlId="validationFormikUsername">
              <FormLabel>Amount</FormLabel>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                <FormControl
                  type="number"
                  placeholder="Amount"
                  aria-describedby="inputGroupPrepend"
                  name="amount"
                  value={values.amount}
                  onChange={handleChange}
                  isInvalid={touched.amount && !!errors.amount}
                />
                <FormControl.Feedback type="invalid">
                  {errors.amount}
                </FormControl.Feedback>
              </InputGroup>
            </FormGroup>
          </Row>

          <FormGroup className="mb-3">
            <FormLabel>Remark</FormLabel>
            <FormControl
              as="textarea"
              rows={3}
              name="remark"
              value={values.remark}
              onChange={handleChange}
              isInvalid={touched.remark && !!errors.remark}
            />
            <FormControl.Feedback type="invalid">
              {errors.remark}
            </FormControl.Feedback>
          </FormGroup>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Save Expense"}
          </Button>
        </BootstrapForm>
      )}
    </Formik>
  );
};

export default ExpenseForm;
