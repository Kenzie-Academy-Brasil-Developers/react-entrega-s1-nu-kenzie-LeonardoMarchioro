import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [home, setHome] = useState(true);

  return (
    <>
      {home ? (
        <div className="Home-Page">
          <section className="Esquerda">
            <div className="Conteudo-Home">
              <h2 className="Titulo">Nu Kenzie</h2>
              <h1 className="Frase">Centralize o controle das suas finanças</h1>
              <span className="Span-Frase">de forma rápida e segura</span>
              <button onClick={() => setHome(false)} className="Home-Button">
                Iniciar
              </button>
            </div>
          </section>
          <section className="Direita"></section>
        </div>
      ) : (
        <div className="APP-Body">
          <header className="Header-APP">
            <h1 className="Logo">Nu Kenzie</h1>
            <button onClick={() => setHome(true)} className="Back-Home-Button">
              Home
            </button>
          </header>
          <main className="Main-APP">
            <section className="boxEsquerda">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </section>
            <section className="boxDireita">
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </section>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
