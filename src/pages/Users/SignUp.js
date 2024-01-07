import { Row, Col } from "react-bootstrap";
import SignUpForm from "./components/SignUpForm";
import Title from "components/Title";

const SignUp = () => {
  return (
    <>
      <Title
        content="Signup to RichSense"
        links={[
          {
            path: "/",
            title: "Home",
          },
          {
            path: "/signup",
            title: "Sign up",
          },
        ]}
      />
      <Row className="justify-content-md-center">
        <Col>
          <SignUpForm />
        </Col>
      </Row>
    </>
  );
};
export default SignUp;
