const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

//config 
const config = require('./config.json')
let token = config.token

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content == '!ping'){
    if (message.author.bot) return;
    message.channel.send('Pong ! ')
    } 
});

client.login('token); 
             //paste your token is the config.json file ! 
