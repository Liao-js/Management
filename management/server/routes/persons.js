var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Persons = require('../models/persons');

//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/persons');

mongoose.connection.on("connected", function() {
	console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function() {
	console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function() {
	console.log("MongoDB connected disconnected.")
});

