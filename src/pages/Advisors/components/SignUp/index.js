import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { createAdvisorAPI } from "pages/Advisors/api";

const SignUpFormAdvisor = () => {
  const schema = yup.object().shape({
    name: yup.string().default("advisor"),
    age: yup.number().required(),
    experience: yup.number().required(),
    qualification: yup.string().required(),
    fee: yup.number().required(),
    language: yup
      .string()
      .required()
      .oneOf(["english", "malayalam", "hindi"], "Invalid language"),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (advisor, { setSubmitting }) => {
        await createAdvisorAPI(advisor);
        setSubmitting(false);
      }}
      initialValues={{
        name: "advisor",
        age: "",
        experience: "",
        qualification: "",
        fee: "",
        language: "",
        password: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormikName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormikAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={values.age}
                onChange={handleChange}
                isValid={touched.age && !errors.age}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormikExperience">
              <Form.Label>Experience (in years)</Form.Label>
              <Form.Control
                type="number"
                name="experience"
                value={values.experience}
                onChange={handleChange}
                isValid={touched.experience && !errors.experience}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormikQualification"
            >
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                name="qualification"
                value={values.qualification}
                onChange={handleChange}
                isValid={touched.qualification && !errors.qualification}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormikFee">
              <Form.Label>Fee (in INR)</Form.Label>
              <Form.Control
                type="number"
                name="fee"
                value={values.fee}
                onChange={handleChange}
                isValid={touched.fee && !errors.fee}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormikLanguage">
              <Form.Label>Language</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  as="select"
                  name="language"
                  value={values.language}
                  onChange={handleChange}
                  isInvalid={!!errors.language}
                >
                  <option value="" label="Select a language" />
                  <option value="english" label="English" />
                  <option value="malayalam" label="Malayalam" />
                  <option value="hindi" label="Hindi" />
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.language}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormikPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpFormAdvisor;
