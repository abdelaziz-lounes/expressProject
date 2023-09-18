const express = require("express");

const messagesController = require("../controlers/messages.controller");

const messagesRouter = express.Router();

messagesRouter.post("/", messagesController.postMessage);

// getting message

messagesRouter.get("/", messagesController.getMessages);

module.exports = messagesRouter;
