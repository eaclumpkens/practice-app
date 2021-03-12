const express = require('express');
const PORT = process.env.PORT || 4000;
const { ApolloServer, gql } = require('apollo-server-express');
 
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen(PORT, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);