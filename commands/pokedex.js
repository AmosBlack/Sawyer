const fetch = require("node-fetch")
const {MessageEmbed, Message} = require('discord.js')
var randomColor = Math.floor(Math.random()*16777215).toString(16);
module.exports = async function(msg,args){
    let poke = "Kanna"
    if(args.length>0){
        poke = args.join(" ")
    
    let dex  = `https://pokeapi.co/api/v2/pokemon/${poke}`
    let reply = await fetch(dex)
    let json = await reply.json()
    console.log(json)
    var image = json.sprites.front_default
    var image2 = json.sprites.back_default
    var name = json.species.name.charAt(0).toUpperCase() + json.species.name.slice(1)
    const pokemon = new MessageEmbed()
    .setImage(image) 
    .setColor("#8A2BE2")
    .setTitle(name)
  
    msg.channel.send(pokemon)
    }
    else{msg.channel.send("```ERROR\nTell me a pokemon name and try again with $pokedex <pokemonname>```")}
}