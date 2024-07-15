export interface EffortData {
  lance: string;
  lan_data: string;
  lan_hr_ini: string;
  lan_hr_fin: string;
  nro_anz: string;
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

export interface ItemCatchData {
  capt_sp: string;
  capt_sp_n: string;
  capt_sp_kg: string;
}

export interface CatchData {
  lance: string;
  items: ItemCatchData[];
}

export interface ItemDisposalData {
  desc: string;
  desc_v: string;
  desc_m: string;
}

export interface DisposalData {
  lance: string;
  items: ItemDisposalData[];
}

export interface ItemIncidentalData {
  bycatch: string;
  bycatch_v: string;
  bycatch_m: string;
}

export interface IncidentalCatchData {
  lance: string;
  items: ItemIncidentalData[];
}

export interface FormDatax {
  nome_emb: string;
  emp_armador: string;
  saida_porto: string;
  saida_data: string;
  chegada_porto: string;
  chegada_data: string;
  efforts: EffortData[];
  catch: CatchData[];
  disposals: DisposalData[];
  inciCatch: IncidentalCatchData[];
  nome_mestre: string;
  seap_pr: string;
  inscr_cap: string;
  link_assinatura: string;
  link_pdf: string;
}
