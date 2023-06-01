const {MessageEmbed, Message} = require('discord.js')

module.exports= function(msg,args){
    if(args.length>1){
        let ok = msg.mentions
        console.log(ok)

    let name1 = mentions
    let name2 = args[2]
    console.log(name1)
    console.log(name2)
    }
    else{
        msg.channel.send('Incorrect or Invalid Arguments Detected')
    }
}