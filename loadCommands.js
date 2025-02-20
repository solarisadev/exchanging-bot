const fs = require('fs');
const path = require('path');

function loadCommands(client) {
    const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js') && file !== 'index.js' && file !== 'loadCommands.js' && file !== 'loadEvents.js');

    for (const file of commandFiles) {
        const command = require(path.join(__dirname, file));
        client.commands.set(command.name, command);
    }
}

module.exports = { loadCommands };
