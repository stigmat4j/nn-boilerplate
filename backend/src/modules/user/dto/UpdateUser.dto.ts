import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './CreateUserInput';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  id: string;
}
