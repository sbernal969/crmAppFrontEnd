import { Customer } from "./customer.interface";

export interface SearchCustomersResponse{
    codigo: number;
    mensaje: string;
    data: Customer[];

}