const Canvas = require("canvas")
const{MessageAttachment, MessageFlags} = require("discord.js")
module.exports = async function imageSlap(msg,args,prefix){


    const slapImg = await Canvas.loadImage("./slap.jpg")
    let slapper = msg.member

    slapperAva = slapper.user.displayAvatarURL({dynamic:true,size:512,format:"png"})
    slapperImg = await Canvas.loadImage(slapperAva)
    if(msg.mentions.members.first()){
        let canvas = Canvas.createCanvas(481,500)
        let context = canvas.getContext('2d')
      let slapped = msg.mentions.members.first() 
      let slappedAva = slapped.user.displayAvatarURL({dynamic:true,size:512,format:"png"})
      let slappedImg = await Canvas.loadImage(slappedAva)
      
      context.drawImage(slapImg,0,0,canvas.width,canvas.height)
       context.drawImage(slapperImg,300,190,150,150)
       context.drawImage(slappedImg,140,240 ,150,150)
       const slapFinal = new MessageAttachment(canvas.toBuffer(), 'slap.png');
        msg.channel.send({files:[slapFinal]})
    }
    

    else{
        msg.channel.send("Who yo wanna slap?\n Try doing $slap [@someguy]")
    }


}   