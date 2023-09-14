const express = require("express");
const path = require("path");

const freindsRouter= require("./routers/freinds.router");

const app = express();

const PORT = 3000;


// middle ware here
app.use(function(req, res,next){
  const start=Date.now();
  next();
  const delta=Date.now()-start;
  console.log(`logging ${req.url} ${req.method} ${delta}ms`)
})

app.use(express.json());

//end points
app.use('/freinds',freindsRouter)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
