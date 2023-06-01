const {MessageEmbed, Message} = require('discord.js')
const fetch = require('node-fetch')

module.exports = async function(msg,args){
    
    let thumb = 'https://media.discordapp.net/attachments/903177516934647808/936610511271907328/unknown.png'
    let nasaurl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA} `
var randomColor = Math.floor(Math.random()*16777215).toString(16);
let response = await fetch(nasaurl);	
let json = await response.json();
console.log(json)
let title = json.title
let image = json.hdurl
let expl = json.explanation
const weatherEmb = new MessageEmbed()
	.setTitle(`Astronomy Picture of the Day :\n${title} `)
	.setColor("#8A2BE2")
	.setThumbnail(`${thumb}`)
	.setDescription(expl)

	
	.setImage(`${image}`)
	.setTimestamp()
	.setFooter('Kanna');


msg.channel.send(weatherEmb);


}