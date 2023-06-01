var request = require('request-promise')
const cheerio = require('cheerio')
const {MessageEmbed, Message} = require("discord.js")


module.exports = async function(msg,args){
    if(args.length===0) return msg.channel.send("Error: NO_INPUT_DETECTED")
    wikiSrch = args.join(' ')
    wikiURL = "https://en.wikipedia.org/wiki/" + wikiSrch

    request(wikiURL,(error,response,html)=>{
        if(!error && response.statusCode==200){

            const $ = cheerio.load(html)
            title = $('div[id="content"] > h1[class="firstHeading mw-first-heading"]').text()
            if(title === wikiSrch) {
                
            }
            let eqs = 0
            function cont(eqs){
            return  $('div[id="content"] > div[id="bodyContent"] > div[id="mw-content-text"] > div[class="mw-parser-output"] > p').eq(eqs).text()
            }
            let content = cont(eqs)
            if(content== undefined || content == ''){
                eqs ++
               cont(eqs)
            }

            poster = "https:" + $('div[id="content"] > div[id="bodyContent"] > div[id="mw-content-text"] > div[class="mw-parser-output"] > table >tbody > tr > td[class="infobox-image"] > a > img').attr('src')
            if(poster === "https:undefined") {
                poster = ''
            }
            console.log(title)
            console.log(content)
            console.log(poster)

            const wikiEmb = new MessageEmbed()
            .setColor("FFFFFF")
            .setDescription(content)
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Wikipedia_logo_v3.svg/2048px-Wikipedia_logo_v3.svg.png')
            .setTitle(title)
            .setImage(poster)
            .setURL(wikiURL)
            msg.channel.send(wikiEmb)
        }
        else if(error){
            msg.channel.send("Error: COULD_NOT_FIND_TOPIC")
        }
    })
}
