import { Link } from "react-router-dom";
import {
  CategoryIcon13,
  ProfileAvatar02,
  Work1,
} from "components/imagePath";
import { IoLanguageOutline } from "react-icons/io5";


const Card = ({advisor={}, featured=false}) => {
  return ( 
    <div className="space-wrap">
    <div className="space-img">
    <Link to={`/advisors/${advisor._id}`}>
        <img src={Work1} className="img-fluid" alt="blog-img" />
      </Link>
      {featured && (
        <div className="fav-item">
        <span className="featured-text">Featured</span>
      </div>
      )}
      
    </div>
    <div className="space-content">
     
      <h5>
        <Link to={`/advisors/${advisor._id}`}>{advisor.name}</Link>
      </h5>
      <ul>
        <li className="addr">
        <IoLanguageOutline/> {advisor.language}
        </li>
      </ul>
      <div className="price">
        <img
          src={ProfileAvatar02}
          className="img-fluid"
          alt="img"
        />
        <span>₹500</span>
      </div>
    </div>
  </div>
   );
}
 
export default Card;