export class RelationInAreaDto {
  id: number;
}

export class CreateAreaDto {
  name: string;
  parent: RelationInAreaDto;
  tags: RelationInAreaDto[];
}
