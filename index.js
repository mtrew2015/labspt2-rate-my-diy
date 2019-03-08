const {GraphQLServer} = require('graphql-yoga');
//const { prisma } = require('./generated/prisma-client');
 const Mutation = require('./src/resolvers/Mutation');
 const Query = require('./src/resolvers/Query');
 const User = require('./src/resolvers/User');

 const resolvers = {
   Query,
   Mutation
 }



//context: { prisma },

const options = {
  port: 4466,
  endpoint: '/graphql'
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  introspection: true,
  playground: true
});

server.start(options, ({ port }) => 
  console.log(`🚀 Server ready at ${port}`)
);
// https://github.com/timanovsky/subdir-heroku-buildpack
// PROJECT_PATH