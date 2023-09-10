const model= require("../models/freinds.model");

function postFreind(req, res){
    if (!req.body.name) {
      return res.status(400).json({
        error: "missing freind name",
      });
    }
  
    const newFreind = {
      name: req.body.name,
      id: model.length,
    };
    model.push(newFreind);
    res.json(newFreind);
}

function getFreinds(req, res) {
    res.json(model);
    // 'index', {
    // title: 'My Friends Are VERYY Clever',
    // caption: 'Let\'s go skiing!',
    // }
  }

function getFreind(req, res) {
    const freindId = Number(req.params.freindId);
    const freind = model[freindId];
    if (freind) {
      res.status(200).json(freind);
    } else {
      res.status(404).json({ error: "freinds doesnt exist" });
    }
    // 'index', {
    // title: 'My Friends Are VERYY Clever',
    // caption: 'Let\'s go skiing!',
    // }
  }

  module.exports={
    getFreinds,
    getFreind,
    postFreind
  }