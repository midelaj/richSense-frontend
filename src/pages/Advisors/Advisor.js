import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchAdvisorAPI } from "./api";
import Appointment from "../Appointment/components/index";

import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Feature_1_svg, Feature_2_svg, Feature_3_svg, Feature_4_svg, Feature_5_svg, Feature_6_svg, Feature_7_svg, Feature_8_svg, GalleryImg1, GalleryImg10, GalleryImg11, GalleryImg2, GalleryImg3, GalleryImg9, ProfileAvatar01, ProfileAvatar02, ProfileAvatar10, ProfileAvatar12, avatar_11, details_icon, gallery_09, gallery_10, gallery_11, gallery_1_jpg, gallery_2_jpg, gallery_3_jpg, gallery_4_jpg, gallery_5_jpg, gallery_6_jpg, gallery_8_jpg, galleryicon, statistic_icon, website } from "components/imagePath";


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
    <div>
        <section className="details-description" style={{
          marginTop: '90px'
        }}>
        <div className="container">
          <div className="about-details">
            <div className="about-headings">
              <div className="author-img">
                <img src={ProfileAvatar10} alt="authorimg" />
              </div>
              <div className="authordetails">
                <h5>{advisor.name}</h5>
                <p>{advisor.qualification}</p>
               
              </div>
            </div>
            <div className="rate-details">
              <h2>₹ {advisor.fee}</h2>
            </div>
          </div>
          <div className="descriptionlinks">
            <Row>
           <Col md={6}>
            
           </Col>
              <Col md={6}>
              <h4 className="mb-4">Book An Appointment</h4>
              <Appointment advisorId={advisor._id} />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>




  );
};

export default AdvisorDetails;
