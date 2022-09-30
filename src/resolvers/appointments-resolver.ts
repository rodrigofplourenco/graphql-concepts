import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";

import { CreateUserInput } from "../dtos/inputs/create-user-input";
import { House } from "../dtos/models/house-model";
import { User } from "../dtos/models/user-model";
 
@Resolver(User)
export class AppointmentsResolver {
  @Query(() => [User])
  async users() {
    return [
      {
        name: "John Doe",
        age: 35
      }
    ];
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: CreateUserInput) {
    const user = {
      name: data.name,
      age: data.age
    }

    return user;
  }

  @FieldResolver(() => House)
  async house(@Root() user: User) {
    console.log(user);

    return {
      value: 30000
    };
  }
}