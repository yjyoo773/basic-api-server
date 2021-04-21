'use strict'

// 3RD PARTY DEPENDENCIES
const express = require('express')
const app = express()

// INTERNAL MODULES
const notFoundHandler = require('./error-handlers/404')
const error = require('./error-handlers/500')
const logger = require('./middleware/logger')
const foodRouter = require('./routes/food')
const drinkRouter = require('./routes/drink')
// GLOBAL MIDDLEWARES
app.use(express.json())
app.use(logger)

// ROUTES
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use(foodRouter)
app.use(drinkRouter)

// ERROR HANDLERS
app.use('*',notFoundHandler)
app.use(error)

module.exports = {
    server : app,
    start: port =>{
        app.listen(port,()=>{console.log(`server on ${port}`)})
    }
}