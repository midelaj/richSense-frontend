import { Link } from "react-router-dom";

const Title = ({ content, links = [] }) => {
  return (
    <div className="breadcrumb-bar">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title">{content}</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                {links.map((link, index) => (
                  <li className="breadcrumb-item" key={index}>
                    <Link to={link.path || "#"}>{link.title}</Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
