const { Client, GatewayIntentBits } = require('discord.js');
const { loadCommands } = require('./loadCommands');
const { loadEvents } = require('./loadEvents');
const config = require('./config.json');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

loadCommands(client);
loadEvents(client);

client.login(process.env.BOT_TOKEN);
