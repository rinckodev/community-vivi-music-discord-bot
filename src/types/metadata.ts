import { Client, Guild, GuildTextBasedChannel, VoiceBasedChannel } from "discord.js";

export interface QueueMetadata {
    client: Client<true>;
    guild: Guild;
    voiceChannel: VoiceBasedChannel;
    channel: GuildTextBasedChannel;
}