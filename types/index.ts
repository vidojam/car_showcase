import { MouseEventHandler } from "react";
import { StringDecoder } from "string_decoder";

export interface CustomButtonProps {
 title: string;
 containerStyles?: string;
 handleClick?:
 MouseEventHandler<HTMLButtonElement>; 
 btnType: "button" | "submit";
 car: string;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface CarProps {

city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}