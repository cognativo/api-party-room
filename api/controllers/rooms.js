'use strict'

const Room = require('../models/schema')
const mongoose = require('mongoose')

module.exports = {

    create: async (req, res, next) => {

        var room = new Room({
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            identication:req.body.number,
            numPlaces: req.body.numPlaces,
            numTables: req.body.numTables
        })

        try{
            var response;
            response = await room.save()
            console.log(response)
            res.status(200).json({type: 'SUCCESS', data: response})
        }catch( error ) {
            res.status(401).json({type: 'ERROR', data: error})
        }

    },

    delete: async (req, res, next) => {

        const rId = req.params.id;
        
        try{
            var roomRef = await Room.findById(rId).exec()
            var response = await roomRef.remove()
            
            res.status(200).json({type: 'SUCCESS', data: response, deleted: true})

        }catch ( err ){
            res.status(200).json({type: 'ERROR', data: response, deleted: false})
        }
    },

    getAll: async(req, res, next) => {
        
        try{
            var response = await Room.find({}).exec()
            res.status(200).json({type: 'SUCCESS', data: response})

        }catch ( err ) {
            res.status(200).json({type: 'ERROR', data: response})
        }         
    },

    getById: async (req, res, next) => {
        const rId = req.params.id;
        
        try{
            var response = await Room.findById(rId).exec()
            res.status(200).json({type: 'SUCCESS', data: response})

        }catch ( err ) {
            res.status(200).json({type: 'ERROR', data: response})
        }   
    },

    update: async(req, res, next) => {
        var rId = req.params.id
        var reqUpdate = req.body

        try {
            var response = await Room.findByIdAndUpdate(rId, reqUpdate)
            res.status(200).json({type: 'SUCCESS', data: response, updated: true})
        } catch ( err ) {
            res.status(200).json({type: 'ERROR', data: response, updated: false})
        }
    }

}