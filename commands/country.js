
const fetch = require('node-fetch')
const {MessageEmbed, Message} = require('discord.js');
const { time } = require('@discordjs/builders');
var randomColor = Math.floor(Math.random()*16777215).toString(16);
module.exports = async function(msg,args){

    let country = "India"
    if(args.length>0){
        country = args.join(" ")
    }
    let api = `https://restcountries.com/v3.1/name/${country}`
    let repo = await fetch(api)
    let countryData = await repo.json()
    console.log(countryData)
    let naam = countryData[0].altSpellings[2]
    console.log(naam)
    let region = countryData[0].subregion
    console.log(region)
    let capital = countryData[0].capital[0]
    let map = countryData[0].maps.googleMaps
    console.log(map)
    let flag = countryData[0].flags.png
    let coat = countryData[0].coatOfArms.png
    let continent = countryData[0].continents[0]
    let timezones = countryData[0].timezones
    let currencypro = countryData[0].currencies
    let current = Object.keys(currencypro)
    let currencyfinal = current[0]
    console.log(timezones)
    console.log(flag)
    console.log(continent)
    console.log(current)
    const countryEmb = new MessageEmbed()
    .setTitle(naam)
    .setURL(map)
    .setColor("#8A2BE2")  
    .addFields(
        {name:"Capital",value:capital},
        {name:"Continent",value:continent,inline:true},
        {name:"Region",value:region,inline:true},
        {name:"Timezones",value:timezones,},
        {name:"Currencies",value:currencyfinal}
    )   
    .setImage(flag)
    .setThumbnail(coat)
    msg.channel.send(countryEmb)
}

