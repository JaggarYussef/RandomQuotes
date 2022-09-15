require('dotenv').config();

const express = require('express')
const app= express(); 
const qRouter= require('./Routes/Authors')
const mongoose= require('mongoose');
const quotes= require('./Models/quotes');
const { response } = require('express');
const axios = require('axios');




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
  
//    try {
//     const fetched_quotues= await quotes.find()
//     res.json(fetched_quotues)
//    } catch (error) {
//     res.json({message: error.message})
//   }
   res.render('index')
})

app.get('/:author', async(req, res) => {
    // fetcher();
     fetcher()
     res.send('hey')
    
     

})


app.post('/go', async (req, res) => {




    let testArray= await fetcher();
    
    console.log(testArray);

    // const newQuote=  new quotes({
    //     name: 'jaggaro',
    //     quote: 'he got the dawg in him',
        
    // })

    try {
      quotes.insertMany(testArray)
    } catch (error) {
      res.json({message: error.message})
    }
    // try {
    //     //console.log('calleds FIRST TIME');
    //     const saveQuote= await newQuote.save();
    //     //console.log('calleds');
    //     console.log('this is saved Quote' + saveQuote);
    //     res.send(saveQuote)
    // } catch (error) {
    //     res.status(400).json({message: error.message})
    // }
})

  //fetches quotes from api. Res gets mapped to make object of {name: item.author, content: item.content} 
  //returns an array of quotes object
  async function fetcher(){
 
    let quotesArray = [];
    for (let index = 1; index < 10; index++) {
      
      try {
        const res = await axios.get(`https://api.quotable.io/quotes?page=${index}`)
        const resultsArray= res.data.results;
        resultsArray.map(item => {
          quotesArray.push({quote: item.content, name: item.author})
        })
      } catch (error) {
        console.error(error);
        
      }
    }
    //console.log(quotesArray);
    return quotesArray;
   
 }



app.use('/Authors', qRouter)