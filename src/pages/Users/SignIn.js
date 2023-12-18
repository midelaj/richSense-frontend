import { Row, Col } from "react-bootstrap";
import SignInForm from "./components/SignInForm";

const SignIn = () => {
  return (
    <Row className="justify-content-md-center">
      <Col md={6}>
        <SignInForm />
      </Col>
    </Row>
  );
};
export default SignIn;
