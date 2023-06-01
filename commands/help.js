
const {MessageEmbed, Message} = require('discord.js');

module.exports = async function(msg,args,prefix,client){

console.log(args)
console.log(args.length)
if(args.length===0){
let helpDefault = new MessageEmbed()
.setTitle("Sawyer Commands :pepe_praying: " )

.setColor("#8A2BE2")
.addFields(
    {name:":art: $help memes",value:"Make Quick Memes on the Go ",inline:true},
    {name:":toolbox: $help utility",value:"Handy stuff",inline:true},
    {name:":game_die: $help fun",value:"Fun stuff",inline:true},
    {name:":camera_with_flash: $help filters",value:"Cool Image Filters for Fun with Friends",inline:true},
    {name:":globe_with_meridians: $help info",value:"Get useful information about the server and people",inline:true},
    {name:":tools: $help moderation",value:"Easily manage the server with a few commands",inline:true},

)
.setFooter("Developed by AmosBlack")
.setThumbnail("https://images-ext-1.discordapp.net/external/cCeyGKgPT5BU_w7CwNSPgsl6NSa3bFVBJVdi2SgcuW4/%3Fsize%3D512/https/cdn.discordapp.com/avatars/935420544323575868/0a06168076443aced2a5fc9b748e2f28.webp")
msg.channel.send(helpDefault)
}

else if(args[0]==="memes"){
    let helpEmb = new MessageEmbed()
    .setTitle(":art: Sawyer Meme Commands")
    .setColor("#8A2BE2")
    .setThumbnail("https://images-ext-1.discordapp.net/external/cCeyGKgPT5BU_w7CwNSPgsl6NSa3bFVBJVdi2SgcuW4/%3Fsize%3D512/https/cdn.discordapp.com/avatars/935420544323575868/0a06168076443aced2a5fc9b748e2f28.webp")
    .setDescription("`$oogway <meme text> Make the oogway meme real quick without having to open mematic PG\n$spongebob <meme text> Make the spongebob rainbow meme real quick PG\n`")
    msg.channel.send(helpEmb)

} 

else if(args[0]==="info"){
    let helpMemes = new MessageEmbed()
    .setTitle(":globe_with_meridians: Sawyer Info Commands")
    .setColor("#8A2BE2")
    .setThumbnail("https://images-ext-1.discordapp.net/external/cCeyGKgPT5BU_w7CwNSPgsl6NSa3bFVBJVdi2SgcuW4/%3Fsize%3D512/https/cdn.discordapp.com/avatars/935420544323575868/0a06168076443aced2a5fc9b748e2f28.webp")
    .setDescription("`$who <@somebody> Get to know more about your least favourite server members PG\n$avatar <@somebody> Post someone's dynamic avatar PG`")
    msg.channel.send(helpMemes)
}  

else if(args[0]==="utility"){
    let helpUtil = new MessageEmbed()
    .setTitle(":toolbox: Sawyer Utility Commands")
    .setColor("#8A2BE2")
    .setThumbnail("https://images-ext-1.discordapp.net/external/cCeyGKgPT5BU_w7CwNSPgsl6NSa3bFVBJVdi2SgcuW4/%3Fsize%3D512/https/cdn.discordapp.com/avatars/935420544323575868/0a06168076443aced2a5fc9b748e2f28.webp")
    .setDescription("`$weather <city> Tells you the current weather of a city PG\n$youtube <searchterm>Searches youtube and posts the most relevant link PG\n$reddit <subreddit> Posts a random post from a subreddit [experimental] PG\n$word <word> Tells you stuff about english words [en-us] PG\n$country <countryname> Get to know general info about any country PG`")
    msg.channel.send(helpUtil)
}  

else if(args[0]==="fun"){
    let helpFun = new MessageEmbed()
    .setTitle(":game_die: Sawyer Fun Commands")
    .setColor("#8A2BE2")
    .setThumbnail("https://images-ext-1.discordapp.net/external/cCeyGKgPT5BU_w7CwNSPgsl6NSa3bFVBJVdi2SgcuW4/%3Fsize%3D512/https/cdn.discordapp.com/avatars/935420544323575868/0a06168076443aced2a5fc9b748e2f28.webp")
    .setDescription("`$fruit <fruit name> Tells you data about fruits PG\n$meme  Posts memes PG\n$cute Posts cute pics,does what you'd expect PG\n\n$magicball <question> For the spiritual and perplexed,solve all your yes/no problems with this PG\n$pokedex Get to know more about your favourite pokemon PG\n$nasa Daily Astronomy Picture of the Day B) PG\n`")
    msg.channel.send(helpFun)
}  


else if(args[0]==="filters"){
    let helpMemes = new MessageEmbed()
    .setTitle(":camera_with_flash: Sawyer User Commands")
    .setColor("#8A2BE2")
    .setThumbnail("https://images-ext-1.discordapp.net/external/cCeyGKgPT5BU_w7CwNSPgsl6NSa3bFVBJVdi2SgcuW4/%3Fsize%3D512/https/cdn.discordapp.com/avatars/935420544323575868/0a06168076443aced2a5fc9b748e2f28.webp")
    .setDescription("`$slap <@somebody> Slaps the mentioned person PG \n$kill <@somebody> Kills the mentioned person R\n$trash <@somebody> Appends the Trashed Meme to an User PG\n$wasted <@somebody> Appends the GTA V Wasted Meme to a User PG\n$pride <@somebody> Show of your LGBTQ+ Pride PG\n$jail <@somebody> Jails the mentioned person PG\n$trigger <@somebody> Trigger the mentioned person (GIF) PG\n$wanted <@somebody> Make the person in question wanted PG\n$hitler <@somebody> The Person is now worse than Hitler! PG\n$shit <@somebody> Does what it says it does PG\n$pixl <@somebody> Destroy someone's avatar by pixelating it PG\n$mono <@somebody> Greyscale someone's avatar PG`")
    msg.channel.send(helpMemes)
}  

else if(args[0]==="moderation"){
    let helpMemes = new MessageEmbed()
    .setTitle(":tools:  Sawyer Moderation Commands")
    .setColor("#8A2BE2")
    .setThumbnail("https://images-ext-1.discordapp.net/external/cCeyGKgPT5BU_w7CwNSPgsl6NSa3bFVBJVdi2SgcuW4/%3Fsize%3D512/https/cdn.discordapp.com/avatars/935420544323575868/0a06168076443aced2a5fc9b748e2f28.webp")
    .setDescription("`$ban <@user> Bans the mentioned user PG \n$kick <@user> Kicks the mentioned user \n$role <@user> Adds/Removes a role to/from an user`")
    msg.channel.send(helpMemes)
}  


}