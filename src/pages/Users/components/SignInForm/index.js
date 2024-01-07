import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { SignIN } from "pages/Users/api";
import useAuth from "hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setToken } from "utils/storage";

const SignInForm = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
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
          setSubmitting(true);
          const response = await SignIN(user);
          setAuth({
            isLoggedIn: true,
            user: response.user,
          });
          setToken(response.token);
          toast.success("Logged in successfully");
          navigate("/advisors/:advisorId/appointments");
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
          <div className="login-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-5 mx-auto">
                  <div className="login-wrap">
                    <div className="login-header">
                      <h3>Welcome Back</h3>
                      <p>Please Enter your Details</p>
                    </div>

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
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
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
                      <div className="d-grid">
                      <Button type="submit" disabled={isSubmitting}>
                        Submit
                      </Button>
                      </div>

                      <div className="text-center mt-2">
                      <Link to="/signIn-advisors" className="signup-link">
                        Sign In as Advisor
                      </Link>
                      </div>


                   
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
