import Container from "react-bootstrap/Container";
import data from "../data/juegos.json";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";

console.log(data);

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => setTimeout(resolve(data), 2000))
      .then((response) => {
        if (!id) {
          setItems(response);
        } else {
          const filtered = response.filter((i) => i.category === id);
          setItems(filtered);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "Espere";

  return (
    <>
      <Container className="mt-4 gap-3">
        {items.map((i) => (
          <Card key={i.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={i.pictureUrl} />
            <Card.Body>
              <Card.Title>{i.name}</Card.Title>
              <Card.Text>{i.category}</Card.Text>
              <Card.Text>{i.description}</Card.Text>
              <Link to={`/item/${i.id}`}>
                <Button variant="primary">Detalles</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};
