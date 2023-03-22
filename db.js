'use strict'
const mongoose=require('mongoose')
const utils=require('./utils.js')
const connection=require("./connection.json")
const dbUrl = utils.connectionString(connection)
const db =mongoose.createConnection(dbUrl, {  useNewUrlParser: true })

const schema = new mongoose.Schema({

})