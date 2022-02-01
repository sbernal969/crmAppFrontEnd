import { DataForgot } from "./data-forgot.interface";

export interface ForgotResponse {
  codigo:  number;
  mensaje: string;
  data:    DataForgot;
}