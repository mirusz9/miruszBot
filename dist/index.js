"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const commands_1 = __importDefault(require("./commands"));
require('dotenv').config();
const client = new discord_js_1.Client();
const prefix = '!';
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});
client.on('message', (message) => {
    // Only check messages that start with the prefix
    if (!message.content.startsWith(prefix))
        return;
    else {
        // Remove prefix and split
        const tokens = message.content.slice(1).split(' ');
        for (const command of commands_1.default) {
            if (tokens[0].toLowerCase() == command.name) {
                command.execute(message, tokens.slice(1));
                return;
            }
        }
        // Format the command
        const formattedCommands = commands_1.default
            .map(({ name, args, description }) => {
            return `> \`${prefix}${name}${args.length ? ' ' : ''}${args
                .map((param) => `[${param}]`)
                .join(' ')}\` - ${description}`;
        })
            .join('\n');
        message.react('❌');
        message.channel.send(`> :x:   **Invalid command!** ${message.author}\n> \n> **Available commands:**\n${formattedCommands}`);
    }
});
client.login(process.env.BOT_TOKEN);
