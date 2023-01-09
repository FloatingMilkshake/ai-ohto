import type { ApplicationCommandData, Client } from 'discord.js';
import { CommandInteraction } from 'discord.js';

export type Command = ApplicationCommandData & {
    guildOnly?: boolean;
    run(interaction: CommandInteraction): void | Promise<unknown>;
};
