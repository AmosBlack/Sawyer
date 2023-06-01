const cheerio = require("cheerio")
const { ConsoleMessage } = require("puppeteer")
const { post } = require("request")
const request = require("request-promise")
const Canvas = require("canvas")

const {MessageEmbed} = require("discord.js")
module.exports = async function(msg,args){
    let animeLinks=[]
    let animePics= []
    function callback(){
        console.log(animeLinks)
    }

    if(args.length === 0){

    }

    else{

      const searchLink = `https://zoro.to/search?keyword=${args.join("")}`  
        request(searchLink,(error,response,html) =>{

            if(!error && response.statusCode == 200){
            const $ = cheerio.load(html)
            let linkTest =  $('div[class="flw-item"] > div[class="film-poster"] > a[class="film-poster-ahref item-qtip"]').attr('href')
            if(linkTest== undefined) return msg.channel.send("ERROR: COULDNT_FIND_MANGA")

            

            $('div[class="flw-item"] > div[class="film-poster"] > a[class="film-poster-ahref item-qtip"]').each((i,el)=>{
                let link = "https://zoro.to" + $('div[class="flw-item"] > div[class="film-poster"] > a[class="film-poster-ahref item-qtip"]').eq(i).attr('href')

                let poster = $('div[class="flw-item"] > div[class="film-poster"]  > img[class="film-poster-img lazyloaded"]').attr('src')
                console.log(poster)

                let name = $('div[class="flw-item"] > div[class="film-detail"] > h3[class="film-name"] >a').eq(i).attr('title')
                animeLinks.push(`[**${name}**](${link})`)
                animePics.push(poster)


                callback()
            })

            if(animeLinks.length > 5){
                animeLinks = animeLinks.slice(0,5)
            }
            console.log(animePics)

            const animeResult = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(animeLinks.join("\n"))
            .setTitle(`Search Results for '${args.join(" ")}'`)
            .setThumbnail("https://zoro.to/images/logo.png")
            msg.channel.send(animeResult)
            
        }
        else{
            console.log(error)
        }
        })
    }
}