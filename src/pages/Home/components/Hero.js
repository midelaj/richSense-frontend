import {
  BannerImg4
} from "components/imagePath";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return ( 
    <section className="banner-section banner-four">
    <div className="container">
      <div className="home-banner">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-search aos" data-aos="fade-up">
              <h6>Now</h6>
              <h1>Connect, Consult, Conquer with RichSense</h1>
              <p></p>
              
              <Button as={Link} to="/advisors" className="btn-secondary me-2">Advisors</Button>
              <Button as={Link} to="/goals" className="btn-danger">Goals</Button>
            </div>
            <div className="banner-imgs aos" data-aos="fade-up">
              <img
                src={BannerImg4}
                className="img-fluid"
                alt="bannerimage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   );
}
 
export default Hero;