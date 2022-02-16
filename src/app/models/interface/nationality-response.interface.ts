import { Nationality } from "./nationality.interface";

export interface NationalityResponse  {
    codigo:  number;
    mensaje: string;
    data: Nationality[];
}