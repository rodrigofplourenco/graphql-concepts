import { InputType, Field } from "type-graphql";

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  houseId: number;
}