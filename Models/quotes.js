const mongoose= require('mongoose');

const quotesSchema = new mongoose.Schema({
    
    quote: String,
    name: String,
    
})

module.exports= mongoose.model('quotes', quotesSchema)