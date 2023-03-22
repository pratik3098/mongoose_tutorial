'use strict'
const randomstring = require("randomstring");


exports.connectionString=function(obj){
    return `mongodb+srv://${obj.username}:${obj.password}@${obj.url}/${obj.dbname}`
}

exports.newUserName=function(){
  return randomstring.generate(7)
}

