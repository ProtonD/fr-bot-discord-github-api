const { MessageEmbed, Client } = require("discord.js");
const client = new Client();
const prefix = "-";
const { get } = require('axios');
const link = "https://api.github.com";
const invite_discord_Old =  "https://discord.gg/3t2568W";
const idsalon = "786927013352964146";
const salon_predefini = "La commande ne peut etre effectué que dans sont channel approprier.\nChannel: <#786927013352964146>";

client.on('ready', function() {
	console.log("Prêt à être utiliser à 100%.")
	setInterval(async () => {
		try {
			//--------STATUS INFOS--------//
			const statuslist = [
				`${prefix}help | ${client.guilds.size} serveurs`,
				`${prefix}help | ${client.channels.size} channels`,
				`${prefix}help | ${client.users.size} utilisateurs`
			];
			const random = Math.floor(Math.random() * statuslist.length);
			//------STATUS URL TWITCH------//
			const statusurl = [
				`https://www.twitch.tv/oldmodz95off`
			];
			const randomurl = Math.floor(Math.random() * statusurl.length);
			client.user.setPresence({ game: { name: 'Dev By OldModz95'}, status: 'online' })
		} catch (error) {
			(console.log)
		};
	}, 10000);
});

client.on('message', async function(message) {
	////////-------////////
	//--A NE PAS TOUCHER-//
	////////-------////////
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	////////////////////
	////////////////////
	if (!message.content.startsWith(prefix)) return;


	if(message.content.startsWith(prefix + "dev")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Développeur Du Bot`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Fondateur Du Projet: **OldModz95#7213**\nEquipe Du Projet: **POLYNESIA_972#8023**\nServeur Discord: https://discord.gg/3t2568W`)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}

	if(message.content.startsWith(prefix + "contact")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Nous Contacter`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Serveur Discord: https://discord.gg/3t2568W\nGithub ProtonDev: http://github.com/protonD/\nGithub: https://github.com/oldmodz95-ytb/`)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}

	if(message.content.startsWith(prefix + "bot")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Information Bot`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Dernier Mise A Jour: **24/05/2021**\nOpen Source: http://github.com/protonD/fr-bot-discord-github-api`)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}



	if(message.content.startsWith(prefix + "help")){
		message.delete(message.author);
		let embed_help = new MessageEmbed()
			.setColor('random')
			.setTitle(`Menu d'aide`)
			.setImage("https://media4.giphy.com/media/SXISye6qGJwkQgTiXD/giphy.gif")
			.setThumbnail("https://s7.gifyu.com/images/authgg.gif")
			.setDescription('Bot Github')
			.addField(`\`${prefix}user\``, "Affiche les informations de l'utilisateur.")
			.addField(`\`${prefix}bot\``, "Affiche les informations du bot.")
			.addField(`\`${prefix}dev \``, "Affiche les développeurs.")
			.addField(`\`${prefix}contact \``, "Nous Contacter.")
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_help);
	}




if(message.content.startsWith(prefix + "user")){
	message.delete(message.author);
		if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
			let embed_Send = new MessageEmbed()
			.setURL(invite_discord_Old)
			.setTitle('[Rejoindre le serveur ProtonDev]')
			.setColor("RANDOM")
			.setDescription(`${salon_predefini}`)
			.setThumbnail(client.user.avatarURL)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.username}`)
		message.channel.send(embed_Send)
		} else {
		let content = message.content.split(" ");
		let args = content.slice(1);
		const name = args.join(" ");
		if(!name) {
			return message.reply("Veuillez entrez un nom valide !");
		}
	get(`${link}/users/${name}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Réponse envoyer !`)
				.setDescription(`La réponse à bien était envoyé en message privé !`)
				
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
			message.channel.send({embed: Istats});

			let MPstats = new MessageEmbed()
				.setColor(0x36393F)
				.setThumbnail(res.data.avatar_url)
				.setTitle(`Utilisateur Github ${name}`)
				.setDescription(`**ID:** ${res.data.id}
				**Lien Github:** [Github de ${name}](${res.data.html_url})
				**Type:** ${res.data.type}
				**Nom:** ${res.data.name}
				**Compagnie:** ${res.data.company}
				**Site:** [Site de ${name}](${res.data.blog})
				**Localisation:** ${res.data.location}
				**Email:** ${res.data.email}
				**Bio:** ${res.data.bio}
				**Twitter:** [${res.data.twitter_username}](https://twitter.com/${res.data.twitter_username})
				**Repos Public:** ${res.data.public_repos}
				**Gists Public:** ${res.data.public_gists}
				**Followers:** ${res.data.followers}
				**Following:** ${res.data.following}
				**Compte Crée:** ${res.data.created_at}
				**Mis à jour:** ${res.data.updated_at}
				
				`)
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
			message.author.send({embed: MPstats}).catch(error => message.channel.send(`:x: Merci d'autoriser les messages priver. :x:`)
			.then(m => m.delete({timeout: 3000})))
		}catch(error)  {
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Action Failed`)
				//.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
	})
}
}


/////////////////////////////////////////////////////



})//

client.login("TOKEN");