
export class Vehiculo {

 protected marca:String;
 protected patente:String;
 protected modelo:String;
 protected anio:number;
 protected precio:number;
 protected capacidad:number;

 public constructor(marca:String, patente:String, modelo:String, anio:number, precio:number, capacidad:number){
     this.marca=marca;
     this.patente=patente;
     this.modelo=modelo;
     this.anio=anio;
     this.precio=precio;
     this.capacidad=capacidad;
 }

 public getModelo():String{
     return this.modelo;
 }
 public getMarca():String{
    return this.marca;
 }

 public getPatente():String{
     return this.patente;
 }

 public getAnio():number{
     return this.anio;
 }

 public getPrecio():number{
     return this.precio;
 }

 public getCapacidad():number{
     return this.capacidad;
 }

}