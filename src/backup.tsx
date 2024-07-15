import React, { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "@mui/material/Card";

const effortTemplate: EffortData = {
  lan_data: "",
  lan_hr_ini: "",
  lan_hr_fin: "",
  nro_anz: "",
  nro_samb: "",
  temp: "",
  prof: "",
  lan_lat_ini: "",
  lan_long_ini: "",
  isca: "",
  ls: "",
  rec_data: "",
  rec_hr_ini: "",
  rec_hr_fin: "",
  rec_lat_ini: "",
  rec_long_ini: "",
};

interface EffortData {
  lan_data: string;
  lan_hr_ini: string;
  lan_hr_fin: string;
  nro_anz: string;
  nro_samb: string;
  temp: string;
  prof: string;
  lan_lat_ini: string;
  lan_long_ini: string;
  isca: string;
  ls: string;
  rec_data: string;
  rec_hr_ini: string;
  rec_hr_fin: string;
  rec_lat_ini: string;
  rec_long_ini: string;
}
interface FormDatax {
  nome_emb: string;
  emp_armador: string;
  saida_porto: string;
  saida_data: string;
  chegada_porto: string;
  chegada_data: string;
  lance: string;
  effort1: EffortData;
  effort2: EffortData;
  effort3: EffortData;
}

const App: React.FC<{}> = () => {
  const [formData, setFormData] = useState<FormDatax>({
    nome_emb: "",
    emp_armador: "",
    saida_porto: "",
    saida_data: "",
    chegada_porto: "",
    chegada_data: "",
    lance: "",
    effort1: effortTemplate,
    effort2: effortTemplate,
    effort3: effortTemplate,
  });

  const [response, setResponse] = useState<any>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append(
      "cod_lance",
      formData.nome_emb + formData.saida_porto + formData.lance
    );
    formDataToSend.append("cod_MB", formData.nome_emb + formData.saida_porto);
    formDataToSend.append("nome_emb", formData.nome_emb);
    formDataToSend.append("emp_armador", formData.emp_armador);
    formDataToSend.append("saida_porto", formData.saida_porto);
    formDataToSend.append("saida_data", formData.saida_data);
    formDataToSend.append("chegada_porto", formData.chegada_porto);
    formDataToSend.append("chegada_data", formData.chegada_data);
    formDataToSend.append("lance", formData.lance);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxPyjk8-dONBC2yGAzp20pIkhsVFnbsxrhFgsVIYUyL5TpuJaF6op_VjgQH7g_5Cdk24Q/exec",
        {
          method: "POST",
          redirect: "follow",
          body: formDataToSend,
        }
      );
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
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
            <div className="row">
              <div className="col-6">
                <label>
                  Porto de Saída:
                  <input
                    type="text"
                    name="saida_porto"
                    value={formData.saida_porto}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="col-6">
                <label>
                  Porto de Chegada:
                  <input
                    type="text"
                    name="chegada_porto"
                    value={formData.chegada_porto}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>
                  Data de Saída:
                  <input
                    type="text"
                    name="saida_data"
                    value={formData.saida_data}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="col-6">
                <label>
                  Data de Chegada:
                  <input
                    type="text"
                    name="chegada_data"
                    value={formData.chegada_data}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </Card>
          <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
            <p>B. DADOS DE ESFORÇO</p>

            <div className="row">
              <div className="col-12">
                <label>
                  Nro Lance:
                  <input
                    type="text"
                    name="lance"
                    value={formData.lance}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="col-4">Discriminação</div>
              <div className="col-4">Lançamento</div>
              <div className="col-4">Recolhimento</div>
            </div>
            <div className="row">
              <div className="col-4">Data (dia/mês)</div>
              {/* <div className="col-4">
                <input
                  type="text"
                  name="effort1."
                  value={formData.effort1.lan_data}
                  onChange={(e) => handleEffortChange(e, 1)}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  name="lance"
                  value={formData.effort1.rec_data}
                  onChange={(e) => handleEffortChange(e, 1)}
                />
              </div> */}
            </div>

            <br />
          </Card>

          <button type="submit">Enviar</button>
          {/* {response} */}
        </form>
      </div>
    </div>
  );
};

export default App;

/*
Data (dia/mês)
Hora/min (inicial)
Hora/min (final)
No de Anzóis
No de Samburás
Temp de Superfície
Profundidade (m)
Latitude(inicial) N/S
Longitude(inicial) W
Tipo de isca
Light-Stick (sim/não)
*/
