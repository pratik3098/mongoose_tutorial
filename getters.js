'use strict'
const moment=require('moment')


exports.timestamp=function(v){
    return moment(v).format('YYYY-MM-DDTHH:mm:ss')
}


