const { gql } = require("apollo-server");

const typeDefs = gql`
    type Article {
        id: String!
        title: String!
        link: String!
        sourceUrl: String!
    }

    type Query {
        getArticle(id : String!): Article!
    }
`;

module.exports = typeDefs;
