import { Formik } from "formik";
import { Form, Button, Row, Col } from "react-bootstrap";
import { SignUp } from "pages/Users/api";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div>
      <h1>Sing up to RichSense</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={async (user, { setSubmitting }) => {
          await SignUp(user);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </Form.Group>
            {errors.email && touched.email && errors.email}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </Form.Group>
            {errors.password && touched.password && errors.password}
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>

            <Row className="mt-4">
              <Col
                xs={12}
                md={6}
                className="mb-2 mb-md-0 text-center text-md-left"
              >
                {/* Use the Link component for navigation */}
                <Link to="/signUp-advisors" className="signup-link">
                  Sign Up as Advisor
                </Link>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
