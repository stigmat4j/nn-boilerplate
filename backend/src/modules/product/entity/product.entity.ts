import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  @Field()
  productID: string;
}
