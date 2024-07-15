import React, { useState, ChangeEvent, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "@mui/material/Card";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  FormDatax,
  EffortData,
  CatchData,
  DisposalData,
  IncidentalCatchData,
  ItemCatchData,
  ItemDisposalData,
  ItemIncidentalData,
} from "./Interfaces/interfaces";
import EffortSection from "./Components/EffortSection";
import IDSection from "./Components/IDSection";
import CatchSection from "./Components/CatchSection"; // Importa el componente CatchSection
import DisposalSection from "./Components/DisposalSection";
import IncidentalSection from "./Components/IncidentalSection";
import AtendantSection from "./Components/AtendantSection";
import logo from "./assets/logo.png";

const n_lances = 1;
const n_especies = 12;

const effortx: EffortData = {
  lan_data: "",
  lan_hr_ini: "",
  lan_hr_fin: "",
  nro_anz: "",
  temp: "",
  prof: "",
  lan_lat_ini: "",
  lan_long_ini: "",
  isca: "",
  ls: "",
  rec_data: "",
  lance: "",
  rec_hr_ini: "",
  rec_hr_fin: "",
  rec_lat_ini: "",
  rec_long_ini: "",
};

const itemICx: ItemCatchData = {
  capt_sp: "",
  capt_sp_n: "",
  capt_sp_kg: "",
};

const catchx: CatchData = {
  lance: "",
  items: Array(n_especies).fill(itemICx),
};

const itemDx: ItemDisposalData = {
  desc: "",
  desc_v: "",
  desc_m: "",
};

const disposalx: DisposalData = {
  lance: "",
  items: Array(n_especies).fill(itemDx),
};

const itemIICx: ItemIncidentalData = {
  bycatch: "",
  bycatch_v: "",
  bycatch_m: "",
};

const incidentalsCatchx: IncidentalCatchData = {
  lance: "",
  items: Array(n_especies).fill(itemIICx),
};

const initialState: FormDatax = {
  nome_emb: "",
  emp_armador: "",
  saida_porto: "",
  saida_data: "",
  chegada_porto: "",
  chegada_data: "",
  efforts: Array(n_lances).fill(effortx),
  catch: Array(n_lances).fill(catchx),
  disposals: Array(n_lances).fill(disposalx),
  inciCatch: Array(n_lances).fill(incidentalsCatchx),
  nome_mestre: "",
  seap_pr: "",
  inscr_cap: "",
  link_assinatura: "",
  link_pdf: "",
};


