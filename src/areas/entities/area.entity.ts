import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { AreaTag } from './area-tag.entity';

@Entity()
@Tree('materialized-path')
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  workspaceId: number;

  @TreeParent()
  parent: Area;

  @TreeChildren()
  children: Area[];

  @ManyToMany(() => AreaTag, (tag) => tag.areas)
  tags: AreaTag[];
}
