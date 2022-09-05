const mongoose= require('mongoose');

const quotesSchema = new mongoose.Schema({
    name: String,
    quote: String,
    picture: String,
})

module.exports= mongoose.model('quotes', quotesSchema)