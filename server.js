require('dotenv').config();

const express = require('express')
const app= express(); 
//const qRouter= require('./Routes/Authors')
const mongoose= require('mongoose');
const quotes= require('./Models/quotes');
const { response } = require('express');
const axios = require('axios');
const PORT = process.env.PORT || 3000



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
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json());
app.use('/public',  express.static('public'))



app.get('/', async (req, res)=> {
  
   res.render('index')
})

app.get('/getAll', async (req, res) => {
  console.log('called');

  try {
    console.log('called');
    const jsonQuotes= await quotes.find()
    console.log(jsonQuotes);
    res.json(jsonQuotes)
  } catch (error) {
    res.json({message: error.message})
  }
  
})

app.get('/:author', async(req, res) => {

   try {
    console.log('author called');
    const param= req.params.author;
    const substring= param.substring(1) 
    const quotes_of_author=  await quotes.find({name: substring}) ;
    res.json(quotes_of_author);
   } catch (error) {
    res.status(404).json({message: error.message});
   }})
    
     

// })



app.post('/go', async (req, res) => {




    let testArray= await fetcher();
    
  
    try {
      quotes.insertMany(testArray)
    } catch (error) {
      res.json({message: error.message})
    }})
   

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
        res.json({message: error.message})
        
      }
    }
    //console.log(quotesArray);
    return quotesArray;
   
 }


