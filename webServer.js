create a folder in which you want to set up project
and run the nmp init -y command for installing npm pacakge 
install express library (Fast, unopinionated, minimalist web framework for Node.js)
make a folder src 
make a file for starting point (app.js)


const express = require('express');

const app = express()
app.get('',(req, res)=>{
    res.send('hello express!')
})
//to set route on this server
app.get('/help',(req, res)=>{
    res.send('this is help page')
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
