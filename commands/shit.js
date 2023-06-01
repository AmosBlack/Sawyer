const canvacord = require("canvacord")
const {MessageAttachment} = require("discord.js")
module.exports = async function trigger(msg,args){
    const member = msg.mentions.members.first() || msg.member;
    const memberAva = member.user.displayAvatarURL({dynamic:false   ,size:512,format:"png"})
    let image = await canvacord.Canvas.shit(memberAva)
    let attachment = new MessageAttachment(image, "shit.gif");
    msg.channel.send(attachment)
    
}