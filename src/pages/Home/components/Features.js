import {
  CategoryIcon1,
  CategoryIcon2,
  CategoryIcon3,
} from "components/imagePath";

const Features = () => {
  return ( 
    <section className="category-four-section">
    <div className="container">
      <div className="category-sec">
        <div className="row">
          <div
            className="col-lg-3 col-md-6 col-sm-6 d-flex aos"
            data-aos="fade-up"
          >
            <div className="category-box flex-fill">
              <span>
                <img src={CategoryIcon1} className="img-fluid" alt="img" />
              </span>
              <div className="category-info">
                <h6>Extraordinarily Easy</h6>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-6 d-flex aos"
            data-aos="fade-up"
          >
            <div className="category-box flex-fill">
              <span>
                <img src={CategoryIcon2} className="img-fluid" alt="img" />
              </span>
              <div className="category-info">
                <h6>Truly Transparent</h6>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-6 d-flex aos"
            data-aos="fade-up"
          >
            <div className="category-box flex-fill">
              <span>
                <img src={CategoryIcon3} className="img-fluid" alt="img" />
              </span>
              <div className="category-info">
                <h6>Fantastically Free</h6>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-6 d-flex aos"
            data-aos="fade-up"
          >
            <div className="category-box flex-fill">
              <span>
                <img src={CategoryIcon2} className="img-fluid" alt="img" />
              </span>
              <div className="category-info">
                <h6>Convenient Place</h6>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   );
}
 
export default Features;