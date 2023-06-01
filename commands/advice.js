const { ContextMenuCommandAssertions } = require("@discordjs/builders")
let Canvas = require("canvas")

let {MessageAttachment} = require("discord.js")

module.exports = async function(msg,args){
    console.log(args.length)
    if(args.length>0){
        let canvas = Canvas.createCanvas(750,500)
        let context = canvas.getContext("2d")
       
     let memeText = args.join(" ")
        console.log(memeText)
        
        const applyText = (canvas, text) => {
            const context = canvas.getContext('2d');
        
            // Declare a base size of the font
            let fontSize = 70;
        
            do {
                // Assign the font to the context and decrement it so it can be measured again
                context.font = `${fontSize -= 5}px sans-serif`;
                // Compare pixel width of the text to the canvas minus the approximate avatar size
            } while (context.measureText(memeText).width > canvas.width - 450);
        
            // Return the result to use in the actual canvas
            return context.font;
        };

        context.font = applyText(canvas, memeText);

    let oogway = await Canvas.loadImage("./commands/oogway.png")
    context.drawImage(oogway,0,0,canvas.width,canvas.height)
    context.fillStyle = '#FFFFFF';
    context.fillText(`${memeText}`, canvas.width / 2.5 + 170, canvas.height / 1.8 -25);  

    let oogwayFinal = new MessageAttachment(canvas.toBuffer(),'oogway.png')
    msg.channel.send({files:[oogwayFinal]})
    }
    else{
        msg.channel.send("What do you want mastah oogway to say?\nTry $advice [what u want him to say]")
    }


}   