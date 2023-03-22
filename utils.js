'use strict'


exports.connectionString=function(obj){
    return `mongodb+srv://${obj.username}:${obj.password}@${obj.url}/${obj.dbname}`
}


