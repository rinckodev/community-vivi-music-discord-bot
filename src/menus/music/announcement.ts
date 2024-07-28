import { settings } from "#settings";
import { brBuilder, createEmbed } from "@magicyan/discord";
import { Track } from "discord-player";
import { VoiceBasedChannel } from "discord.js";

export function musicAnnouncementMenu(track: Track, voiceChannel: VoiceBasedChannel){
    const { thumbnail, url, title, author, duration } = track;
    const embed = createEmbed({
        color: settings.colors.fuchsia,
        title: "🎵 Tocando agora",
        thumbnail, url,
        description: brBuilder(
            `**Música**: ${title}`,
            `**Autor**: ${author}`,
            `**Canal de voz**: ${voiceChannel}`,
            `**Duração**: ${duration}`
        )
    });

    return { embeds: [embed] };
}