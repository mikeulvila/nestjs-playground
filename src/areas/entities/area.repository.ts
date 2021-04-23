import { EntityRepository, TreeRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Area } from './area.entity';

@Injectable()
@EntityRepository(Area)
export class AreaRepository extends TreeRepository<Area> {
  findDescendantsTree(entity: Area): Promise<Area> {
    return super
      .createDescendantsQueryBuilder('area', null, entity)
      .leftJoinAndSelect('area.tags', 'tags')
      .getRawAndEntities()
      .then((entitiesAndScalars) => {
        const relationMap = super.createRelationMaps(
          'area',
          entitiesAndScalars.raw,
        );
        super.buildChildrenEntityTree(
          entity,
          entitiesAndScalars.entities,
          relationMap,
        );
        return entity;
      });
  }
}
