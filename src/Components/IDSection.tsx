import Card from "@mui/material/Card/Card";
import React, { ChangeEvent } from "react";
import InputMask from "react-input-mask";
import { FormDatax } from "../Interfaces/interfaces";

const portoOptions = [
  "Natal (RN)",
  "Recife (PE)",
  "",
  "Acaraú (CE)",
  "Areia Branca (RN)",
  "Cabo Frio (RJ)",
  "Fortaleza (CE)",
  "Guarapari (ES)",
  "Ilhéus (BA)",
  "Imbiotuba (SC)",
  "Itaipava (ES)",
  "Itajãi (SC)",
  "Itarema (CE)",
  "Maceió (AL)",
  "Navegantes (SC)",
  "Niterói (RJ)",
  "Parnamirim (RN)",
  "Piúma (ES)",
  "Rio Grande (RS)",
  "Salvador (BA)",
  "Santana (AM)",
  "Santos (SP)",
  "Vitória (ES)"  
];

interface IIDSection {
  formData: FormDatax;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const IDSection: React.FC<IIDSection> = (props) => {
  return (
    <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
      <p>A. IDENTIFICAÇÃO <br/> e DADOS DE SAÍDA</p>
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Nome da Embarcação</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="nome_emb"
              value={props.formData.nome_emb}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Data de Saída</label>
          </div>
          <div className="col-6">
            <InputMask
              mask="99/99/9999"
              name="saida_data"
              value={props.formData.saida_data}
              onChange={props.handleChange}
              >
            </InputMask>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Empresa/Armador</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="emp_armador"
              value={props.formData.emp_armador}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-6 d-flex">
         <div className="col-6">
           <label>Porto de Saída</label>
          </div>
            <div className="col-6">
            <select
              name="saida_porto"
              value={props.formData.saida_porto}
              onChange={props.handleChange}
            >
              <option value="">Selecione um porto</option>
              {portoOptions.map((porto, index) => (
                <option key={index} value={porto}>
                  {porto}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default IDSection;
