const express = require('express');
const app = express();
const port = process.env.Port || 5000;

const chef = require('./data/chef.json')
app.get('/', (app, res)=>{
  res.send('Dragon is running');
})

app.get('/chef', (req,res)=>{
    res.send(chef)
})
app.listen(port, ()=>{
    console.log(`dragon api is runnign on port :${port}`);
})