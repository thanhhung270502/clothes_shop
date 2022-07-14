const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema(
    {
        name: { type: String, require: true },
        price: { type: String, require: true },
        image: { type: String, require: true },
        slug: { type: String },
        image_den: { type: String },
        image_do: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Product', Product);
