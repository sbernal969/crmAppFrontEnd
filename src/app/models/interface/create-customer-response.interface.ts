import { DataCreateCustomer } from "./create-customer-data.interface";

export interface CreateCustomerResponse{
    codigo: number;
    mensaje: string;
    data: DataCreateCustomer;

}