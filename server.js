const express = require('express')
const app= express(); 

app.listen(3000);

app.set('views', './views')
app.set('view engine', 'ejs')
app.use('/public',  express.static('public'))
app.get('/', (req, res)=> {
   // res.send('hi')
    res.render('index')
})