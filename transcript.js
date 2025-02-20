const fs = require('fs');
const path = require('path');

function generateTranscript(channel) {
    const messages = [];
    channel.messages.fetch({ limit: 100 }).then(fetchedMessages => {
        fetchedMessages.forEach(message => {
            messages.push(`[${message.createdAt}] ${message.author.tag}: ${message.content}`);
        });

        const transcript = messages.join('\n');
        const filePath = path.join(__dirname, `${channel.name}-transcript.html`);
        fs.writeFileSync(filePath, transcript);

        const transcriptChannel = channel.guild.channels.cache.get('1341634933961265154');
        transcriptChannel.send({ files: [filePath] });
    });
}

module.exports = { generateTranscript };
