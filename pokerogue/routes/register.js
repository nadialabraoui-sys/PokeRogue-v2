var express = require('express');
var router = express.Router();

let UserControl = require("../models/UserControl");
let battlesCollection = [];
router.get('/', function(req, res, next) {
res.json(battlesCollection);
});

router.get('/:id', function(req, res){
    let row = battlesCollection.filter((x) => x.id === req.params.id);
    if (row.length === 0) {
        res.status(404).send("Not Found");
    } else {
        res.json(row);
    }
});
router.post('/', function(req, res){
    const row = new UserControl(
        req.body.dataStart,
        req.body.image,
        req.body.pokeName,
        req.body.damageDoneTrainer,
        req.body.damageReceivedTrainer,
        req.body.shiny,
        req.body.caught
    );
    arrayTorturas.push(tortura);
    contador++;
    res.status(201).json(tortura);

});
router.put('/:id', function(req, res){


});
router.delete('/:id', function(req, res){


});
module.exports = router;