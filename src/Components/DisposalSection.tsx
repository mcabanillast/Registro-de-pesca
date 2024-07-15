import React, { ChangeEvent } from "react";
import { FormDatax, ItemDisposalData } from "../Interfaces/interfaces";
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

interface IDisposalSection {
  formData: FormDatax;
  i: number;
  handleDisposalsChange: (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleDisposalItemChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    disposalIndex: number,
    itemIndex: number,
    itemKey: keyof ItemDisposalData
  ) => void;
}

const DisposalSection: React.FC<IDisposalSection> = (props) => {
  return (
    <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
      <p>D. DESCARTE VOLUNTÁRIO</p>
      <div className="row">
        <div className="col-4">Espécie</div>
        <div className="col-4">Nº de vivos</div>
        <div className="col-4">Nº de mortos</div>
      </div>
      {props.formData.disposals[props.i].items.map((_, j) => (
        <Item
          key={j}
          formData={props.formData}
          i={props.i}
          j={j}
          availableSpecies={speciesOptions}
          handleDisposalItemChange={props.handleDisposalItemChange}
        />
      ))}
    </Card>
  );
};

export default DisposalSection;

interface IItem {
  formData: FormDatax;
  i: number;
  j: number;
  availableSpecies: string[];
  handleDisposalItemChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    disposalIndex: number,
    itemIndex: number,
    itemKey: keyof ItemDisposalData
  ) => void;
}

const Item: React.FC<IItem> = (props) => {
  return (
    <div className="row">
      <div className="col-4">
        <select
          value={props.formData.disposals[props.i].items[props.j].desc}
          onChange={(e) =>
            props.handleDisposalItemChange(e, props.i, props.j, "desc")
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
          value={props.formData.disposals[props.i].items[props.j].desc_m}
          onChange={(e) =>
            props.handleDisposalItemChange(e, props.i, props.j, "desc_m")
          }
        />
      </div>
      <div className="col-4">
        <input
          type="number"
          value={props.formData.disposals[props.i].items[props.j].desc_v}
          onChange={(e) =>
            props.handleDisposalItemChange(e, props.i, props.j, "desc_v")
          }
        />
      </div>
    </div>
  );
};