const App: React.FC<{}> = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [lances, setLances] = useState([0]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addLance = () => {
    setLances([...lances, lances.length]);
    setFormData((prevState) => ({
      ...prevState,
      efforts: [...prevState.efforts, effortx],
      catch: [...prevState.catch, catchx],
      disposals: [...prevState.disposals, disposalx],
      inciCatch: [...prevState.inciCatch, incidentalsCatchx],
    }));
  };

  // Effort -->
  const handleEffortChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, i: number) => {
    const { name, value } = e.target;
    const newEfforts = [...formData.efforts];
    newEfforts[i] = { ...newEfforts[i], [name]: value };
    setFormData({ ...formData, efforts: newEfforts });
  };
  // <-- Effort


  // Catch -->
  const handleCatchChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const catchKey = name.split(".")[1];

    setFormData((prevState) => {
      const updateCatch = [...prevState.catch];
      updateCatch[index] = {
        ...updateCatch[index],
        [catchKey]: value,
      };
      return {
        ...prevState,
        catch: updateCatch,
      };
    });
  };

  const handleCatchItemChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    catchIndex: number,
    itemIndex: number,
    itemKey: keyof ItemCatchData
  ) => {
    const { value } = e.target;
    setFormData((prevState) => {
      const updatedCatch = [...prevState.catch];
      const updatedItems = [...updatedCatch[catchIndex].items];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        [itemKey]: value,
      };
      updatedCatch[catchIndex] = {
        ...updatedCatch[catchIndex],
        items: updatedItems,
      };
      return {
        ...prevState,
        catch: updatedCatch,
      };
    });
  };
  // <-- Catch


  // Disposals -->
  const handleDisposalsChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const disposalKey = name.split(".")[1];

    setFormData((prevState) => {
      const updatedDisposal = [...prevState.disposals];
      updatedDisposal[index] = {
        ...updatedDisposal[index],
        [disposalKey]: value,
      };
      return {
        ...prevState,
        disposals: updatedDisposal,
      };
    });
  };

  const handleDisposalItemChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    disposalIndex: number,
    itemIndex: number,
    itemKey: keyof ItemDisposalData
  ) => {
    const { value } = e.target;
    setFormData((prevState) => {
      const updatedDisposal = [...prevState.disposals];
      const updatedItems = [...updatedDisposal[disposalIndex].items];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        [itemKey]: value,
      };
      updatedDisposal[disposalIndex] = {
        ...updatedDisposal[disposalIndex],
        items: updatedItems,
      };
      return {
        ...prevState,
        disposals: updatedDisposal,
      };
    });
  };
  // <-- Disposals


  // Incidental -->
  const handleIncidentalsChange = (
    e: ChangeEvent<HTMLInputElement>, 
    index: number
  ) => {
    const { name, value } = e.target;
    const incidentalKey = name.split(",")[1];

    setFormData((prevState) => {
      const updatedIncidental = {...prevState.inciCatch};
      updatedIncidental[index] = {
        ...updatedIncidental[index],
        [incidentalKey]: value,
      };
      return {
        ...prevState,
        inciCatch: updatedIncidental
      };
    });
  };

  const handleIncidentalItemChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    incidentalIndex: number,
    itemIndex: number,
    itemKey: keyof ItemIncidentalData
  ) => {
    const { value } = e.target;
    setFormData((prevState) => {
      const updatedIncidental = {...prevState.inciCatch};
      const updatedItems = [...updatedIncidental[incidentalIndex].items];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        [itemKey]: value,
      };
      updatedIncidental[incidentalIndex] = {
        ...updatedIncidental[incidentalIndex],
        items: updatedItems,
      };
      return {
        ...prevState,
        inciCatch: updatedIncidental,
      }
    });
  };
  // <-- Incidental



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formDataToSend = new FormData();

    formDataToSend.append("cod_MB", formData.nome_emb + formData.saida_porto);
    formDataToSend.append("nome_emb", formData.nome_emb);
    formDataToSend.append("emp_armador", formData.emp_armador);
    formDataToSend.append("saida_porto", formData.saida_porto);
    formDataToSend.append("saida_data", formData.saida_data);
    formDataToSend.append("chegada_porto", formData.chegada_porto);
    formDataToSend.append("chegada_data", formData.chegada_data);
    formDataToSend.append("nome_mestre", formData.nome_mestre);
    formDataToSend.append("seap_pr", formData.seap_pr);
    formDataToSend.append("inscr_cap", formData.inscr_cap);
    formDataToSend.append("link_assinatura", formData.link_assinatura);
    formDataToSend.append("link_pdf", formData.link_pdf);
    for (var i = 0; i < formData.catch.length; i++) {
      formDataToSend.append(
        "cod_lance",
        formData.nome_emb + formData.saida_porto + formData.efforts[i].lance
      );
      formDataToSend.append("lance", formData.efforts[i].lance);
      formDataToSend.append("lan_data", formData.efforts[i].lan_data);
      formDataToSend.append("lan_hr_ini", formData.efforts[i].lan_hr_ini);
      formDataToSend.append("lan_hr_fin", formData.efforts[i].lan_hr_fin);
      formDataToSend.append("nro_anz", formData.efforts[i].nro_anz);
      formDataToSend.append("temp", formData.efforts[i].temp);
      formDataToSend.append("prof", formData.efforts[i].prof);
      formDataToSend.append("lan_lat_ini", formData.efforts[i].lan_lat_ini);
      formDataToSend.append("lan_long_ini", formData.efforts[i].lan_long_ini);
      formDataToSend.append("isca", formData.efforts[i].isca);
      formDataToSend.append("ls", formData.efforts[i].ls);
      formDataToSend.append("rec_data", formData.efforts[i].rec_data);
      formDataToSend.append("rec_hr_ini", formData.efforts[i].rec_hr_ini);
      formDataToSend.append("rec_hr_fin", formData.efforts[i].rec_hr_fin);
      formDataToSend.append("rec_lat_ini", formData.efforts[i].rec_lat_ini);
      formDataToSend.append("rec_long_ini", formData.efforts[i].rec_long_ini);

      for (var j = 0; j < formData.catch[i].items.length; j++) {
        console.log("i: " + i);
        console.log("j: " + j);
        console.log(formData.catch[i].items[j].capt_sp);
        formDataToSend.append(
          "capt_sp",
          formData.catch[i].items[j].capt_sp === ""
            ? "-"
            : formData.catch[i].items[j].capt_sp
        );
        formDataToSend.append(
          "capt_sp_n",
          formData.catch[i].items[j].capt_sp_n === ""
            ? "-"
            : formData.catch[i].items[j].capt_sp_n
        );
        formDataToSend.append(
          "capt_sp_kg",
          formData.catch[i].items[j].capt_sp_kg === ""
            ? "-"
            : formData.catch[i].items[j].capt_sp_kg
        );
        // --------------------------------------------------
        formDataToSend.append(
          "desc",
          formData.disposals[i].items[j].desc === ""
            ? "-"
            : formData.disposals[i].items[j].desc
        );
        formDataToSend.append(
          "desc_v",
          formData.disposals[i].items[j].desc_v === ""
            ? "-"
            : formData.disposals[i].items[j].desc_v
        );
        formDataToSend.append(
          "desc_m",
          formData.disposals[i].items[j].desc_m === ""
            ? "-"
            : formData.disposals[i].items[j].desc_m
        );
        // --------------------------------------------------
        formDataToSend.append(
          "bycatch",
          formData.inciCatch[i].items[j].bycatch === ""
            ? "-"
            : formData.inciCatch[i].items[j].bycatch
        );
        formDataToSend.append(
          "bycatch_v",
          formData.inciCatch[i].items[j].bycatch_v === ""
            ? "-"
            : formData.inciCatch[i].items[j].bycatch_v
        );
        formDataToSend.append(
          "bycatch_m",
          formData.inciCatch[i].items[j].bycatch_m === ""
            ? "-"
            : formData.inciCatch[i].items[j].bycatch_m
        );

        formDataToSend.forEach((value, key) => {
          console.log(`${key}: ${value}`);
        });

        try {
          await fetch(
            "https://script.google.com/macros/s/AKfycbxB4xXOvVJcLLpwpxFeauDVWWcVE6NlTnMhTIHVR6wFQ-e6CAj7QUBRDh2vamY-VetDtA/exec",
            {
              method: "POST",
              redirect: "follow",
              body: formDataToSend,
            }
          ).then((res) => {
            console.log(res);
          });
          formDataToSend.delete("capt_sp");
          formDataToSend.delete("capt_sp_n");
          formDataToSend.delete("capt_sp_kg");
          formDataToSend.delete("desc");
          formDataToSend.delete("desc_v");
          formDataToSend.delete("desc_m");
          formDataToSend.delete("bycatch");
          formDataToSend.delete("bycatch_v");
          formDataToSend.delete("bycatch_m");
        } catch (error) {
          console.error("Error al enviar el formulario:", error);
        }
      }
      formDataToSend.delete("cod_lance");
      formDataToSend.delete("lance");
      formDataToSend.delete("lan_data");
      formDataToSend.delete("lan_hr_ini");
      formDataToSend.delete("lan_hr_fin");
      formDataToSend.delete("nro_anz");
      formDataToSend.delete("temp");
      formDataToSend.delete("prof");
      formDataToSend.delete("lan_lat_ini");
      formDataToSend.delete("lan_long_ini");
      formDataToSend.delete("isca");
      formDataToSend.delete("ls");
      formDataToSend.delete("rec_data");
      formDataToSend.delete("rec_hr_ini");
      formDataToSend.delete("rec_hr_fin");
      formDataToSend.delete("rec_lat_ini");
      formDataToSend.delete("rec_long_ini");
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <img src={logo} alt="Logo" style={{ width: "100px", height: "100px" }} />
          <h2 className="mt-2">
            Registro Eletrônico de viagens de Pesca <br />
            Grandes Unidades Oceânicas</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <IDSection formData={formData} handleChange={handleChange} />
          {lances.map((lance, i) => (
            <React.Fragment key={i}>
                <EffortSection
                  formData={formData}
                  i={i}
                  handleEffortChange={handleEffortChange}
                />
                <CatchSection
                  formData={formData}
                  i={i}
                  handleCatchChange={handleCatchChange}
                  handleCatchItemChange={handleCatchItemChange}
                />
                <DisposalSection
                  formData={formData}
                  i={i}
                  handleDisposalsChange={handleDisposalsChange}
                  handleDisposalItemChange={handleDisposalItemChange}
                />
               <IncidentalSection
                  formData={formData}
                  i={i}
                  handleIncidentalsChange={handleIncidentalsChange}
                 handleIncidentalItemChange={handleIncidentalItemChange}
               />
               </React.Fragment>
              ))}
              <button
                type="button"
                className="btn btn-primary mb-2"
                onClick={addLance}
                >
                  Adicionar Lance
                </button>


          <AtendantSection formData={formData} handleChange={handleChange} />
          <button className="btn btn-warning mb-2" type="submit">
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
