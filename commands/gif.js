

const fetch = require('node-fetch')
const {MessageEmbed, Message} = require('discord.js')

module.exports = async function(msg,args){
console.log(args)
let gifterm = 'kanna'


if(args.length>0){
    gifterm = args.join(" ")
    // takes slices out of an array and joins them
}



if(args[0] == "s"){
   args =  args.shift()
    var specific = "true"
    console.log(args)
}

else{
    var specific = "false"
}
if(args.length>0){
    gifterm = args.join(" ")
    // takes slices out of an array and joins them
}

let url =`https://g.tenor.com/v1/search?q=${gifterm}&key=${process.env.GIFKEY}&contentfilter=low`
let response = await fetch(url);    
let json = await response.json();
if(specific = "false"){
let indexed = Math.floor(Math.random())* json.results.length; 
}

if(specific="true"){
    indexed = 0
}   
msg.channel.send(json.results[indexed].url);
}