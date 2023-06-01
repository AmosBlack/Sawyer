const Canvas = require("canvas")
const {MessageAttachment, Message, DiscordAPIError,MessageEmbed} = require("discord.js")
const avatar = require("./avatar")
const canvacord = require("canvacord");

module.exports = async function gayDoer(msg,args){
        const canvas = Canvas.createCanvas(626,885)

        userData =  msg.mentions.members.first() || msg.member;


        avatarURL = userData.user.displayAvatarURL({format:"png",size:512})
        const userImg = await Canvas.loadImage(avatarURL)
        const wanted = await Canvas.loadImage("./assets/wanted.jpg")


        const ctx = canvas.getContext('2d')
        ctx.drawImage(wanted,0,0,canvas.width,canvas.height)
        ctx.drawImage(userImg,125,275,380,380)
        
        const wantedIMG = new MessageAttachment(canvas.toBuffer(),"WANTED.png")

        msg.channel.send({files:[wantedIMG]})
}       