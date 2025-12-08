import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consejo } from './consejo.entity';

@Injectable()
export class ConsejosService {
  constructor(
    @InjectRepository(Consejo)
    private repo: Repository<Consejo>,
  ) {}

  findAll(): Promise<Consejo[]> {
    return this.repo.find();
  }

  create(data: { titulo: string; texto: string }): Promise<Consejo> {
    const consejo = this.repo.create(data);
    return this.repo.save(consejo);
  }
}
