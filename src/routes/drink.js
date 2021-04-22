'use strict'

const express = require('express')

const Drink = require('../models/drink')
const drink = new Drink()

const drinkRouter = express.Router()

drinkRouter.get('/drink',getAll)
drinkRouter.get('/drink/:id',getOne)
drinkRouter.post('/drink',createItem)
drinkRouter.put('/drink/:id',updateItem)
drinkRouter.delete('/drink/:id',deleteItem)

function getAll(req,res){
    let items = drink.read()
    res.status(200).json(items)
}

function getOne(req,res){
    let id = parseInt(req.params.id)
    let item = drink.read(id)
    res.status(200).json(item)
}

function createItem(req,res){
    let data = req.body
    let createItem = drink.create(data)
    res.status(201).json(createItem)
}

function updateItem(req,res){
    let id = parseInt(req.params.id)
    let data =req.body
    let updateItem = drink.update(id,data)
    res.status(200).json(updateItem)
}

function deleteItem(req,res){
    let id = parseInt(req.params.id)
    let deleteItem = drink.delete(id)
    res.status(200).json({msg:'deleted!'})
}

module.exports = drinkRouter