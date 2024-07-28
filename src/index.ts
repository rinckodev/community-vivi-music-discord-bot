import { bootstrapApp } from "#base";
import { Player } from "discord-player";
import { YoutubeiExtractor } from "discord-player-youtubei";

await bootstrapApp({ 
    workdir: import.meta.dirname,
    commands: {
        guilds: ["584490943034425391"]
    },
    beforeLoad(client) {
        const player = Player.singleton(Object(client), {
            ytdlOptions: {
                quality: "highestaudio",
                filter: "videoonly"
            }
        });
        player.extractors.register(YoutubeiExtractor, {});
        Object.assign(client, { player });
    },
});