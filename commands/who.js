const {MessageEmbed, Message,MessageAttachment,Collection, GuildMember} = require('discord.js');
const Canvas = require("canvas")
module.exports = async function(msg,args){


   const author = msg.mentions.users.first() || msg.author;
  const background =  await Canvas.loadImage("./background.png")
  const canvas = Canvas.createCanvas(700 , 280);
  const context = canvas.getContext('2d');

  context.strokeStyle = '#0099ff';

  context.stroke = 100


  context.drawImage(background, 0, 0, canvas.width, canvas.height); 
  context.lineWidth = 10;
  context.strokeStyle = "dodgerblue"
  context.strokeRect(0, 0, canvas.width, canvas.height);
  let memberz = msg.mentions.members.first() || msg.member
  let member = msg.guild.member(memberz);

let username = memberz.username
let nickname = memberz.displayName
let joiningDate = `${memberz.joinedAt}`.slice(4,15  )
let creationDate = `${member.user.createdAt}`.slice(4,15)
let roles =  memberz.roles.cache.map(r => r.name).join(",")
let server = memberz.guild.name
let status = memberz.presence.status
let bot = memberz.bot


console.log(server)
console.log(roles)
console.log(joiningDate)

let userID= memberz.id
console.log(userID)
if(username == nickname ){
  nickname = "None"
}

  context.font = '30px Georgia';
  context.fillStyle = '#ADD8E6';
  context.fillText(`${memberz.user.tag}'s Profile`, canvas.width / 2.5, canvas.height / 3.5);

  context.font = '24px Georgia';
  context.fillText(`Name:${userID  }`, canvas.width / 2.5, canvas.height / 1.8 -25);    

  context.fillText(`ID:${userID  }`, canvas.width / 2.5, canvas.height / 1.8 );    
  
  context.font = '24px Georgia';

  context.fillText(`Joined: ${joiningDate}`,canvas.width / 2.5, canvas.height / 1.8 + 25)
  context.fillText(`Created: ${creationDate}`,canvas.width / 2.5, canvas.height / 1.8 + 50)

  context.font = '18px Georgia';

  context.fillText(`Roles: ${roles.slice()}`,canvas.width / 2.5, canvas.height / 1.8 +69 )
  context.fillText(`Server: ${server}`,canvas.width / 2.5, canvas.height / 1.8 +85)
  context.fillText(`Status: ` +status,canvas.width / 2.5, canvas.height / 1.8 +104)




  context.lineWidth=10;   

  

	// Start the arc to form a circle
  context.beginPath();    


context.arc(125, 125, 100, 0, Math.PI * 2, true);
	// Put the pen down
	context.closePath(); 
	// Clip off the region you drew on
	context.clip();


	const avatar = await Canvas.loadImage(author.displayAvatarURL({ format: 'jpg' }));
	context.drawImage(avatar, 25, 25, 200, 200);


	context.fillStyle = '#ffffff';

  const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');

  msg.channel.send({files:[attachment]})
}