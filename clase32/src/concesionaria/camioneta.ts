import { Vehiculo } from "./vehiculo";

export class Camioneta extends Vehiculo {

    private tipo: String;

    public constructor(marca:String, patente:String, modelo:String, anio:number, precio:number, capacidad:number){
        super(marca,patente,modelo,anio,precio,capacidad);
        this.tipo = "camioneta";
    }

    public getTipo():String{
        return this.tipo;
    }
}