import { Country } from "./country.interface";

export interface CountryResponse{
    codigo:  number;
    mensaje: string;
    data: Country[];
}