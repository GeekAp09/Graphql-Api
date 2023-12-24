import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { users,quotes } from "./data.js";

const typeDefs = gql`
  type Query {
    greet:String
    users:[User]
    quotes:[Quotes]
  }

  type User{
    id:ID
    firstName:String
    lastName:String
    email:String
    password:String
  }

  type Quotes{
    id:ID
    quote:String
  }
`;

const resolvers = {
  Query: {
    // greet: () => {
    //   return "Hello World";
    // },
    users:()=>users,
    quotes:()=>quotes

  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins:[
    ApolloServerPluginLandingPageGraphQLPlayground
  ]
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
