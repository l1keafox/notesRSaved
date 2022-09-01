const exp = require('constants');
const express = require('express');
const path = require('path');
const fs= require('fs');


const PORT = 4269;

const app = express();

// Middleware here

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));
const notes = require('./routes/api/notes');
app.use('/api/notes',notes);

// First get just sending the welcome page from index.html
app.get('/', (req,res) => 
res.sendFile(path.join(__dirname,'/public/index.html'))
)

app.get('/notes',(req,res) => 
res.sendFile( path.join(__dirname,'/public/notes.html') )
)


// start listening at the port. yo
app.listen(PORT, ()=>
console.log(`App Listening at http://localhost:${PORT}   yo`)
)
