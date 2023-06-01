const { ContextMenuCommandAssertions } = require("@discordjs/builders")
const Canvas = require("canvas")
const {MessageAttachment, Message} = require("discord.js")
const avatar = require("./avatar")

module.exports = async function gayDoer(msg,args){

        gayed =  msg.mentions.members.first() || msg.member;


        avatarURL = gayed.user.displayAvatarURL({format:"png",size:512})
        const canvas = Canvas.createCanvas(512,512)
        const ctx = canvas.getContext("2d")
        const pride = await Canvas.loadImage("./assets/hetero.jpeg")
        const avatarIMG = await Canvas.loadImage(avatarURL)

        ctx.drawImage(avatarIMG,0,0,512,512)
        ctx.globalAlpha = 0.3
        ctx.drawImage(pride,0,0,512,512)

        gayImage = new MessageAttachment(canvas.toBuffer(),"gay_pride.png")
        msg.channel.send({files:[gayImage]})
                
}   