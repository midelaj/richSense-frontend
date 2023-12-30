import Button from "react-bootstrap/Button";
import Bscard from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Card = ({ advisor }) => {
  return (
    <Bscard>
      <Bscard.Img variant="top" src="https://placehold.co/600x400/png" />
      <Bscard.Body>
        <Bscard.Title>{advisor.name}</Bscard.Title>
        <Bscard.Text>{advisor.age}</Bscard.Text>
        <Button variant="primary" as={Link} to={`/advisors/${advisor._id}`}>
          go
        </Button>
      </Bscard.Body>
    </Bscard>
  );
};

export default Card;
