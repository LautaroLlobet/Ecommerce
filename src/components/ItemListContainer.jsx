import Container from "react-bootstrap/Container";

export const ItemListContainer = (props) => {
  return (
    <>
      <Container className="mt-4">
        <h1>{props.saludo}</h1>
      </Container>
    </>
  );
};
