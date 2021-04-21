'use strict'

const FoodModel = require("./food")

class DrinkModel extends FoodModel {
    constructor(id,record){
        super(0,[])
    }
}

module.exports = DrinkModel