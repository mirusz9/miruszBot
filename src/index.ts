import { Client, MessageEmbedOptions, Message, Intents } from 'discord.js';
import commands from './commands';
require('dotenv').config();

const client = new Client();

const prefix = '!';

client.on('ready', () => {
	console.log(`Logged in as ${client.user!.tag}`);
});

client.on('message', (message: Message) => {
	// Only check messages that start with the prefix
	if (!message.content.startsWith(prefix)) return;
	else {
		// Remove prefix and split
		const tokens = message.content.slice(1).split(' ');

		for (const command of commands) {
			if (tokens[0].toLowerCase() == command.name) {
				command.execute(message, tokens.slice(1));
				return;
			}
		}

		// Format the command
		const formattedCommands = commands
			.map(({ name, args, description }) => {
				return `> \`${prefix}${name}${args.length ? ' ' : ''}${args
					.map((param) => `[${param}]`)
					.join(' ')}\` - ${description}`;
			})
			.join('\n');

		message.react('❌');
		message.channel.send(
			`> :x:   **Invalid command!** ${message.author}\n> \n> **Available commands:**\n${formattedCommands}`
		);
	}
});

client.login(process.env.BOT_TOKEN);
