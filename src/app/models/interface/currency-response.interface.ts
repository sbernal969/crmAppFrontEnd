import { Currency } from './currency.interface';

export interface CurrencyResponse {
    codigo: number;
    mensaje: string;
    data: Currency[];
}