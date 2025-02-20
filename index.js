const { Client, GatewayIntentBits } = require('discord.js');
const { loadCommands } = require('./loadCommands');
const { loadEvents } = require('./loadEvents');
const mongoose = require('mongoose');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Failed to connect to MongoDB', err));
});

loadCommands(client);
loadEvents(client);

client.login(process.env.BOT_TOKEN);
