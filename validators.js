'use strict'



exports.isValidUsername=function(username){

    return Boolean(username.length <= 8 )
}


exports.isValidFirstName=function(name){

    return Boolean(name.length <= 8 )
}


exports.isValidLastName=function(name){

    return Boolean(name.length <= 8 )
}

exports.isValidEmail=function(email){
    return Boolean(email.includes("@"))
}



exports.isValidPassword=function(password){
    return true
}


exports.isValidFirstName=function(firstName){
    return true
}


exports.isValidLastName=function(lastName){
    return true
}


exports.isValidOrg=function(org){
    return true
}