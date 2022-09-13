const mongoose= require('mongoose');

const quotesSchema = new mongoose.Schema({
    name: String,
    quote: String,
    
})

module.exports= mongoose.model('quotes', quotesSchema)