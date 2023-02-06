import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String, { description: 'User first name' })
  firstName: string;

  @Column()
  @Field(() => String, { description: 'User last name' })
  lastName: string;

  @Column()
  @Field(() => String, { description: 'User email' })
  email: string;

  @Column()
  @Field(() => String, { description: 'User role' })
  role: string;

  @Column()
  password: string;
}
