export interface Customer{
    idCustomer: number;
    personalId: string;
    name: string;
    familyFirstName: string;
    familySecondName: string;
    birth: string;
    countryId: number;
    countryName: string;
    nationalityId: number;
    nacionalityName: string;
    genderId: number;
    genderType: string;
    email: string;
    mobileNumberId: number;
    mobileNumber: number;
    mobileNumberCode: string;
    fixNumberId: number;
    fixNumber: number;
    fixNumberCode: string;
    addressCountryId: number;
    addressCountryName: string;
    addressStreet: string;
    addressNumber: number;
    addressComune: string;
    addressPostalCode: string;
    addressCity: string;
    addressAditional: string;
    income: number;
    currencyId: number;
    currencyName: string;
    tipeOfClient: number;

}