
  const {MessageEmbed, Message} = require('discord.js')

  
  module.exports = async function(msg,args){

    var randomColor = Math.floor(Math.random()*16777215).toString(16);


     ok =  Math.floor(Math.random(0,9))
 const member = msg.mentions.members.first() || msg.member;
 const user = member.user

 const pngLink = user.displayAvatarURL({size:512,dynamic:true,format:"png"})
 const jpgLink = user.displayAvatarURL({size:512,dynamic:true,format:"jpg"})
 const webpLink = user.displayAvatarURL({size:512,dynamic:true,format:"webp"})


 let ava = new MessageEmbed()
    .setTitle(`${user.tag}'s Avatar  `)
    
    .setImage(user.displayAvatarURL({size:512,dynamic:true}))
    .setFooter( `[png](${pngLink})|[webp](${webpLink})|[jpg](${jpgLink})`)
    
    .setColor('#8A2BE2')

    msg.channel.send(ava)

  }