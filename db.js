'use strict'
const mongoose=require('mongoose')
const utils=require('./utils.js')
const connection=require("./connection.json")
const validators=require("./validators.js")
// Generating the  mongo connection string
const dbUrl = utils.connectionString(connection)

// Creating a mongo connection 
const db =mongoose.createConnection(dbUrl, {  useNewUrlParser: true })


// Creating a sample schema for user managgement 
const schema = new mongoose.Schema({
    username: {
        // Setting the key as the Primary id for the schema 
        unique: true, 
        type: String, 
        // Adding the error check if the null/undefined/empty string is inputed
        sparse: true,
        // Cleaning the string for any whitespaces
        trim : true, 
        // Setting up the default value for the value rather than the user input 
        default: utils.newUserName(), 
        // Making sure the value does not get updated in the future
        immutable: true, 
        // Performing the regex validation
        validate: [validators.isValidUsername, 'invalid username']
    },
    
    email: {
        type: String, 
        sparse: true,
        trim : true, 
        // Making sure the value is must 
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


