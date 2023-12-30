import { useState, useEffect } from "react";

import Card from "components/Card";
import { Row, Col, Container } from "react-bootstrap";

const Advisors = () => {
  const [advisors, setAdvisors] = useState([]);

  useEffect(() => {
    fetchAdvisors();
  }, []);

  const fetchAdvisors = async () => {
    const response = await fetch("http://localhost:5000/advisors");
    const jsonResponse = await response.json();
    setAdvisors(jsonResponse.data);
  };



  return (
    <div>
      <Container>
        <Row>
          {advisors.map((advisor) => {
            return (
              <Col className="mb-2">
                <Card advisor={advisor} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default Advisors;
