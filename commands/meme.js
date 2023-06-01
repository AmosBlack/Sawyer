const reddit = require('reddit.images')
const {MessageEmbed, Message} = require('discord.js');

module.exports = async function redditPull(msg,args){
    console.log("line5")
    reddit.FetchRandomMeme({}).then((data) => {
        console.log(data);
        let memez = data.image
        if(memez=== null || memez === 'https://i.imgur.com/undefined.png' ){
            console.log('Image found was Null so Recalling Function')
            redditPull(msg,args);
                }

                else{
         if(Array.isArray(memez)){
                memez = memez[0]

            }

            console.log("line20")

         console.log(memez)

        const memEmb = new MessageEmbed()
        .setColor('#8A2BE2')
       
        .setImage(memez)
        .setTitle(data.title)
        .setURL(data.postLink)
      
        .setFooter(`👍 ${data.upvotes}  👎${data.downvotes}`)

        msg.channel.send(memEmb)
    
}
    });
}