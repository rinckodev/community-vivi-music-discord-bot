import { settings } from "#settings";
import { brBuilder, createEmbed, createRow, limitText } from "@magicyan/discord";
import { GuildQueue } from "discord-player";
import { ButtonBuilder, ButtonStyle, hyperlink } from "discord.js";

export function musicQueueMenu(queue: GuildQueue, page=0){
    const maxItems = 6;
    const amount = queue.size;
    const total = Math.ceil(amount/maxItems);
    const spliced = queue.tracks.toArray().splice(page*maxItems, maxItems);

    const embed = createEmbed({
        color: settings.colors.fuchsia,
        description: brBuilder(
            "# Fila atual",
            `Músicas: ${queue.tracks.size}`,
            `-# Música atual: ${queue.currentTrack?.title??"Nenhuma"}`
        ),
        fields: spliced.map(track => ({
            name: limitText(track.title, 18, "..."), inline, value: brBuilder(
                `> **Música**: ${hyperlink(track.title, track.url)}`,
                `> **Autor**: ${track.author}`,
                `> **Duração**: ${track.duration}`
            )
        })),
        footer: {
            text: `${page+1}/${Math.max(total, 1)}`
        }
    });
    
    const row = createRow(
        new ButtonBuilder({
            customId: `music/queue/${page-1}`, 
            label: "Anterior", 
            style: ButtonStyle.Secondary,
            disabled: page < 1
        }),
        new ButtonBuilder({
            customId: "music/queue/00", 
            label: "Início", 
            style: ButtonStyle.Secondary,
            disabled: page < 1
        }),
        new ButtonBuilder({
            customId: `music/queue/${page+1}`, 
            label: "Próxima", 
            style: ButtonStyle.Secondary,
            disabled: page >= total-1,
        }),
    );

    return { ephemeral, embeds: [embed], components: [row] };
}