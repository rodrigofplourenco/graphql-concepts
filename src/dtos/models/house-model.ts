import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class House {
  @Field()
  value: number;
}