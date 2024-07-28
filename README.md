# Vivi Music Bot

> [!NOTE] 
> This project **base** can be generated using the [Constant CLI](https://github.com/rinckodev/constatic)
> See the full documentation for this base by accessing: https://constatic-docs.vercel.app/discord

This is the most complete discord bot base you've ever seen! Developed by [@rinckodev](https://github.com/rinckodev), this project uses typescript in an incredible way to provide complete structures and facilitate the development of your discord bot.

> [!WARNING]
> [NodeJs](https://nodejs.org/en) version required: 20.12 or higher

## Instructions

### Setup
Create a folder for the bot
Open the terminal in that folder and paste the command below
```bash
git clone https://github.com/rinckodev/vivi-music-community-discord-bot.git .
```

Install dependencies
```bash
npm install
```

Rename `.env.example` file to `.env`

Place [your bot token](https://constatic-docs.vercel.app/discord/guides/application) in `.env` file
```
BOT_TOKEN=yourtoken
```

Run the bot in development with dev script
```bash
npm run dev
```

Build the project with the build command
```bash
npm run build
```

Run the built project with the start script
```bash
npm run start
```

### Usage

The bot has only one command, which contains some sub commands.

On the server use `/música`

| Sub command | Usage | Description |
| - | - | - |
| tocar | `/música tocar` | Play a song |
| pular | `/música pular` | Skip queue song |
| embaralhar | `/música embaralhar` | Shuffle queue song |
| pausar | `/música pausar` | Stop the current song |
| retomar | `/música retomar` | Resume the current song |
| parar | `/música parar` | Stop the current song |
| pesquisar | `/música pesquisar` | Search for a song using autocomplete |
| selecionar | `/música selecionar` | Skip to a specific song in the queue |