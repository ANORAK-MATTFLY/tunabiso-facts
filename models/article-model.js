const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    sourceUrl: {
        type: Array,
        require: false,
    }
});

module.exports = mongoose.model("Article", ArticleSchema);