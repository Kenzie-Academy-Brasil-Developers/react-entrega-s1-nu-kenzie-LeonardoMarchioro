import { useState } from "react";
import Card from "../Card";

const List = ({ listTransactions, setListTransactions }) => {
  const [Filter, setFilter] = useState("Todos");

  function removeTransaction(id) {
    setListTransactions(listTransactions.filter((item) => item.id != id));
  }
  function FilterCards(filterSelec) {
    setFilter(filterSelec);
  }

  return (
    <section className="List">
      <div className="List-Header">
        <h1>Resumo financeiro</h1>
        <nav className="Nav-Filters">
          <button
            value={"Todos"}
            onClick={(event) => {
              FilterCards(event.target.value);
            }}
          >
            Todos
          </button>
          <button
            value={"Entrada"}
            onClick={(event) => {
              FilterCards(event.target.value);
            }}
          >
            Entradas
          </button>
          <button
            value={"Saida"}
            onClick={(event) => {
              FilterCards(event.target.value);
            }}
          >
            Saídas
          </button>
        </nav>
      </div>

      {listTransactions.map((transaction, index) => {
        return (
          <Card
            key={index}
            description={transaction.description}
            type={transaction.type}
            value={transaction.value}
            id={transaction.id}
            removeTransaction={removeTransaction}
            filtro={Filter}
          />
        );
      })}
    </section>
  );
};
export default List;
