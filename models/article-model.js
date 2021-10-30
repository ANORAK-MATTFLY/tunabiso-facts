const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    sourceUrl: {
        type: String,
        require: false,
    }
});

module.exports = mongoose.model("Article", ArticleSchema);
