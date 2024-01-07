import {
  CategoryIcon13,
  CategoryIcon14,
  CategoryIcon15,
  ProfileAvatar02,
  ProfileAvatar03,
  ProfileAvatar04,
  ProfileAvatar05,
  Work1,
  Work2,
  Work3,
  Work4,
} from "components/imagePath";
import Card from "pages/Advisors/components/Card";
import { Link } from "react-router-dom";

const Popular = () => {
  return ( 
    <section className="space-section">
    <div className="container">
      <div className="space-sec">
        <div className="row">
          <div className="col-md-8">
            <div
              className="section-heading heading-four aos"
              data-aos="fade-up"
            >
              <h2>Popular Advisors</h2>
              <p>Popular advisors near you</p>
            </div>
          </div>
          <div className="col-md-4 text-md-end aos" data-aos="fade-up">
            <div className="interset-btn">
              <Link
                to="/advisors"
                className="btn btn-primary more-btn"
              >
                View More <i className="feather-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">

          {/* add map here here */}
          <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
            <Card featured/>
          </div>
        </div>
      </div>
    </div>
  </section>
   );
}
 
export default Popular;