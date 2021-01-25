"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
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
exports.default = commands;
