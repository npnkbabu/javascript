//(function (exports, require, module, __filename, __dirname){

console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

function log(message){
    //send http request
    console.log(message);
}
//in moduels you can export function or object

module.exports.myLog = log;
////})