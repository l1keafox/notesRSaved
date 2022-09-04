const express = require("express");
const router = express.Router();
const database = require('../../db/db.json');
const { readFromFile, writeToFile, readAndAppend } = require('../../helpers/fsUtils');

router.get('/',async (req,res) => {
    console.log(`Request to get database ${req.method} BLAH`);
    data = await readFromFile("./db/db.json");
    res.json( JSON.parse(data) );

});


router.post('/', async(req,res) => {
    console.log(`Request to get database ${req.method} YO`);
    
    const { title, text } =  req.body;
    if(req.body) {
        const newNote = {
            title,
            text,
            "id" : Math.floor(Math.random() * 1000)
        };
        await readAndAppend(newNote, './db/db.json');
        res.json(`Note added !@!`);

    } else {
        res.errored("ERROR in saving notes");
    }
    console.log("DONE");
});

router.delete('/:id',async (req,res) => {
    console.log(`Request to get database ${req.method}`,req.params.id);
    data = await readFromFile("./db/db.json");
    //let dataObj = JSON.parse(data);
    let arrayOfNotes =  JSON.parse(data);
    console.log("BEFORE", arrayOfNotes);
    let i = arrayOfNotes.length;
    while(i--){
//    for(let i in arrayOfNotes){
        if(arrayOfNotes[i].id == req.params.id){
            console.log("THIS ONE",arrayOfNotes[i],i);
            console.log( arrayOfNotes.splice(i) );
            //note = undefined;
  //          break;
        }
    }
    //res.json(JSON.parse(data) );
    console.log("AFTER", arrayOfNotes);
    console.log();
    writeToFile( `./db/db.json`, arrayOfNotes);
    res.json("All done" );
}); 


module.exports = router;