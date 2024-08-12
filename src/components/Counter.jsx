import { useState, useEffect } from "react";

const Counter = () => {
  const [numero, setnumero] = useState(0); //se usa como inicio del variable

  const sumar = () => {
    setnumero(numero + 1);
    console.log(numero);
  };

  const [mostrar, setmostrar] = useState(true);

  function Mostrar() {
    setmostrar(!mostrar);
  }
  //---------------------
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);

    //---------------------

    useEffect(() => {
      console.log("blabalblala");
    }, []);
  };
  return (
    <>
      <h2>{numero}</h2>
      <button type="button" onClick={sumar}>
        sumar
      </button>
      <hr />
      <button onClick={Mostrar}>
        {mostrar === true ? "ocultar" : "mostrar"}
      </button>
      {mostrar === true && <h1>hola mundo</h1>}
      <hr />
      <input type="text" onChange={handleText} />
      <h2>{text}</h2>
    </>
  );
};

export default Counter;
