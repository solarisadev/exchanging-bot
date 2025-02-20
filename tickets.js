const { setPermissions } = require('./permissions');

function createTicket(interaction, userId, exchangerRoleId) {
    const channelName = `exchange-${interaction.user.username}`;
    interaction.guild.channels.create(channelName, {
        type: 'GUILD_TEXT',
        permissionOverwrites: [
            {
                id: interaction.guild.id,
                deny: ['VIEW_CHANNEL'],
            },
            {
                id: userId,
                allow: ['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS'],
            },
            {
                id: exchangerRoleId,
                allow: ['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
            },
        ],
    }).then(channel => {
        const embed = {
            title: 'Exchange Request',
            description: `User ${interaction.user.username} has requested an exchange.`,
            color: 0x00ff00,
            fields: [
                { name: 'Service From', value: interaction.fields.getTextInputValue('serviceFrom') },
                { name: 'Service To', value: interaction.fields.getTextInputValue('serviceTo') },
                { name: 'Amount', value: interaction.fields.getTextInputValue('amount') },
            ],
        };

        channel.send({ embeds: [embed] });
    });
}

module.exports = { createTicket };
