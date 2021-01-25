"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let notsOn = false;
const commands = [
    {
        name: 'togglenotifications',
        description: 'Toggles notifications on time',
        args: [],
        execute: (message, args) => {
            notsOn = !notsOn;
            message.react('✅');
            message.channel.send(`> :${notsOn ? 'bell' : 'no_bell'}:   **Notifications turned ${notsOn ? 'on' : 'off'}** ${message.author}`);
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
exports.default = commands;
