const request = require("request-promise")
const cheerio = require("cheerio")
const {MessageEmbed, Message} = require("discord.js")

module.exports = async function(msg,args){

    let mangaCheck, titleLocal,poster,mangaNameLink
    let mangaFinalText = []

    let mangaLinks = []
    let genresAll =[]



    
    
if(args.length === 0){

    const mangaDefault = new MessageEmbed()
    .setColor("RANDOM")
    .setURL("https://mangareader.to/")
    .setDescription("Are you looking to read manga online at no cost? Or are you subscribing to a paid reading service already but in hopes of saving up? Or are you feeling unsafe on the current free manga site? If you can relate to any of these questions, you will find the solution here, on MangaReader.If you search about Reading manga on Google, one of the first autocomplete predictions is 'Why manga is so expensive?'. Yes, not everyone can afford to read their favorite manga online and MangaReader is created to change it. We are here to make sure all manga lovers can have access to their manga of interest. And that is why MangaReader is free and safe.")
    .setTitle('Mangareader.to - Read Manga Online Free')
    .addFields(
        {name:"\u200b",value:"[Random Manga](https://mangareader.to/random) | [Latest Updated](https://mangareader.to/latest-updated) | [New Releases](https://mangareader.to/new-release) | [Completed](https://mangareader.to/completed) | [Most Popular](https://mangareader.to/most-popular)"},
       




    )
    .setThumbnail("https://media.discordapp.net/attachments/903177516934647808/949221949479985173/unknown.png")

    msg.channel.send(mangaDefault)
}

else{
let mangaName = args.join(" ")
const manga = `https://mangareader.to/search?keyword=${mangaName}` ;

const ar = []





    
    console.log(genresAll)


request(manga,(error,response,html) =>{

    if(!error && response.statusCode==200){
        
        const $ = cheerio.load(html)    
        var mangaDiv = $('div[class="item item-spc"]')
        
        const linkLocal = $('div[class="item item-spc"] > a[class="manga-poster"]').attr("href")
        if(linkLocal === undefined) {
             msg.channel.send("Couldnt find Manga") 
             return

    }
        else{
        }

         titleLocal = $('div[class="item item-spc"] > div[class="manga-detail"] > h3[class="manga-name"] > a').attr("title")
         poster = $('div[class="item item-spc"] > a[class="manga-poster"] > img').attr("src")
        console.log(poster)
        console.log(linkLocal)
        console.log(titleLocal)
        
       $('div[class="item item-spc"]').each((i,el)=>{
    
        var link = $('div[class="item item-spc"] > a[class="manga-poster"]').eq(i).attr("href")
        var title = $('div[class="item item-spc"] > div[class="manga-detail"] > h3[class="manga-name"] > a').eq(i).attr("title") 
        let mangaLink = "https://mangareader.to" + link
        mangaFinalText.push(`[${title}](${mangaLink})`)

        mangaLinks.push(mangaLink)
       }) 
      console.log(mangaFinalText)

 mangaNameLink = "https://mangareader.to/read" + linkLocal 

 const mangaSend = new MessageEmbed()
 .setColor("RANDOM")
 .setURL(mangaNameLink)
 .setTitle(titleLocal)
 .setThumbnail("https://media.discordapp.net/attachments/903177516934647808/949221949479985173/unknown.png")
 .addFields(
     {name:"Manga ",value:`[Chapter1 EN](${mangaNameLink}/en/chapter-1) || [Chapter1 JA](${mangaNameLink}/ja/chapter-1)`,inline:true},
     {name:"All Search Results",value:`${mangaFinalText.slice(1).join("\n")}`,inline:true}
 )
 
 .setImage(poster)
    msg.channel.send(mangaSend) 

if(mangaFinalText.length > 8){
    mangaFinalText = mangaFinalText.slice(0,mangaFinalText.length-4)
}

 



  
    }
    else{
        msg.channel.send("Error : INTERNAL_ERROR  TRY_AGAIN_LATER")
        return
    }
})

console.log(mangaFinalText + "third")


  

}

}

