const express = require("express");

const freindController= require("../controlers/freinds.controller.js")

const freindsRouter= express.Router();


freindsRouter.post('/',freindController.postFreind)

// getting freinds

freindsRouter.get("/", freindController.getFreinds);

// get freind

freindsRouter.get("/:freindId", freindController.getFreind);

module.exports = freindsRouter;