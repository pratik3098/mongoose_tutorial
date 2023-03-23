'use strict'
const query=require("./queries.js")
const {callback}=require("./utils.js")
const user =require("./user.json")


async function main(){

    // Inserting the user in the db 
    query.insert(user.email, user.password, user.firstName, user.lastName, user.org, callback)

    // Retrieving the user 
    query.get(user.email, callback)
    
    // getting the user in async manner
    try{
    const res = await query.getAsync(user.email)
    console.log(res)
    }catch(err){
        console.log("err: ", err)
    }



    // Updating the user org 
    query.update(user.email, {"org": "George Brown College"}, callback)

    // Deleting the user
    query.delete(user.email, callback)
    
}

main()