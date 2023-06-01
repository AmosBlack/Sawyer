const fetch = require("node-fetch")
const {MessageEmbed, Message} = require('discord.js')
const { strikethrough } = require("@discordjs/builders")    

module.exports = async function(msg,args){

    
    if(args.length >0 && args.length<=1){
    args = args.join(" ")
    }

    else{
        msg.channel.send("Please input an appropriate word")
    }
    
    wordURL = `https://dictionaryapi.com/api/v3/references/collegiate/json/${args}?key=${process.env.DICTIONARY_KEY}`
    apiQuery = await fetch(wordURL)
    jsonWord = await apiQuery.json()
    console.log(jsonWord)
    if(typeof jsonWord[0] === "object"){
    let name = jsonWord[0].meta.id
    let name2 = name.charAt(0).toUpperCase() + name.slice(1)
    
    console.log(name2)
    let phonetics = jsonWord[0].hwi.hw
    let deffirst = jsonWord[0].shortdef[0]
    let wordMeaningFinal = []
    
if(jsonWord[0].shortdef.length>0){
    for(i=0;i<jsonWord[0].shortdef.length;i++){
       wordMeaning=  "→" +  jsonWord[0].shortdef[i]
        wordMeaningFinal.push(wordMeaning)
    }
  
}     
    def = wordMeaningFinal.join("\n")


    console.log(jsonWord[0].cxs)
    console.log(jsonWord[0].hwi)
    console.log(jsonWord[0].meta)
    console.log(def)
        let type = jsonWord[0].fl

        const word = new MessageEmbed()

        .setColor('#8A2BE2')
        .setTitle(name2)
        .setDescription(def)
        .addFields(
            {name:"Type",value:type},
            {name:"Pronunciation",value:phonetics,inline:true}            )
        .setThumbnail('https://media.discordapp.net/attachments/935483784843907072/939785848348606474/DWj4oUuT_400x400.png')
    msg.channel.send(word)
        }

        else{
            let suggestions = jsonWord
            const wordError = new MessageEmbed()
            .setColor("660000   ")
            .setTitle("Could not Find Word")
            .setDescription(`Did you mean any of the following: \n ${suggestions.slice(0,5).join("\n")} `)

            msg.channel.send(wordError)
        }
}