const TotalMoney = ({ listTransactions }) => {
  const value = listTransactions.reduce((itemAnt, itemAtual) => {
    return itemAnt + parseFloat(itemAtual.value);
  }, 0);

  return (
    <div>
      <span>Valor total:</span>
      <span>$ {value.toFixed(2)}</span>
    </div>
  );
};

export default TotalMoney;
