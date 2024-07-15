import React, { ChangeEvent, useState, useEffect } from "react";
import { FormDatax, ItemCatchData } from "../Interfaces/interfaces";
import Card from "@mui/material/Card/Card";

const speciesOptions = [
  "Albacora-bandolim (Thunnus obesus)",
  "Albacora-branca (Thunnus alalunga)",
  "Albacora-laje (Thunnus albacares)",
  "Albacorinha (Thunnus atlanticus)",
  "Agulhão-vela (Istiophorus platypterus)",
  "Agulhão-verde (Tetrapturus pfluegeri)",
  "Barracuda  (Sphyraena barracuda)",
  "Bonito-listrado (Katsuwonus pelamis)",
  "Cavala-impinge (Acanthocybium solandri)",
  "Dourado (Coryphaena hippurus)",
  "Espadarte (Xiphias gladius)",
  "Peixe-prego (Lepidocybium flavobrunneum)",
  "Peixe-rato (Ruvettus pretiosus)",
  "Tubarão-azul (Prionace glauca)",
  "Outros peixes"
];

interface ICatchSection {
  formData: FormDatax;
  i: number;
  handleCatchChange: (
    e: ChangeEvent<HTMLInputElement>, 
    index: number
  ) => void;
  handleCatchItemChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    catchIndex: number,
    itemIndex: number,
    itemKey: keyof ItemCatchData
  ) => void;
}

const CatchSection: React.FC<ICatchSection> = (props) => {
  return (
    <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
      <p>C. CAPTURAS RETIDAS</p>
      <div className="row">
        <div className="col-4">Espécie</div>
        <div className="col-4">Nº de indivíduos <br/> ou peças</div>
        <div className="col-4">Peso total (kg) <br/> dos indivíduos inteiros</div>
      </div>
      {props.formData.catch[props.i].items.map((_, j) => (
        <Item
          key={j}
          formData={props.formData}
          i={props.i}
          j={j}
          availableSpecies={speciesOptions}
          handleCatchItemChange={props.handleCatchItemChange}
        />
      ))}
    </Card>
  );
};

export default CatchSection;

interface IItem {
  formData: FormDatax;
  i: number;
  j: number;
  availableSpecies: string[];
  handleCatchItemChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    catchIndex: number,
    itemIndex: number,
    itemKey: keyof ItemCatchData
  ) => void;
}

const Item: React.FC<IItem> = (props) => {
  return (
    <div className="row">
      <div className="col-4">
        <select
          value={props.formData.catch[props.i].items[props.j].capt_sp}
          onChange={(e) =>
            props.handleCatchItemChange(e, props.i, props.j, "capt_sp")
          }
        >
          <option value="">Selecione</option>
          {props.availableSpecies.map((species, index) => (
            <option key={index} value={species}>
              {species}
            </option>
          ))}
        </select>
      </div>
      <div className="col-4">
        <input
          type="number"
          value={props.formData.catch[props.i].items[props.j].capt_sp_n}
          onChange={(e) =>
            props.handleCatchItemChange(e, props.i, props.j, "capt_sp_n")
          }
        />
      </div>
      <div className="col-4">
        <input
          type="number"
          value={props.formData.catch[props.i].items[props.j].capt_sp_kg}
          onChange={(e) =>
            props.handleCatchItemChange(e, props.i, props.j, "capt_sp_kg")
          }
        />
      </div>
    </div>
  );
};
