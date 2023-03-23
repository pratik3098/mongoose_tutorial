'use strict'
/**
 * The file contains the basic CRUD quries for a mongodb schema model
 */
const model=require("./db.js")
const utils=require("./utils.js")


/**
 * The function inserts the new user in the db with the email as the index
 * @param {String} email 
 * @param {String} password 
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} org 
 * @param {String} callback 
 */
exports.insert=function(email, password, firstName, lastName, org, callback){

    
    model.create({email, password, firstName, lastName, org}).then(function(res){
       
           return callback(null, res)
    }).catch(err=>{
        
        return callback(err)
    })

}




/**
 * The function inserts the new user in the db with the email as the index
 * in an async manner
 * @param {String} email 
 * @param {String} password 
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} org 
 */
exports.insertAsync=async function(email, password, firstName, lastName, org){

    try{
      
        const res = await model.create({email, password, firstName, lastName, org})
        return res

    }catch(err){
        return new Error(err)
    }
    

}


/**
 * The function updates the perticular user with whatever keys and updated values 
 * supplied. The user is identified by its email
 * 
 * @param {String} email 
 * @param {JSON} obj 
 * @param {function} callback 
 */
exports.update=function(email, obj, callback){

    model.updateOne({email},obj).then(res=>{
        return callback(null,res)
    }).catch(err=>{
        return callback(err)
    })
}



/**
 * The function updates two users with whatever keys and updated values 
 * supplied. The users are identified by its email.
 * @param {String} email 
 * @param {JSON} obj 
 * @param {function} callback 
 */
exports.updateMany=function(email, email1, obj, callback){

    model.updateMany({ $or: [ {email}, {email: email1}]
    },obj).then(res=>{
        return callback(null,res)
    }).catch(err=>{
        return callback(err)
    })
}


/**
 * The function retrieves the user identified by its email id and retirves 
 * the certain values of it
 * @param {String} email 
 * @param {Function} callback 
 */
exports.get=function(email, callback){
  
    
    // Only the partial information needed is retireved and not the entire user object
    model.findOne({email}, "_id firstName lastName email org").then(res=>{
        return callback(null, res)
    }).catch(err=>{
        return callback(err)
    })
} 


/**
 * The function retrieves the user identified by its email id and retirves 
 * the certain values of it in async manner
 * @param {String} email 
 */
exports.getAsync=async function(email){
  
    try{
        // Only the partial information needed is retireved and not the entire user object
        const res = await model.findOne({email}, "_id firstName lastName email org")
        return res

    }catch(err){
        return new Error(err)
    }
} 


/**
 * The function deletes the perticular user from the collection
 * @param {String} email 
 * @param {Function} callback 
 */
exports.delete=function(email, callback){

    model.deleteOne({email})
    .then(res=>{
        return callback(null, res)
    }).catch(err=>{
        return callback(err)
    })
  
    
} 



/**
 * The function deletes the user identified by its email id  in async manner
 * @param {String} email 
 */
exports.deleteAsync=async function(email){
  
    try{
        // Only the partial information needed is retireved and not the entire user object
        const res = await  model.deleteOne({email})
        return res

    }catch(err){
        return new Error(err)
    }
} 


