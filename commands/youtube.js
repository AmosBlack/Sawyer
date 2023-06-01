const fetch = require('node-fetch')
const {MessageEmbed, Message} = require('discord.js');
var randomColor = Math.floor(Math.random()*16777215).toString(16);
const Discord = require('discord.js')
const client = new Discord.Client();
module.exports = async function(msg,args){
    searchTerm = "rick-astley never gonna give you up"
    if(args.length>0){
        searchTerm = args.join(" ")
    }   
    
    searchURL = `https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&maxResults=5&key=${process.env.YTKEY}`
    youtubeData = await fetch(searchURL)
    ytJSON = await youtubeData.json()
    console.log(ytJSON)
    let videoID = ytJSON.items[0].id.videoId
    let id2 = ytJSON.items[1].id.videoId
    let id3 = ytJSON.items[2].id.videoId
    let id4 = ytJSON.items[3].id.videoId
    let id5 = ytJSON.items[4].id.videoId
   
    
    let finalLink = `https://www.youtube.com/watch?v=${videoID}`
    msg.channel.send(finalLink)

}