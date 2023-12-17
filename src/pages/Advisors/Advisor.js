import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AdvisorDetails = () => {
  const [advisor, setAdvisor] = useState();
  const [loading, setLoading] = useState(true);
  const { advisorId } = useParams();

  useEffect(() => {
    fetchAdvisor();
  }, []);

  const fetchAdvisor = async () => {
    const response = await fetch(`http://localhost:5000/advisors/${advisorId}`);
    const jsonResponse = await response.json();
    setAdvisor(jsonResponse.data);
    setLoading(false);
  };

  if (loading) {
    return "loading";
  }

  return (
    <>
      <div>Name: {advisor.name} </div>
      <div>Age: {advisor.age} </div>
    </>
  );
};

export default AdvisorDetails;
