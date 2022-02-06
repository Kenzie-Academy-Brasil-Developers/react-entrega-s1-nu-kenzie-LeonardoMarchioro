import "./styles.css";

const Card = ({ description, type, value, id, removeTransaction }) => {
  const newValue = value.toFixed(2);

  return (
    <div id={id} className={type === "Entrada" ? "cardEntrada" : "cardSaida"}>
      <div className="types">
        <h2 className="description">{description}</h2>
        <span className="type">{type}</span>
      </div>

      <span className="value">R$ {newValue}</span>
      <button
        className="button-remove"
        onClick={(event) => removeTransaction(event.target.parentNode.id)}
      ></button>
    </div>
  );
};
export default Card;
