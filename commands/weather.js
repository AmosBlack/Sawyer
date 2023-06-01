const fetch = require('node-fetch')
const {MessageEmbed, Message} = require('discord.js');

module.exports = async function(msg,args){
    let cityName ='London'
    console.log(args)
if(args.length>0){
    cityName = args.join("")
	
}

let weatherurl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + process.env.WEATHERKEY


let respond = await fetch(weatherurl)
let jsonz = await respond.json()
console.log(jsonz)

if(jsonz.message === 'city not found'){
	msg.channel.send('Please input a valid city')
}	
else{
let tempz = parseInt(jsonz.main.temp) - 273
console.log(parseInt(tempz)) 
let humid = jsonz.main.humidity
let wind = (jsonz.wind.speed.toFixed(1)* 18/5).toFixed(1)
let feel = jsonz.weather[0].icon	
let des = jsonz.weather[0].main	
console.log(feel)
let icon = jsonz.weather.icon
let title = jsonz.name
console.log(icon)
var randomColor = Math.floor(Math.random()*16777215).toString(16);
const weatherEmb = new MessageEmbed()
	.setColor('#8A2BE2')
	.setTitle(title)
	.setColor(randomColor)
	.setThumbnail(`https://openweathermap.org/img/wn/10d@2x.png`)
	.addFields(
		{ name: 'Temperature', value: `${tempz}C`,inline:true },
		{ name: 'Wind Speed', value: `${wind}Km/h`, inline: true },
		{ name: 'Humidity', value: `${humid}%`, inline: true },
	)
	.addField('Description', `${des}`, )
	.setImage()
	.setTimestamp()
	.setFooter('Kanna');


msg.channel.send(weatherEmb);
	}
}
