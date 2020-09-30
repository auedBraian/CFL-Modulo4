import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaDocsController } from './lista-docs/lista-docs.controller';
import { ListaDocsService } from './lista-docs/lista-docs.service';
import { CalculadoraController } from './calculadora/calculadora.controller';
import { CalculadoraService } from './calculadora/calculadora.service';
import { ConcesionariaController } from './concesionaria/concesionaria.controller';
import { ConcesionariaService } from './concesionaria/concesionaria.service';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..',
'client'),
    }),
  ],
  controllers: [AppController, ListaDocsController, CalculadoraController, ConcesionariaController],
  providers: [AppService, ListaDocsService, CalculadoraService, ConcesionariaService],
})
export class AppModule {}
