import { Gender } from "./gender.interface";

export interface GenderResponse{
    codigo:  number;
    mensaje: string;
    data: Gender[];
}