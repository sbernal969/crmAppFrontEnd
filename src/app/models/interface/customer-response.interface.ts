import { Customer } from "./customer.interface";

export interface CustomerResponse{
    codigo: number;
    mensaje: string;
    data: Customer;

}