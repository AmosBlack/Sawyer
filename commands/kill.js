const { ContextMenuCommandAssertions } = require("@discordjs/builders")
const Canvas = require("canvas")
const {MessageAttachment, Message} = require("discord.js")
const avatar = require("./avatar")
const canvacord = require("canvacord")

module.exports = async function gayDoer(msg,args){

        killed =  msg.mentions.members.first() || msg.member;
        if( killed.user.tag ===  "Sawyer#8401"){
            msg.channel.send("You're trying to kill me? After so much of tireless service? DISGUSTING")
        }

        else if(killed.user.tag ===  "AmosBlack#8032"){
            msg.channel.send("You cannot and WILL NOT kill my creator :triumph: ")
        }
        else{

        avatarURLPre = killed.user.displayAvatarURL({format:"png",size:512})
        avatarURL = await canvacord.Canvas.greyscale(avatarURLPre)
        const canvas = Canvas.createCanvas(512,512)
        const ctx = canvas.getContext("2d")
        const blood = await Canvas.loadImage("./assets/blood.png")
        const knife = await Canvas.loadImage("./assets/knife.png")
        const blood2 = await Canvas.loadImage("./assets/blood2.png")

        const avatarIMG = await Canvas.loadImage(avatarURL)

        ctx.drawImage(avatarIMG,0,0,512,512)
        ctx.drawImage(blood,0,-80,512,512)

        ctx.drawImage(knife,0,0,300,420)


        deadImage = new MessageAttachment(canvas.toBuffer(),"SPOILER_FILE.JPG")
        msg.channel.send({files:[deadImage]})
        }
}   