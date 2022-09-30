import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from "node:crypto";

// This is schema first approach
// First we code the schema, then the code

interface IUser {
  id: string;
  name: string;
  age: number;
}

const users: IUser[] = [];

const typeDefs = gql`
  type User {
    id: String
    name: String
    age: Int
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, age: Int!): User!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => users,
    },

    Mutation: {
      createUser: (_, args) => {
        const { name, age } = args;

        const user = {
          id: randomUUID(),
          name,
          age
        }

        users.push(user);

        return user;
      }
    }
  }
});

server.listen().then(({ url }) => console.log('Listening on ' + url));