const userInfo = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.name} and i'm in campus ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));