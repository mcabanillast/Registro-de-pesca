import React, { ChangeEvent } from "react";
import { FormDatax, EffortData } from "../Interfaces/interfaces";
import InputMask from "react-input-mask";
import Card from "@mui/material/Card/Card";

interface IEffortSection {
  formData: FormDatax;
  i: number;
  handleEffortChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number) => void;
}

const EffortSection: React.FC<IEffortSection> = (props) => {
  return (
    <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
      <div className="row align-items-center justify-content-center">
        <div className="col-auto">    
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Lance</span>
        </div>
        <div className="col-1">
          <input
            type="number"
            name="lance"
            value={props.formData.efforts[props.i].lance}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            style={{ fontSize: '20px', fontWeight: 'bold', width: '100%' }}
          />
        </div>
      </div>
      <div>
        <br/>
      </div>
      <p>B. DADOS DE ESFORÇO</p>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">Largada</div>
        <div className="col-4">Recolhimento</div>
      </div>
      <div className="row">
        <div className="col-4">Data (dia/mês/ano)</div>
        <div className="col-4">
          <InputMask
            mask="99/99/9999"
            name="lan_data"
            value={props.formData.efforts[props.i].lan_data}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            >
          </InputMask>
        </div>
        <div className="col-4">
          <InputMask
            mask="99/99/9999"
            name="rec_data"
            value={props.formData.efforts[props.i].rec_data}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            >
          </InputMask>
        </div>
      </div>
      <div className="row">
        <div className="col-4">Hora/min (inicial)</div>
        <div className="col-4">
          <input
            type="time"
            name="lan_hr_ini"
            value={props.formData.efforts[props.i].lan_hr_ini}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="time"
            name="rec_hr_ini"
            value={props.formData.efforts[props.i].rec_hr_ini}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Hora/min (final)</div>
        <div className="col-4">
          <input
            type="time"
            name="lan_hr_fin"
            value={props.formData.efforts[props.i].lan_hr_fin}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="time"
            name="rec_hr_fin"
            value={props.formData.efforts[props.i].rec_hr_fin}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">N° de Anzóis</div>
        <div className="col-4">
          <input
            type="number"
            name="nro_anz"
            value={props.formData.efforts[props.i].nro_anz}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="number"
            name="nro_anz"
            value={props.formData.efforts[props.i].nro_anz}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Temperatura de Superfície (°C)</div>
        <div className="col-4">
          <input
            type="number"
            name="temp"
            value={props.formData.efforts[props.i].temp}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="number"
            name={`efforts[${props.i}].temp`}
            value={props.formData.efforts[props.i].temp}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            disabled
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Profundidade dos anzóis (m)</div>
        <div className="col-4">
          <input
            type="number"
            name="prof"
            value={props.formData.efforts[props.i].prof}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="number"
            name={`efforts[${props.i}].prof`}
            value={props.formData.efforts[props.i].prof}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            disabled
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Latitude (inicial) N/S</div>
        <div className="col-4">
          <InputMask
            mask="99°99'99'' a"
            name="lan_lat_ini"
            value={props.formData.efforts[props.i].lan_lat_ini}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            placeholder="gg°mm'ss'' N/S"
            >
          </InputMask> 
        </div>
        <div className="col-4">
          <InputMask
            mask="99°99'99'' a"
            name="rec_lat_ini"
            value={props.formData.efforts[props.i].rec_lat_ini}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            placeholder="gg°mm'ss'' N/S"
            >
          </InputMask>        </div>
      </div>
      <div className="row">
        <div className="col-4">Longitude (inicial) W</div>
        <div className="col-4">
          <InputMask
            mask="99°99'99'' a"
            name="lan_long_ini"
            value={props.formData.efforts[props.i].lan_long_ini}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            placeholder="gg°mm'ss'' W/E"
            >
          </InputMask>
        </div>
        <div className="col-4">
          <InputMask
            mask="99°99'99'' a"
            name="rec_long_ini"
            value={props.formData.efforts[props.i].rec_long_ini}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            placeholder="gg°mm'ss'' W/E"
            >
          </InputMask>
        </div>
      </div>
      <div className="row">
        <div className="col-4">Tipo de isca</div>
        <div className="col-4">
          <input
            type="text"
            name="isca"
            value={props.formData.efforts[props.i].isca}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].isca`}
            value={props.formData.efforts[props.i].isca}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            disabled
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Light-Stick</div>
        <div className="col-4">
          <select
            name="ls"
            value={props.formData.efforts[props.i].ls}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          >
           <option value=""></option>
           <option value="sim">Sim</option>
           <option value="nao">Não</option>
         </select>
        </div>
        </div>
    </Card>
  );
};

export default EffortSection;
