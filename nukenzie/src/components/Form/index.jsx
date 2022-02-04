import "./styles.css";
import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Entrada");
  const [value, setValue] = useState("");
  const [id, setId] = useState(0);

  function addTransaction() {
    setId(id + 1);
    setListTransactions([
      ...listTransactions,
      {
        description: description,
        type: type,
        value: value,
        id: id,
      },
    ]);
  }

  return (
    <div className="Form">
      <label>Descrição</label>
      <input
        type={"Text"}
        placeholder="Descrição"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <span>Ex: Compra de roupas</span>
      <div className="boxSubmit">
        <div className="valorInput">
          <label>Valor</label>
          <input
            type={"Number"}
            placeholder="Valor"
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
        </div>
        <div className="entradaSelect">
          <label>Tipo de valor</label>
          <select
            name="Tipo de Transação"
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            <option value={"Entrada"}>Entrada</option>
            <option value={"Saida"}>Saída</option>
          </select>
        </div>
      </div>
      <button type="submit" onClick={addTransaction}>
        Inserir valor
      </button>
    </div>
  );
};

export default Form;
