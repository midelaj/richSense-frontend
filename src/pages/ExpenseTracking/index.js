import React from "react";
import { Formik, Form } from "formik";
import { CreateExpense } from "./api"; // Assuming CreateExpense is the function to create an expense
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
} from "react-bootstrap";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  expenseType: Yup.string().required("Expense type is required"),
  date: Yup.date().required("Date is required"),
  amount: Yup.number().positive().required("Amount is required"),
  remark: Yup.string(),
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
      await CreateExpense(values);

      // Handle success, you can show an alert or perform other actions
      console.log("Expense submitted successfully!");
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
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
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
            {({ isSubmitting }) => (
              <Form as={BootstrapForm}>
                {/* ... (existing form fields) */}

                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Save Expense"}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpenseForm;
