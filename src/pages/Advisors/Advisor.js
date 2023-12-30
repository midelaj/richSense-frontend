import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchAdvisorAPI } from "./api";
import Appointment from "../Appointment/components/index";

import { Row, Col, Container } from "react-bootstrap";

const AdvisorDetails = () => {
  const [advisor, setAdvisor] = useState();
  const [loading, setLoading] = useState(true);

  const {advisorId} = useParams();

  useEffect(() => {
    fetchAdvisor();
  }, []);

  const fetchAdvisor = async () => {
    setLoading(true);
    const advisor = await fetchAdvisorAPI(advisorId);
    setAdvisor(advisor);
    setLoading(false);
  };

  if (loading) {
    return "loading";
  }

  return (
    < Container>
      <Row>
        <Col >{advisor.name}</Col>
        <Col ><Appointment advisorId={advisor._id} /></Col>
      </Row>
    </Container >
  );
};

export default AdvisorDetails;
