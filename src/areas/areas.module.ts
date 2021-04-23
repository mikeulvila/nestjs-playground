import { Module } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaTag } from './entities/area-tag.entity';
import { AreaRepository } from './entities/area.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AreaRepository, AreaTag])],
  controllers: [AreasController],
  providers: [AreasService],
})
export class AreasModule {}
