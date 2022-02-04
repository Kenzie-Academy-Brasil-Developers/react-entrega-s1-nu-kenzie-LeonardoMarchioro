const Card = ({ description, type, value, id, removeTransaction, filtro }) => {
  return (
    <div id={id} className={type === "Entrada" ? "cardEntrada" : "cardSaida"}>
      <h2 className="description">{description}</h2>
      <span className="type">{type}</span>
      <span className="value">{value}</span>
      <button
        onClick={(event) => removeTransaction(event.target.parentNode.id)}
      >
        X
      </button>
    </div>
  );
};
export default Card;
