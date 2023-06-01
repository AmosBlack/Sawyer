
const fetch = require('node-fetch')
const {MessageEmbed, Message} = require('discord.js')
var randomColor = Math.floor(Math.random()*16777215).toString(16);

module.exports = async function(msg,args){
let fruit = "orange"
if(args.length>0){
    fruit = args.join(" ")
    // takes slices out of an array and joins them
}



    let fruitrl = `https://www.fruityvice.com/api/fruit/${fruit}`
    let reply = await fetch(fruitrl)
    let json = await reply.json()
    console.log(json)
    console.log(json.error)
   
    if(json.error ="undefined"){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    const fruitInfo = new MessageEmbed()
    .setColor("#8A2BE2")
    .setThumbnail('https://media.discordapp.net/attachments/933588061231661076/936931827929722890/unknown.png')
    .setTitle(json.name)
    .addFields(      
        {name:'Genus',value:json.genus},
        
        {name:"Proteins",value:json.nutritions.protein,inline:true},
        {name:"Fats",value:json.nutritions.fat,inline:true},
        
        {name:"Sugar",value:json.nutritions.sugar,inline:true},
        {name:"Calories",value:json.nutritions.calories,inline:true}
        
        )
        msg.channel.send(fruitInfo)

    }

    else if(json.error = "The fruit was not found" ) {
        msg.channel.send("Please enter a valid input   ")   
    }
}