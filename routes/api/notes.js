const express = require("express");
const router = express.Router();
const database = require('../../db/db.json');
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');
router.get('/',async (req,res) => {
    console.log(`Request to get database ${req.method}`);
    data = await readFromFile("./db/db.json");
    res.json(JSON.parse(data) );

});

module.exports = router;