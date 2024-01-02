// ApiComponent.js
import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { fetchAdvisorAppointmentAPI } from "pages/Advisors/api";
import { useParams } from "react-router-dom";

const AdvisorAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { advisorId } = useParams();

  useEffect(() => {
    fetchAppointments(advisorId);
  }, [advisorId]);
  const fetchAppointments = async (id) => {
    try {
      const response = await fetchAdvisorAppointmentAPI(id);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setAppointments(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Row>
            {appointments.map((appointment) => (
              <Col className="mb-2" key={appointment.id}>
                <Card appointment={appointment} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default AdvisorAppointment;

