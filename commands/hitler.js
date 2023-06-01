const canvacord = require("canvacord")
const {MessageAttachment} = require("discord.js");
const greyscale = require("./greyscale");
module.exports = async function trigger(msg,args){
    const member = msg.mentions.members.first() || msg.member;
    const memberAva = member.user.displayAvatarURL({dynamic:false   ,size:512,format:"png"})
    let image = await canvacord.Canvas.hitler(memberAva)
    let attachment = new MessageAttachment(image, "hitler.gif");
    msg.channel.send(attachment)
    
}