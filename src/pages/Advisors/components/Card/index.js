import Bscard from "react-bootstrap/Card";

const BsCard = ({ children }) => {
  return (
    <Bscard>
      <Bscard.Body>{children}</Bscard.Body>
    </Bscard>
  );
};

export default BsCard;
