import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConcesionariaService } from './concesionaria.service';
import { Vehiculo } from './vehiculo';

@Controller('concesionaria')
export class ConcesionariaController {
  
    constructor(private concesionariaService: ConcesionariaService) { }
    
    @Get()
    public getVehiculos(): Vehiculo[] {
        return this.concesionariaService.getVehiculos();
    }

    @Post()
    create(@Body() vehiculo: any): string {

        if(vehiculo.tipo == "auto"){
        return this.concesionariaService.createAuto(vehiculo);
        }else if(vehiculo.tipo == "camioneta"){
        return this.concesionariaService.createCamioneta(vehiculo);
        }
    }
}
