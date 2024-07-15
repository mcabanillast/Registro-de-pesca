import React, { useState, ChangeEvent } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "@mui/material/Card";

export interface EffortData {
  lan_data: string;
  rec_data: string;
}
export interface FormDatax {
  nome_emb: string;
  emp_armador: string;
  saida_porto: string;
  saida_data: string;
  chegada_porto: string;
  chegada_data: string;
  lance: string;
  effort1: EffortData;
  effort2: EffortData;
}

const effortTemplate: EffortData = {
  lan_data: "",
  rec_data: "",
};

const initialState: FormDatax = {
  nome_emb: "",
  emp_armador: "",
  saida_porto: "",
  saida_data: "",
  chegada_porto: "",
  chegada_data: "",
  lance: "",
  effort1: effortTemplate,
  effort2: effortTemplate,
};

const App: React.FC<{}> = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEffortChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const effortKey = name.split(".")[1];
    setFormData((prevState) => ({
      ...prevState,
      [`effort1`]: {
        ...prevState[`effort1`],
        [effortKey]: value,
      },
    }));
  };

  const handleEffortChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const effortKey = name.split(".")[1];
    setFormData((prevState) => ({
      ...prevState,
      [`effort2`]: {
        ...prevState[`effort2`],
        [effortKey]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="mt-2">Sistema de Mapa de Bordo</h2>
        <form onSubmit={handleSubmit}>
          <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
            <p>A. IDENTIFICAÇÃO</p>
            <div className="row">
              <div className="col-6">
                <label>
                  Nome da Embarcação:
                  <input
                    type="text"
                    name="nome_emb"
                    value={formData.nome_emb}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="col-6">
                <label>
                  Empresa/Armador:
                  <input
                    type="text"
                    name="emp_armador"
                    value={formData.emp_armador}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </Card>
          <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
            <p>B. DADOS DE ESFORÇO</p>
          </Card>
          <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
            <div className="row">
              <div className="col-4">Discriminação</div>
              <div className="col-4">Lançamento</div>
              <div className="col-4">Recolhimento</div>
            </div>
            <div className="row">
              <div className="col-4">Data (dia/mês)</div>
              <div className="col-4">
                <input
                  type="text"
                  name="effort1.lan_data"
                  value={formData.effort1.lan_data}
                  onChange={(e) => handleEffortChange1(e)}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  name="effort1.rec_data"
                  value={formData.effort1.rec_data}
                  onChange={(e) => handleEffortChange1(e)}
                />
              </div>
            </div>
          </Card>
          <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
            <div className="row">
              <div className="col-4">Discriminação</div>
              <div className="col-4">Lançamento</div>
              <div className="col-4">Recolhimento</div>
            </div>
            <div className="row">
              <div className="col-4">Data (dia/mês)</div>
              <div className="col-4">
                <input
                  type="text"
                  name="effort2.lan_data"
                  value={formData.effort2.lan_data}
                  onChange={(e) => handleEffortChange2(e)}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  name="effort2.rec_data"
                  value={formData.effort2.rec_data}
                  onChange={(e) => handleEffortChange2(e)}
                />
              </div>
            </div>
          </Card>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default App;
