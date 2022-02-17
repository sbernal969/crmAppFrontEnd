import { CountryCode } from "./country-code.interface";

export interface CountryCodeResponse{
    codigo:  number;
    mensaje: string;
    data: CountryCode[];
}