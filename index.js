const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.Port || 5000;

const chef = require('./data/chef.json');
const recipe = require('./data/recipe.json');

app.use(cors());

app.get('/', (app, res)=>{
  res.send('Dragon is running');
})

app.get('/chef', (req,res)=>{
    res.send(chef)
})
app.get ('/recipe', (req, res)=>{
  res.send(recipe)
})
app.get('/recipe/:id', (req,res)=>{
  const id = req.params.id;
  console.log(id);
  const selectRecipe = recipe.find(rec =>rec.chefs_id == id)
  res.send(selectRecipe)
})
app.listen(port, ()=>{
    console.log(`dragon api is runnign on port :${port}`);
})