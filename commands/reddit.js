const reddit = require('reddit.images')
const {MessageEmbed, Message} = require('discord.js');

module.exports = async function redditPull(msg,args){

    let subred = "aww"
    console.log(args.length)
    if(args.length>0){
        subred = args.join(" ")

       
    }
    reddit.FetchSubredditPost({subreddit: subred}).then((data) => {
        console.log(data);

        if(data.image == null){
            redditPull(msg,args)
        }

        if(Array.isArray(data.image)){
            data = data[0]
        }
        else{
        const mem = new MessageEmbed()
        .setColor('#ff4500')
       
        .setImage(data.image)
        .setTitle(data.title)
        .setURL(data.postLink)
      
        .setFooter(`👍 ${data.upvotes}  👎${data.downvotes}`)
        msg.channel.send(mem)
        }
    });

}