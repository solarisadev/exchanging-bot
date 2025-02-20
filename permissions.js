function setPermissions(channel, userId, exchangerRoleId) {
    channel.permissionOverwrites.create(userId, {
        SEND_MESSAGES: true,
        EMBED_LINKS: true,
        ATTACH_FILES: true,
        USE_EXTERNAL_EMOJIS: true,
    });

    channel.permissionOverwrites.create(exchangerRoleId, {
        SEND_MESSAGES: true,
        EMBED_LINKS: true,
        ATTACH_FILES: true,
        USE_EXTERNAL_EMOJIS: true,
        MANAGE_MESSAGES: true,
        MENTION_EVERYONE: true,
    });

    channel.permissionOverwrites.create(channel.guild.roles.everyone, {
        VIEW_CHANNEL: false,
    });
}

module.exports = { setPermissions };
