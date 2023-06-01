const reddit = require('reddit.images')
const {MessageEmbed, Message} = require('discord.js');

module.exports = async function cutePull(msg,args){

    reddit.FetchSubredditPost({subreddit: "aww"}).then((data) => {
        console.log(data);
        let imageData = data.image
        if(imageData === null || imageData === 'https://i.imgur.com/undefined.png' ){
            cutePull(msg,args)
        }   

        else{
        if(Array.isArray(imageData)){
          imageData = imageData[0]
        }
       
  
           
    
        const mem = new MessageEmbed()
        .setColor('#8A2BE2')
       
        .setImage(imageData)
        .setTitle(data.title)
        .setURL(data.postLink)
      
        .setFooter(`👍 ${data.upvotes}  👎${data.downvotes}`)
        msg.channel.send(mem)
    }
    });

}