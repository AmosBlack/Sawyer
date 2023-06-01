
const { Permissions } = require('discord.js');

const Discord = require('discord.js')


const client = new Discord.Client()

module.exports = function(msg,args,client){
    let author = msg.member
    if(msg.author.bot) return
 
    if(author.permissions.has([Permissions.FLAGS.KICK_MEMBERS ])||author.permissions.has([Permissions.FLAGS.ADMINISTRATOR ])){
        if(!msg.guild.me.hasPermission("KICK_MEMBERS") || msg.guild.me.hasPermission("ADMINSTRATOR")){
            msg.channel.send("I do not have the permissions required to perform this action")
        }

else{
    
    if(args.length === 0){
        msg.channel.send("`$kick <@user>`")
    }
    else{
    let member = msg.mentions.members.first();
    if(!member) return msg.channel.send("Please mention a valid member of this server");
    if(!member.kickable) return msg.channel.send("I cannot kick this member!");

    member.kick();
    msg.channel.send(`:gear: Kicked ${member}`)
    }   



//else{
  //  msg.channel.send(":rotating_light:  Sawyer does not have the required permissions to perform this action")
//}
}
}
else{
    msg.channel.send(":rotating_light:  You do not have the requisite permissions to perform this action")
}
}