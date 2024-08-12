import cart from "../assets/carrito-de-compras.png";

export const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="carrito" height={24} />{" "}
      <span className="numero">Carrito</span>
    </>
  );
};
