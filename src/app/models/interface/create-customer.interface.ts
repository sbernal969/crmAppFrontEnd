export interface CreateCustomer{
    personalId: string;
    name: string;
    familyFirstName: string;
    familySecondName: string;
    birth: string;
    country: number;   
    nationality: number;
    gender: number; 
    email: string;
    mobileNumber: number;    
    mobileNumberCode: number; 
    fixNumber: number;
    fixNumberCode: number;
    addressCountry: number;  
    addressStreet: string;
    addressNumber: number;
    addressComune: string;
    addressPostalCode: string;
    addressCity: string;
    addressAditional: string;
    income: number;
    currency: number;  
    tipeOfClient: number;
}