import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Area } from './area.entity';

@Entity()
export class AreaTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Area, (area) => area.tags)
  areas: Area[];
}
