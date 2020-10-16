import { Injectable } from '@nestjs/common';
import { Vehiculo } from './vehiculo';
import { Auto } from './auto';
import { Camioneta } from './camioneta';
import * as fs from 'fs';

@Injectable()
export class ConcesionariaService {
    private listaVehiculos: Vehiculo[];

    public getVehiculos(): any {
        this.listaVehiculos = this.loadVehiculos();
        return this.listaVehiculos;
    }


    public createAuto(vehiculo: any): string {
        let nuevoVehiculo = new Auto(vehiculo.marca, vehiculo.patente, vehiculo.modelo, vehiculo.anio, vehiculo.precio, vehiculo.capacidad);

        fs.appendFileSync('stockVehiculos.csv', `\n${nuevoVehiculo.getTipo()},${nuevoVehiculo.getMarca()},${nuevoVehiculo.getPatente()},${nuevoVehiculo.getModelo()},${nuevoVehiculo.getAnio()},${nuevoVehiculo.getPrecio()},${nuevoVehiculo.getCapacidad()}`);


        this.listaVehiculos.push(nuevoVehiculo);
        return 'ok';
    }

    public createCamioneta(vehiculo: any): string {
        let nuevoVehiculo = new Camioneta(vehiculo.marca, vehiculo.patente, vehiculo.modelo, vehiculo.anio, vehiculo.precio, vehiculo.capacidad);

        fs.appendFileSync('stockVehiculos.csv', `\n${nuevoVehiculo.getTipo()},${nuevoVehiculo.getMarca()},${nuevoVehiculo.getPatente()},${nuevoVehiculo.getModelo()},${nuevoVehiculo.getAnio()},${nuevoVehiculo.getPrecio()},${nuevoVehiculo.getCapacidad()}`);


        this.listaVehiculos.push(nuevoVehiculo);
        return 'ok';
    }


    public loadVehiculos(): Vehiculo[] {
        let archivo = fs.readFileSync('stockVehiculos.csv', 'utf8');
        let lineas = archivo.split('\n');
        const elementos = [];
        for (let i = 0; i < lineas.length; i++) {
            let linea = lineas[i].replace('\r', '');
            let p = linea.split(',');
            elementos.push(p);
        }
        this.listaVehiculos = [];
        for (let i = 0; i < elementos.length; i++) {

            if (elementos[i][0] == 'auto') {
                let nuevoAuto = new Auto(elementos[i][1], elementos[i][2], elementos[i][3], parseInt(elementos[i][4]), parseInt(elementos[i][5]), elementos[i][6]);
                this.listaVehiculos.push(nuevoAuto);
            } else {
                if (elementos[i][0] == 'camioneta') {
                    let nuevaCamioneta = new Camioneta(elementos[i][1], elementos[i][2], elementos[i][3], parseInt(elementos[i][4]), parseInt(elementos[i][5]), elementos[i][6]);
                    this.listaVehiculos.push(nuevaCamioneta);
                }
            }
        }
        return this.listaVehiculos;
    }

/*
    public getVehiculo(index: number): Vehiculo {
        this.listaVehiculos = this.loadVehiculos();
        if (index < 0 || index >= this.listaVehiculos.length) {
            return null;
        }
        console.log(this.listaVehiculos[index]);
        return (this.listaVehiculos[index]);
        
    }
*/


}