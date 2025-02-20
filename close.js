const { generateTranscript } = require('./transcript');

function closeTicket(channel, userId) {
    channel.permissionOverwrites.edit(userId, {
        VIEW_CHANNEL: false,
    });

    const embed = {
        title: 'Support Controls',
        description: 'Choose an option below:',
        color: 0xff0000,
        fields: [
            { name: 'Get Transcript', value: 'Sends an HTML file of the chat logs.' },
            { name: 'Delete Ticket', value: 'Deletes the ticket channel.' },
            { name: 'Reopen Ticket', value: 'Restores the original user\'s permissions to the channel.' },
        ],
    };

    channel.send({ embeds: [embed] });
}

module.exports = { closeTicket };
