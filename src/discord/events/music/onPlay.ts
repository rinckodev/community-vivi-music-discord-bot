import { menus } from "#menus";
import { GuildQueue, useMainPlayer } from "discord-player";
import { ActivityType } from "discord.js";
import { QueueMetadata } from "#types";

const player = useMainPlayer();
player.events.on("playerStart", (queue: GuildQueue<QueueMetadata>, track) => {
    const { client, channel, voiceChannel } = queue.metadata;

    client.user.setActivity({ name: track.title, type: ActivityType.Listening });

    channel.send(menus.music.announcement(track, voiceChannel));
});