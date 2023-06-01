
const { Permissions } = require('discord.js');


module.exports = async function(msg,args){
    let author = msg.member



if(author.permissions.has([Permissions.FLAGS.ADMINISTRATOR]) ||author.permissions.has([Permissions.FLAGS.MANAGE_ROLES]) ){

    if(msg.guild.me.hasPermission("MANAGE_ROLES") === true || msg.guild.me.hasPermission("ADMINSTRATOR") === true){

let memberz = msg.mentions.members.first()

if(!memberz) return msg.channel.send(":zap: Please mention a valid member of this server")
console.log("passed")

if(args.length<2 ) return msg.channel.send(":zap: No Role was Specified")
console.log("passed")


let roleName = args.slice(1).join(" ")
console.log(roleName)
console.log("passed")

let role = msg.guild.roles.cache.find(r => r.name === roleName);
if(!role) return msg.channel.send(":zap: No Such Role was Found")
console.log("passed")

let memberRolesCheck = memberz.roles.cache.map(r => r.name).includes(roleName)

if(memberRolesCheck === true){
    memberz.roles.remove(role);
    msg.channel.send(`:gear: Removed ${roleName} from ${memberz}`)
} 

else{
memberz.roles.add(role);
msg.channel.send(`:gear: Added ${roleName} to ${memberz}`)
}
}

else{
    msg.channel.send(":rotating_light: I do not have the required permissions for this action")
}

}
else{
    msg.channel.send(":zap: You do not have the required permissions for this action")
}




}