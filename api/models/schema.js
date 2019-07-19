'use strict'

const db = require('../database/db')
const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    identication: String,
    numPlaces: String,
    numTables: String
});

var RoomModel = mongoose.model("rooms", roomSchema);
 
module.exports = RoomModel;