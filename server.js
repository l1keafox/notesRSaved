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
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

// First get just sending the welcome page from index.html
// GIVEN a note-taking application
// WHEN I open the Note Taker
// THEN I am presented with a landing page with a link to a notes page

app.get('/', (req,res) => 
res.sendFile(path.join(__dirname,'/public/index.html'))
)

    // WHEN I click on the link to the notes page
    // THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

app.get('/notes',(req,res) => 
res.sendFile( path.join(__dirname,'/public/notes.html') )
)





// start listening at the port. yo
app.listen(PORT, ()=>
console.log(`App Listening at http://localhost:${PORT}   yo`)
)
