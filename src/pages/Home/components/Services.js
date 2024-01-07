import { Link } from "react-router-dom";
import {
  Cowork1,
  Cowork2,
  Cowork3,
} from "components/imagePath";

const Services = () => {
  return ( 
    <section className="cowork-section">
    <div className="container">
      <div className="cowork-sec">
        <div className="row">
          <div className="col-md-8">
            <div
              className="section-heading heading-four aos"
              data-aos="fade-up"
            >
              <h2>What Are You interested in?</h2>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 aos" data-aos="fade-up">
            <div className="cowork-box">
              <Link to="/service-details">
                <div className="cowork-img">
                  <img src={Cowork1} className="img-fluid" alt="img" />
                </div>
              </Link>
              <div className="cowork-info">
                <h5>
                  <Link to="/advisors">Finacial Advice</Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 aos" data-aos="fade-up">
            <div className="cowork-box">
              <Link to="/service-details">
                <div className="cowork-img">
                  <img src={Cowork2} className="img-fluid" alt="img" />
                </div>
              </Link>
              <div className="cowork-info">
                <h5>
                  <Link to="/goals">Track Goals</Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 aos" data-aos="fade-up">
            <div className="cowork-box">
              <Link to="/service-details">
                <div className="cowork-img">
                  <img src={Cowork3} className="img-fluid" alt="img" />
                </div>
              </Link>
              <div className="cowork-info">
                <h5>
                  <Link to="/expenses">Track Expense</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   );
}
 
export default Services;