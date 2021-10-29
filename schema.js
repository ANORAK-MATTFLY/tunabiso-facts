const { gql } = require("apollo-server");

const typeDefs = gql`
    type Article {
        title: String!
        link: String!
        sourceUrl: String!
    }

    type Query {
        getArticleByTitle(title : String!): Article!
        getAllArticles: [Article!]
    }

    type Mutation {
        createArticle(title: String!, link: String!, sourceUrl: String!): String!
    }
`;

module.exports = typeDefs;
