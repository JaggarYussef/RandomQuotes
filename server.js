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

app.get('/go', async(req, res) => {
    // fetcher();
     fetcher()
     res.send('hey')


})


app.post('/go', async (req, res) => {


    // for(i= 0; i < 25; i++){
    //     fetcher()
    //     next();
    // }

    let testArray= await fetcher();
    
    console.log(testArray);

    // const newQuote=  new quotes({
    //     name: 'jaggaro',
    //     quote: 'he got the dawg in him',
        
    // })

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

  async function fetcher(){
 
    let qutoesArray = [];
    
    // for (let index = 0; index < 100; index++) {
    //   }


        axios.get('https://api.quotable.io/quotes').then(response  => {
        const content = response.data.content;
        const author = response.data.author;
        //  console.log(response.data);
         console.log(response.data.author);
        // console.log(quoteObject);

        qutoesArray.push({name: author, quote: content })

    })
    return qutoesArray;
   
 }



app.use('/Authors', qRouter)