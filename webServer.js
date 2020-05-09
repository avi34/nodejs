create a folder in which you want to set up project
and run the nmp init -y command for installing npm pacakge 
install express library (Fast, unopinionated, minimalist web framework for Node.js)
make a folder src 
make a file for starting point (app.js)


const path = require('path');
const express = require('express');


const app = express()

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public'))

app.use(express.static(path.join(__dirname, '../public')))





app.get('',(req, res)=>{
    res.send('hello express!')
})
app.get('/help',(req, res)=>{
    res.send('this is help page')
})
app.get('/about', (req, res)=>{
    res.send('this is about page')
})
app.get('/weather',(req, res)=>{
    res.send('<h1>hello weathr</h1>')
})
app.get('/json', (req, res)=>{
    res.send({
        "name": "avinash",
        "age": 27
    })
}) 
//app.com
//app.com/help
//app.com/about
app.listen(3000, ()=>{
    console.log('server is up on post 3000')
})


//make public folder and use this line to connect 

app.use(express.static(path.join(__dirname, '../public')))

index.html will run default
and other file will work base url / file name
