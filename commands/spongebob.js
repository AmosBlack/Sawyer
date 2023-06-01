const Canvas = require("canvas")
const {MessageAttachment} = require("discord.js")
    
module.exports = async function(msg,msgDataFinal){
    console.log(msgDataFinal)
 memeText = msgDataFinal
    
   const canvas = Canvas.createCanvas(1920  ,1080)
    const  ctx = canvas.getContext("2d")

    spongeBob = await Canvas.loadImage("./commands/spongebob.jpg")
    ctx.drawImage(spongeBob,0,0,1920,1080)

  // Declare a base size of the font
     
  const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = 150;

    do {
        // Assign the font to the context and decrement it so it can be measured again
        ctx.font = `${fontSize -= 5}px serif        `;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (ctx.measureText(memeText).width > canvas.width/3);

    // Return the result to use in the actual canvas
    return ctx.font;
};

ctx.font = applyText(canvas, memeText);


    ctx.fillStyle = '#000000';
    ctx.fillText(memeText,canvas.width/2-240,canvas.height/2+300)
    
    finalFile = new MessageAttachment(canvas.toBuffer(),'spongebob.png')
    msg.channel.send({files:[finalFile]})
}