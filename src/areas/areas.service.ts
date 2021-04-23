import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { CreateAreaTagDto } from './dto/create-area-tag.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AreaTag } from './entities/area-tag.entity';
import { AreaRepository } from './entities/area.repository';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(AreaRepository)
    private areaRepository: AreaRepository,
    @InjectRepository(AreaTag)
    private areaTagRepository: Repository<AreaTag>,
  ) {}
  async create(createAreaDto: CreateAreaDto) {
    const area = this.areaRepository.create(createAreaDto);

    return this.areaRepository.save(area);
  }

  async createAreaTags(createAreaTagDto: CreateAreaTagDto) {
    const areaTag = this.areaTagRepository.create(createAreaTagDto);

    return this.areaTagRepository.save(areaTag);
  }

  async findAll() {
    return `Return all the areas`;
  }

  async findOne(id: number) {
    return this.areaRepository.findDescendantsTree(
      await this.areaRepository.findOneOrFail(id),
    );
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    return `This action updates a #${id} area`;
  }

  remove(id: number) {
    return `This action removes a #${id} area`;
  }
}
