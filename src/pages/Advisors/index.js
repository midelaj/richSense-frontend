import { useState, useEffect } from "react";

import Title from "components/Title";
import Card from "./components/Card";

const Advisors = () => {
  const [advisors, setAdvisors] = useState([]);

  useEffect(() => {
    fetchAdvisors();
  }, []);

  const fetchAdvisors = async () => {
    const response = await fetch("http://localhost:8000/advisors");
    const jsonResponse = await response.json();
    setAdvisors(jsonResponse.data);
  };

  return (
    <div>
      <Title
        content="Advisors"
        links={[
          {
            path: "/",
            title: "Home",
          },
          {
            path: "/advisors",
            title: "Advisors",
          },
        ]}
      />
      <div className="dashboard-content">
        <div className="container">
          <div className="bookmarks-content grid-view featured-slider">
            <div className="row">
              {advisors.map((advisor) => (
                <div className="col-lg-4 col-md-4 col-sm-6 " key={advisor._id}>
                  <Card advisor={advisor} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advisors;
