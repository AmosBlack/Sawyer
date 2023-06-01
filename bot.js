console.log('Starting Sawyer Up')
require('dotenv').config();
const fetch = require('node-fetch')
const Discord = require('discord.js')
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');



client.on('ready',readyDiscord);
function readyDiscord(){
    console.log('Logged In')    
    client.user.setStatus("idle")
    client.user.setActivity(' $help', { type: 'WATCHING' });}
    console.log('Set User Stats')

function call(){
    console.log('woo')
}
const commandHandler = require("./commands",call)

client.on('message',commandHandler )

client.login(process.env.TOKEN);


 
  


    
   
    
   

 
