import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { format } from "currency-formatter";

import * as Yup from "yup";
import {
  Button,
  Col,
  Container,
  Form as BootstrapForm,
  Row,
  Alert,
} from "react-bootstrap";
import Title from "components/Title";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  targetAmount: Yup.number().positive().required("Target amount is required"),
  annualInterestRate: Yup.number()
    .positive()
    .required("Annual interest rate is required"),
  durationInYears: Yup.number()
    .positive()
    .required("Investment duration is required"),
});

// Function to calculate monthly investment amount
const calculateMonthlyInvestment = (
  targetAmount,
  annualInterestRate,
  durationInYears
) => {
  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const compoundingFrequency = 12;
  const totalCompoundingPeriods = durationInYears * compoundingFrequency;

  return (
    (targetAmount * monthlyInterestRate) /
    (Math.pow(1 + monthlyInterestRate, totalCompoundingPeriods) - 1)
  );
};

const GoalsCalculator = () => {
  const initialValues = {
    targetAmount: "",
    annualInterestRate: "",
    durationInYears: "",
  };

  const [monthlyInvestment, setMonthlyInvestment] = useState(null);

  const onSubmit = (values) => {
    const result = calculateMonthlyInvestment(
      values.targetAmount,
      values.annualInterestRate,
      values.durationInYears
    );
    setMonthlyInvestment(result);
  };

  return (
    <>
      <Title
        content="Expenses"
        links={[
          {
            path: "/",
            title: "Home",
          },
          {
            path: "/goals",
            title: "Goals",
          },
        ]}
      />
      <div className="dashboard-content">
          <Container>
            <Row className="justify-content-center">
              <Col md={8}>
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}
                >
                  <Form as={BootstrapForm}>
                    <BootstrapForm.Group controlId="targetAmount" className="mb-3">
                      <BootstrapForm.Label>Target Amount</BootstrapForm.Label>
                      <Field
                        type="number"
                        name="targetAmount"
                        placeholder="Enter target amount"
                        as={BootstrapForm.Control}
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="annualInterestRate" className="mb-3">
                      <BootstrapForm.Label>
                        Annual Interest Rate (%)
                      </BootstrapForm.Label>
                      <Field
                        type="number"
                        name="annualInterestRate"
                        placeholder="Enter annual interest rate"
                        as={BootstrapForm.Control}
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="durationInYears" className="mb-3">
                      <BootstrapForm.Label>
                        Investment Duration (Years)
                      </BootstrapForm.Label>
                      <Field
                        type="number"
                        name="durationInYears"
                        placeholder="Enter investment duration"
                        as={BootstrapForm.Control}
                      />
                    </BootstrapForm.Group>

                    <Button variant="primary" type="submit">
                      Calculate
                    </Button>
                  </Form>
                </Formik>

                {monthlyInvestment !== null && (
                  <Alert variant="success" className="mt-3">
                    Monthly Investment Amount: ₹{monthlyInvestment.toFixed(2)}
                  </Alert>
                )}
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
};

export default GoalsCalculator;
