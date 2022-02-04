import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      <header></header>
      <main>
        <section className="boxEsquerda">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </section>
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </main>
    </div>
  );
}

export default App;
