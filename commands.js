
const fetch = require('node-fetch')
const {MessageEmbed, Message} = require('discord.js');
const prefix = "$" 

const magicball = require('./commands/magicball');
const avatar = require('./commands/avatar')
const gif = require("./commands/gif");
const weather = require("./commands/weather")
const  help = require("./commands/help")
const nasa = require("./commands/nasa")
const fruit = require("./commands/fruit")
const age = require("./commands/age")
const pokedex = require("./commands/pokedex")
const country = require('./commands/country')
const kick = require('./commands/kick')
const ban = require('./commands/ban')
const shipnskip = require("./commands/shipnskip")
const youtube = require('./commands/youtube')
const meme = require('./commands/meme');
const reddit = require('reddit.images');
const redditpost = require("./commands/reddit")
const word = require('./commands/word');
const cute = require("./commands/cute");
const who = require('./commands/who');
const slap = require('./commands/slap');
const oogway = require('./commands/advice')
const wasted = require("./commands/wasted");
const spongebob = require('./commands/spongebob');
const pride = require('./commands/pride');
const wanted = require('./commands/wanted');
const trigger = require('./commands/trigger');
const greyscale = require('./commands/greyscale');
const trash = require('./commands/trash');
const jail = require('./commands/jail');
const hitler = require('./commands/hitler');
const pixl = require('./commands/pixl');
const kill = require('./commands/kill');
const shit = require('./commands/shit');
const role = require('./commands/role');
const manga = require('./commands/manga');
const anime = require('./commands/anime');
const wiki = require('./commands/wiki');
const hetero = require('./commands/hetero');

module.exports = async function (msg,client){
    

    let input = msg.content.toLowerCase()
    let tokenz = input.split(' ') 
    let command = tokenz.shift() 

    let input2 = msg.content
    
    let tokenz2 = input2.split(' ') 
    let msgDataFinal = tokenz2.slice(1).join(" ")
    console.log(msgDataFinal)
const commands = {
        gif : gif,
        magicball:magicball,
        avatar:avatar,
        weather:weather,
        nasa:nasa,      
        fruit:fruit,
        age:age,
        pokedex:pokedex,
        country:country,
        kick:kick,
        who:who,
        shipnskip:shipnskip,    
        youtube:youtube,
        meme:meme,
        reddit:redditpost,
        aww:cute,
        yt:youtube,
        word:word,
        slap:slap,
        oogway:oogway,
        wasted:wasted,
        spongebob:spongebob,
        pride:pride,
        wanted:wanted,    
        trigger:trigger,
        mono:greyscale,
        trash:trash,
        jail:jail,
        hitler:hitler,
        pixl:pixl,
        kill:kill,
        shit:shit,
        help:help,
        kick:kick,
        ban:ban,
        role:role,
        manga:manga,
        anime:anime,
        wiki:wiki,
        hetero:hetero,
        

    
        }
    
    
if(command.charAt(0)=== prefix){
    command = command.substring(1);
    if(commands.hasOwnProperty(command)){
    commands[command](msg,tokenz);
    }
    else{
        const errorEmb = new MessageEmbed()
        .setColor('#660000')
        .setTitle('Incorrect Command')
        .setDescription(`Did you type out a wrong command by mistake?\nRefer to ${prefix}help for  help if you need any!`)
        msg.channel.send(errorEmb)
    }
}

    
    }




