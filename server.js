require('dotenv').config();

const express = require('express')
const app= express(); 
const qRouter= require('./Routes/Authors')
const mongoose= require('mongoose');
const quotes= require('./Models/quotes');

//kG3PlkIOGDuDotzw
//jayay


//MONGO DB CALLS
mongoose.connect("mongodb+srv://jayay:kG3PlkIOGDuDotzw@cluster0.dxfjnld.mongodb.net/?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    
    useUnifiedTopology: true
  })
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', function() {
    console.log('success');
})

//APP CONFIGS
app.listen(3000);

app.set('views', './views')
app.set('view engine', 'ejs')
app.use('/public',  express.static('public'))
app.use(express.json());


app.get('/', async (req, res)=> {
  
   try {
    const fetched_quotues= await quotes.find()
    res.json(fetched_quotues)
   } catch (error) {
    res.json({message: error.message})
   }
   // res.render('index')
})

app.post('/', async (req, res) => {
    const newQuote=  new quotes({
        name: 'jaggar',
        quote: 'he got the dawg in him',
        picture: 'hye'
    })

    try {
        const saveQuote= await newQuote.save();
        res.send(saveQuote)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})



app.use('/Authors', qRouter)