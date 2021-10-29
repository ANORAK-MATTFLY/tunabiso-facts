require('dotenv').config();
const mongoose = require("mongoose");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require('@apollo/federation');
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
let port = process.env.PORT;
if (port == null || port == "") {
    port = 4002;
}

const mongoConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: true,
    //useFindAndModify: false,
    //useCreatendex: true, 
    //useFindAndModify: false, 
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({
          // options
        })
      ]
  });


mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ojnan.mongodb.net/tunabiso${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`, mongoConfig).then(() =>
    server.listen(port).then(({ url }) => {
        console.log(`http://localhost:${port}/graphql`);
    })
).catch(error => {
    throw new Error(error);
});
