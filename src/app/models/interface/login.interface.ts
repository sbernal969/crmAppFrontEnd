import { Data } from "./data.interface";

export interface LoginResponse {
  codigo:  number;
  mensaje: string;
  data:    Data;
}