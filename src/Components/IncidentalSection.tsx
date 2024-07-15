import React, { ChangeEvent } from "react";
import { FormDatax, ItemIncidentalData } from "../Interfaces/interfaces";
import Card from "@mui/material/Card/Card";


const speciesOptions =[
  "-Ósseos",
  "Albacora-azul (Thunnus thynnus)",
  "Agulhão-branco (Kajikia albida)",
  "Agulhão-negro (Makaira nigricans)",
  "",
  "-Elasmobrânquios",
  "Arraia-jamanta (Família Mobulidae)",
  "Raia-negra ou raia-roxa (Pteroplatytrygon violacea)",
  "Cação-noturno (Carcharhinus signatus)",
  "Tubarão-anequim (Isurus oxyrinchus)",
  "Tubarão-anequim-preto (Isurus paucus)",
  "Tubarão-cachorro (Pseudocarcharias kamoharai)",
  "Tubarão-das-galápagos (Carcharhinus galapagensis)",
  "Tubarão-galha-branca (Carcharhinus longimanus)",
  "Tubarão-golfinho (Lamna nasus)",
  "Tubarão-lombo-preto (Carcharhinus falciformis)",
  "Tubarão-mangona (Carcharias taurus)",
  "Tubarão-martelo-grande (Sphyrna mokarran)",
  "Tubarão-martelo-liso (Sphyrna zygaena)",
  "Tubarão-martelo-recortado (Sphyrna lewini)",
  "Tubarão-raposa (Alopias vulpinus)",
  "Tubarão-raposa-olhuda (Alopias superciliosus)",
  "Tubarão-tigre (Galeocerdo cuvier)",
  "",
  "-Aves marinhas",
  "Albatroz-de-nariz-amarelo	(Thalassarche chlororhynchos)",
  "Albatroz-de-sobrancelha-negra	(Thalassarche melanophrys)",
  "Pardela-de-óculos	(Procellaria conspicillata)",
  "Pardela-preta	(Procellaria aequinoctialis)",
  "",
  "-Tartarugas marinhas",
  "Tartaruga-cabeçuda	(Caretta caretta)",
  "Tartaruga-de-couro (Dermochelys coriacea)",
  "Tartaruga-oliva	(Lepidochelys olivacea)",
  "Tartaruga-de-pente (Eretmochelys imbricata)",
  "TarTartaruga-verde	(Chelonia mydas)",
  "",
  "-Outros"
];

interface IIncidentalSection {
  formData: FormDatax;
  i: number;
  handleIncidentalsChange: (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleIncidentalItemChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    incidentalIndex: number,
    itemIndex: number,
    itemKey: keyof ItemIncidentalData
  ) => void;
}

const IncidentalSection: React.FC<IIncidentalSection> = (props) => {
  return (
    <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
      <p>E. DESCARTE OBRIGATÓRIO</p>
      <div className="row">
        <div className="col-4">Espécies</div>
        <div className="col-4">Nº de vivos</div>
        <div className="col-4">Nº de mortos</div>
      </div>
      {props.formData.inciCatch[props.i].items.map((_, j) => (
        <Item
          key={j}
          formData={props.formData}
          i={props.i}
          j={j}
          availableSpecies={speciesOptions}
          handleIncidentalItemChange={props.handleIncidentalItemChange}
        />
      ))}
    </Card>
  );
};

export default IncidentalSection;

interface IItem {
  formData: FormDatax;
  i: number;
  j: number;
  availableSpecies: string[];
  handleIncidentalItemChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    incidentalIndex: number,
    itemIndex: number,
    itemKey: keyof ItemIncidentalData
  ) => void;
}

const Item: React.FC<IItem> = (props) => {
  return (
    <div className="row">
      <div className="col-4">
        <select
          value={props.formData.inciCatch[props.i].items[props.j].bycatch}
          onChange={(e) =>
            props.handleIncidentalItemChange(e, props.i, props.j, "bycatch")
          }
        >
          <option value="">Selecione</option>
          {speciesOptions.map((species, index) => (
            <option key={index} value={species}>
              {species}
            </option>
          ))}
        </select>
      </div>
      <div className="col-4">
        <input
          type="number"
          value={props.formData.inciCatch[props.i].items[props.j].bycatch_v}
          onChange={(e) =>
            props.handleIncidentalItemChange(e, props.i, props.j, "bycatch_v")
          }
        />
      </div>
      <div className="col-4">
        <input
          type="number"
          value={props.formData.inciCatch[props.i].items[props.j].bycatch_m}
          onChange={(e) =>
            props.handleIncidentalItemChange(e, props.i, props.j, "bycatch_m")
          }
        />
      </div>
    </div>
  );
};