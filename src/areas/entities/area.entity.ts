import {
  Column,
  Entity, JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent
} from "typeorm";
import { AreaTag } from './area-tag.entity';

@Entity()
@Tree('materialized-path')
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @TreeParent()
  parent: Area;

  @TreeChildren()
  children: Area[];

  @ManyToMany(() => AreaTag, (areaTag) => areaTag.areas, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  tags: AreaTag[];
}
