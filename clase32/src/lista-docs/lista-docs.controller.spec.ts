import { Test, TestingModule } from '@nestjs/testing';
import { ListaDocsController } from './lista-docs.controller';

describe('ListaDocsController', () => {
  let controller: ListaDocsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaDocsController],
    }).compile();

    controller = module.get<ListaDocsController>(ListaDocsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
