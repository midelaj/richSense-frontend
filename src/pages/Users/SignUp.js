import { Row, Col } from "react-bootstrap";
import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
  return (
    <Row className="justify-content-md-center">
      <Col md={6}>
        <SignUpForm />
      </Col>
    </Row>
  );
};
export default SignUp;
