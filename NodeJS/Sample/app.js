
function sayHello(name){
    console.log('hello '+name);
}

sayHello('kishore');

/* node modules
1. Os
2. fs
3. events
4. http
*/

//Os:
//window object in js has overall scope
//global in node.. we have file scope
 
 //global is for only this file scope. 

 //modularity
 //every file is a module in node
 //we have a main module here its app
 //console.log(module);

 //calling logger module function

 const logger = require('./logger');
//logger.myLog('here');


const path = require('path');
var parse = path.parse(__filename);
console.log(parse);

const os = require('os');
var ostype = os.type();
console.log(ostype);

//Template string
console.log(`kishore : ${ostype}`);

//files in node
var fs = require('fs');

 
 
