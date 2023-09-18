const express = require("express");
const path = require("path");

const freindsRouter= require("./routers/freinds.router");
const messagesRouter= require('./routers/messages.router')

const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;


// middle ware here
app.use(function(req, res,next){
  const start=Date.now();
  next();
  const delta=Date.now()-start;
  console.log(`logging ${req.url} ${req.method} ${delta}ms`)
})

app.use( express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Friends Are VERYY Clever',
    caption: 'Let\'s go skiing!',
  });
});

//end points
app.use('/freinds',freindsRouter);
app.use('/messages',messagesRouter)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
