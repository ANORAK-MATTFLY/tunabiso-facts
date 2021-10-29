const Article = require("./models/article-model");
const { v4: uuidv4 } = require("uuid");


const resolvers = {
    Query: {
        async getArticle(_, { id }, __) {
            const article = await Article.findOne({ id }).exec();
            if (article) {
                return article;
            }
            return "Something went wrong";
        }
    }
};

module.exports = resolvers;
