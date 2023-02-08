import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ArrayCompito from "../jsonfiles/scifi.json";

function CardsFantasy() {
  return ArrayCompito.map((book) => {
    return (
      <div class="col">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>prezzo: {book.price} €</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>asin {book.asin} </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Link al Libro</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  });
}

export default CardsFantasy;
