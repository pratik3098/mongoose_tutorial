'use strict'
const mongoose=require('mongoose')
const utils=require('./utils.js')
const connection=require("./connection.json")
const validators=require("./validators.js")
const dbUrl = utils.connectionString(connection)
const db =mongoose.createConnection(dbUrl, {  useNewUrlParser: true })

const schema = new mongoose.Schema({
    username: {
        unique: true, 
        type: String, 
        sparse: true,
        trim : true, 
        default: utils.newUserName(), 
        immutable: true, 
        validate: [validators.isValidUsername, 'invalid username']
    },
    
    email: {
        type: String, 
        sparse: true,
        trim : true, 
        required: [true, "emailId does not exists"], 
        immutable: true, 
        validate: [validators.isValidEmail, 'invalid emailId']
    },
    password: {
        type: String, 
        sparse: true,
        trim : true, 
        required: [true, "password does not exists"], 
        immutable: true, 
        validate: [validators.isValidPassword, 'invalid password'],
        set: function(v){
            
        }
    },

    firstName: {
        type: String, 
        sparse: true,
        trim : true, 
        required: [true, "firstname does not exists"], 
        immutable: true, 
        validate: [validators.isValidFirstName, 'invalid firstname']
    },

    lastName: {
        type: String, 
        sparse: true,
        trim : true, 
        required: [true, "lastname does not exists"], 
        immutable: true, 
        validate: [validators.isValidLastName, 'invalid lastname']
    }, 

    timestamp: { 
        type: Date,
        default: Date.now(),
        immutable: true
    },

    organisation: {
        type: String, 
        sparse: true,
        trim : true, 
        validate: [validators.isValidOrg, 'invalid org']
    }
})


console.log(schema)