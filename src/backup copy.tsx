import React, { ChangeEvent, useReducer } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "@mui/material/Card";

const initialState: {
  nome_emb: string;
  emp_armador: string;
  saida_porto: string;
  saida_data: string;
  chegada_porto: string;
  chegada_data: string;
  lance: string;
  effort1: EffortData<{
    lan_data: string;
    lan_hr_ini: string;
    lan_hr_fin: string;
    nro_anz: number;
    nro_samb: number;
    temp: number;
    prof: number;
    lan_lat_ini: string;
    lan_long_ini: string;
    isca: string;
    ls: string;
    rec_data: string;
    rec_hr_ini: string;
    rec_hr_fin: string;
    rec_lat_ini: string;
    rec_long_ini: string;
  }>;
  effort2: EffortData<{
    lan_data: string;
    lan_hr_ini: string;
    lan_hr_fin: string;
    nro_anz: number;
    nro_samb: number;
    temp: number;
    prof: number;
    lan_lat_ini: string;
    lan_long_ini: string;
    isca: string;
    ls: string;
    rec_data: string;
    rec_hr_ini: string;
    rec_hr_fin: string;
    rec_lat_ini: string;
    rec_long_ini: string;
  }>;
  effort3: EffortData<{
    lan_data: string;
    lan_hr_ini: string;
    lan_hr_fin: string;
    nro_anz: number;
    nro_samb: number;
    temp: number;
    prof: number;
    lan_lat_ini: string;
    lan_long_ini: string;
    isca: string;
    ls: string;
    rec_data: string;
    rec_hr_ini: string;
    rec_hr_fin: string;
    rec_lat_ini: string;
    rec_long_ini: string;
  }>;
} = {
  nome_emb: "",
  emp_armador: "",
  saida_porto: "",
  saida_data: "",
  chegada_porto: "",
  chegada_data: "",
  lance: "",
  effort1: {
    lan_data: "",
    lan_hr_ini: "",
    lan_hr_fin: "",
    nro_anz: 0,
    nro_samb: 0,
    temp: 0,
    prof: 0,
    lan_lat_ini: "",
    lan_long_ini: "",
    isca: "",
    ls: "",
    rec_data: "",
    rec_hr_ini: "",
    rec_hr_fin: "",
    rec_lat_ini: "",
    rec_long_ini: "",
  },
  effort2: {
    lan_data: "",
    lan_hr_ini: "",
    lan_hr_fin: "",
    nro_anz: 0,
    nro_samb: 0,
    temp: 0,
    prof: 0,
    lan_lat_ini: "",
    lan_long_ini: "",
    isca: "",
    ls: "",
    rec_data: "",
    rec_hr_ini: "",
    rec_hr_fin: "",
    rec_lat_ini: "",
    rec_long_ini: "",
  },
  effort3: {
    lan_data: "",
    lan_hr_ini: "",
    lan_hr_fin: "",
    nro_anz: 0,
    nro_samb: 0,
    temp: 0,
    prof: 0,
    lan_lat_ini: "",
    lan_long_ini: "",
    isca: "",
    ls: "",
    rec_data: "",
    rec_hr_ini: "",
    rec_hr_fin: "",
    rec_lat_ini: "",
    rec_long_ini: "",
  },
};

type EffortData<T> = {
  [key in keyof T]: any;
};

type EffortField = "effort1" | "effort2" | "effort3";

const reducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_FIELD": {
      const { fieldName, value } = action.payload;
      return {
        ...state,
        [fieldName]: value,
      };
    }
    case "UPDATE_EFFORT_FIELD": {
      const { effortField, name, value } = action.payload;
      const effortFields: {
        [key in EffortField]: EffortData<(typeof initialState)[key]>;
      } = {
        effort1: state.effort1,
        effort2: state.effort2,
        effort3: state.effort3,
      };
      return {
        ...state,
        [action.effort1]: {
          ...[action.effort1],
          [name]: value,
        },
      };
    }
    default:
      return state;
  }
};

const App: React.FC<{}> = () => {
  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: keyof typeof initialState
  ) => {
    const { value } = e.target;
    dispatch({
      type: "UPDATE_EFFORT_FIELD",
      payload: { fieldName, value },
    });
  };

  const handleEffortChange = (
    e: ChangeEvent<HTMLInputElement>,
    effortField: keyof typeof initialState
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_EFFORT_FIELD",
      payload: { effortField, name, value },
    });
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
      console.log(data);
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
                    id="nome_emb"
                    type="text"
                    value={formData.nome_emb}
                    onChange={(e) => handleChange(e, "nome_emb")}
                  />
                </label>
              </div>
              <div className="col-6">
                <label>
                  Empresa/Armador:
                  <input
                    id="emp_armador"
                    type="text"
                    value={formData.emp_armador}
                    onChange={(e) => handleChange(e, "emp_armador")}
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>
                  Porto de Saída:
                  <input
                    id="saida_porto"
                    type="text"
                    value={formData.saida_porto}
                    onChange={(e) => handleChange(e, "saida_porto")}
                  />
                </label>
              </div>
              <div className="col-6">
                <label>
                  Porto de Chegada:
                  <input
                    id="chegada_porto"
                    type="text"
                    value={formData.chegada_porto}
                    onChange={(e) => handleChange(e, "chegada_porto")}
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>
                  Data de Saída:
                  <input
                    id="saida_data"
                    type="text"
                    value={formData.saida_data}
                    onChange={(e) => handleChange(e, "saida_data")}
                  />
                </label>
              </div>
              <div className="col-6">
                <label>
                  Data de Chegada:
                  <input
                    id="chegada_data"
                    type="text"
                    value={formData.chegada_data}
                    onChange={(e) => handleChange(e, "chegada_data")}
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
                    // id="effort1_lance"
                    type="text"
                    // value={}
                    // onChange={(e) => handleEffortChange(e, "effort1")}
                  />
                </label>
              </div>
              <div className="col-4">Discriminação</div>
              <div className="col-4">Lançamento</div>
              <div className="col-4">Recolhimento</div>
            </div>
            <div className="row">
              <div className="col-4">Data (dia/mês)</div>
              <div className="col-4">
                <input
                  id="effort1_lan_data"
                  type="text"
                  value={formData.effort1.lan_data}
                  onChange={(e) => handleEffortChange(e, "effort1")}
                />
              </div>
              <div className="col-4">
                <input
                  id="effort1_rec_data"
                  type="text"
                  value={formData.effort1.rec_data}
                  onChange={(e) => handleEffortChange(e, "effort1")}
                />
              </div>
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
