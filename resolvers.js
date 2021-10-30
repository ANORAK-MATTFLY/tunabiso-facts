const Article = require("./models/article-model");
const mongoose = require("mongoose");

const resolvers = {
    Query: {
         async getArticleByTitle(_, { title }, __) {
             var regexp = new RegExp("^"+ title);
            const article = await Article.findOne({title: regexp }).exec();
            if (article) {
                return article;
            }
            return "Something went wrong";
        },

        async getAllArticles(_, args, __) {
            try {
                return Article.find({});
            } catch (error) {
                return error;
            }
        },
    },

    Mutation: {
        async createArticle(_, { title, link, sourceUrl }, __) {
            const article = await Article({
                title,
                link,
                sourceUrl
            });
            await article.save().then(result => result).catch(error => { throw new Error(error); });
            try {
                if (article != null) {
                    return "A new article has been created!";
                }
            }
            catch (error) {
                throw new Error(error);
            }
        },
    }
};

module.exports = resolvers;
