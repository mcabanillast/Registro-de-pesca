import React, { ChangeEvent } from "react";
import { FormDatax } from "../Interfaces/interfaces";
import InputMask from "react-input-mask";
import Card from "@mui/material/Card/Card";

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

interface IAtendantSection {
  formData: FormDatax;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const AtendantSection: React.FC<IAtendantSection> = (props) => {
  return (
    <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
      <p>F. RESPONSÁVEL PELO PREENCHIMENTO <br/> e DADOS DE CHEGADA</p>
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Nome do mestre</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="nome_mestre"
              value={props.formData.nome_mestre}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Data de Chegada</label>
          </div>
          <div className="col-6">
            <InputMask
              mask="99/99/9999"
              name="chegada_data"
              value={props.formData.chegada_data}
              onChange={props.handleChange}
              >
            </InputMask>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>N° CPF</label>
          </div>
          <div className="col-6">
            <InputMask
              mask="999.999.999-99"
              name="link_assinatura" //acuerdate cambio cpf por firma
              value={props.formData.link_assinatura}
              onChange={props.handleChange}
              >
            </InputMask>
          </div>
        </div>
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Porto de Chegada</label>
          </div>
            <div className="col-6">
            <select
              name="chegada_porto"
              value={props.formData.chegada_porto}
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
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Nº de inscr. cap. portos</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="inscr_cap"
              value={props.formData.inscr_cap}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-6 d-flex">
          <div className="col-6">
          <label>Nº de registro SEAP/PR</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="seap_pr"
              value={props.formData.seap_pr}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 text-center">
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Você declara que as informações fornecidas são verdadeiras e corretas?
          </span>
      </div>
      <div className="col-12 text-center mt-2">
        <button className="btn btn-success me-2">Sim</button>
        <button className="btn btn-danger">Não</button>
        </div>
      </div>
    </Card>
  );
};

export default AtendantSection;
