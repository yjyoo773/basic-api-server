'use strict'

module.exports = (req,res,next) =>{
    console.log('REQUEST DATA: ',req.method, req.path)
    next()
}