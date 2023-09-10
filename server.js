const express = require("express");
const path = require("path");
const freindController= require("./controlers/freinds.controller.js")

const app = express();

const PORT = 3000;

const freinds = [
  {
    id: 0,
    name: "Albert Einstein",
  },
  {
    id: 1,
    name: "sit isaac newton",
  },
  {
    id: 2,
    name: "grahanbel alexander",
  },
];

// middle ware here
app.use(function(req, res,next){
  const start=Date.now();
  next();
  const delta=Date.now()-start;
  console.log(`logging ${req.url} ${req.method} ${delta}ms`)
})

app.use(express.json());

//end points

app.post('/freinds',freindController.postFreind)

// getting freinds

app.get("/freinds", freindController.getFreinds);

// get freind

app.get("/freinds/:freindId", freindController.getFreind);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
