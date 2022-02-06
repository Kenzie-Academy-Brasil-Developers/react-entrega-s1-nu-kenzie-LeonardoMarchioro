import "./styles.css";

const TotalMoney = ({ listTransactions }) => {
  const value = listTransactions
    .filter((item) => item.type === "Entrada")
    .reduce((itemAnt, itemAtual) => {
      return itemAnt + parseFloat(itemAtual.value);
    }, 0);

  return (
    listTransactions.length !== 0 && (
      <div className="Total-Money">
        <span>Valor total:</span>
        <span>$ {value.toFixed(2)}</span>
      </div>
    )
  );
};

export default TotalMoney;
