import { Message } from 'discord.js';

interface ICommand {
	name: string;
	description: string;
	args: string[];
	execute: (message: Message, args: string[]) => void;
}

let notsOn = false;

const commands: ICommand[] = [
	{
		name: 'togglenotifications',
		description: 'Toggles notifications on time',
		args: [],
		execute: (message, args) => {
			notsOn = !notsOn;
			message.react('✅');
			message.channel.send(
				`> :${notsOn ? 'bell' : 'no_bell'}:   **Notifications turned ${
					notsOn ? 'on' : 'off'
				}** ${message.author}`
			);
			return;
		},
	},
	{
		name: 'setLink',
		description: 'Sets link for class',
		args: ['block', 'link'],
		execute: (message, args) => {
			return;
		},
	},
];

export default commands;
