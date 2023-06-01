  

const fetch = require('node-fetch')
const {MessageEmbed, Message} = require('discord.js')

module.exports = function(msg,args){
    var crystymsg = ['As I see it, yes','Ask again later.','Better not tell you now.','Cannot predict now.','Concentrate and ask again.',"Don't count on it.",'It is certain.','It is decidedly so.','Most likely.','My reply is no.','My sources say no.','Outlook good.','Outlook not so good.','Reply hazy, try again.','Very doubtful.','Without a doubt.','Yes definitely.  ','Yes.','You may rely on it.']
    var randomIndex = Math.floor(Math.random() * crystymsg.length); 
    var randomElement = crystymsg[randomIndex];      
   
    msg.channel.send(randomElement)

}