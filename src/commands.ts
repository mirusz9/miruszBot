import { Message } from 'discord.js';

interface ICommand {
	name: string;
	description: string;
	args: string[];
	execute: (message: Message, args: string[]) => void;
}

const commands: ICommand[] = [
	{
		name: 'togglenotifications',
		description: 'Toggles notifications on time',
		args: [],
		execute: (message, args) => {
			return;
		},
	},
	{
		name: 'setLink',
		description: 'Sets link for class',
		args: ["block", "link"],
		execute: (message, args) => {
			return;
		},
	},
];

export default commands;
