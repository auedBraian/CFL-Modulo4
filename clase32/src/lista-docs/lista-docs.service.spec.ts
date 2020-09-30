import { Test, TestingModule } from '@nestjs/testing';
import { ListaDocsService } from './lista-docs.service';

describe('ListaDocsService', () => {
  let service: ListaDocsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListaDocsService],
    }).compile();

    service = module.get<ListaDocsService>(ListaDocsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
