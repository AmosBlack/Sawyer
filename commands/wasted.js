const Canvas = require("canvas")
const {MessageAttachment} = require("discord.js")

module.exports = async function(msg,args){
    let canvas = Canvas.createCanvas(300,300)
    let context = canvas.getContext("2d")
    let wasted = await Canvas.loadImage("./commands/wasted.png")
    let wastedPerson = msg.mentions.members.first() || msg.member
    
    let wastedAva = wastedPerson.user.displayAvatarURL({format:"png",size:512 })

    let wastedGuy = await Canvas.loadImage(wastedAva)
    console.log("loadedcanvas")

    console.log("loadedcanvas")

    
    context.globalAlpha = 1;

    context.drawImage(wastedGuy,0,0,300,300)
    context.globalAlpha = 0.8;
    
    context.lineWidth = 10;
    context.fill = "#660000"
    context.strokeRect(0,0,canvas.width,canvas.height)
    context.fill = "#000000"
    context.fillRect(0,0,300,300)
    context.globalAlpha = 1;

    context.drawImage(wasted,0,0,300,300)

    let wastedFinal = new MessageAttachment(canvas.toBuffer(),`wasted.png`)

    msg.channel.send({files:[wastedFinal]})
}