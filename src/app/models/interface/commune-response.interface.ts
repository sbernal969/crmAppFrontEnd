import { Commune } from "./commune.interface";

export interface CommuneResponse {
    codigo:  number;
    mensaje: string;
    data: Commune[];
}