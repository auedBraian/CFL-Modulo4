import { Controller, Get, Param } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('calculadora')
export class CalculadoraController {
    constructor (private calcularService: CalculadoraService){}
    @Get(':oper/:var1/:var2')
    ejecutar(@Param('oper') oper, @Param('var1') var1, @Param('var2') var2): string {
        let numero1 = parseInt(var1);
        let numero2 = parseInt(var2);
        return this.calcularService.GetResultado(oper, numero1, numero2);
    }

}
