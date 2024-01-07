import { Row, Col } from "react-bootstrap";
import SignInForm from "./components/SignInForm";
import Title from "components/Title";

const SignIn = () => {
  return (
    <>
    <Title content="Sign In" links={[
          {
            path: "/",
            title: "Home",
          },
          {
            path: "/signin",
            title: "Sign in",
          },
        ]}/>
    <Row className="justify-content-md-center">
      <Col>
        <SignInForm />
      </Col>
    </Row>
    </>
  );
};
export default SignIn;
