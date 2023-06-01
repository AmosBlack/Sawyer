const fetch = require("node-fetch")
const {MessageEmbed, Message} = require('discord.js')

module.exports = async function(msg,args){
    if(args.length>0){
       let name = args.join(" ").charAt(0).toUpperCase() + args.join(" ").slice(1)
       let nameSplit = name.split("")
        let nameLength = nameSplit.length + 1
        const alphabet = "abcdefghijklmnopqrstuvwxyz123456789"
         let integer = nameLength-3
         let integer2 = nameLength-6 

        let nameLoc  = []
        for(i=0;i<nameSplit.length;i++){
            let location = alphabet.indexOf(nameSplit[i])
            nameLoc.push(location)
        }

        let age = Math.floor(nameLength*20/integer-integer2)

        msg.channel.send(`${name} is ${age} years old \n:woman_mage::mage:`)
    }
    else{
        msg.channel.send("You need to tell me a name sksksksksks")
    }
}