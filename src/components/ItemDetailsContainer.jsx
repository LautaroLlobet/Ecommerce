import data from "../data/juegos.json";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(data), 2000))
      .then((response) => {
        const finded = response.find((i) => i.id === Number(id));
        setItem(finded);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return "Espere";

  return (
    <Container className="mt-4 carta">
      <h1>{item.name}</h1>
      <h2>{item.category}</h2>
      <img src={item.pictureUrl} alt="portada del juego" />
      <h3>{item.description}</h3>
      <h4>${item.price}</h4>
    </Container>
  );
};
