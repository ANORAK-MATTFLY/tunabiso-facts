const {data} = require('./data/articles.js');

const resolvers = {
    Query: {
        getArticle(_, { title }, __) {
            return data.filter(article => {
                article.title == title;
            });
        }
    }
};

module.exports = resolvers;
