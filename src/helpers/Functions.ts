/**
 *
 * @description - A function to format a date
 * @param uglyDate {number} - A UNIX timestamp
 * @returns {string} - A prettier date
 */
export function prettyDate(uglyDate: number): string {
    const date = new Date(uglyDate * 1000);
    const days = date.getUTCDate() - 1,
        hours = date.getUTCHours(),
        minutes = date.getUTCMinutes(),
        seconds = date.getUTCSeconds();
    const segments = [];
    if (days > 0) segments.push(days + ' day' + (days === 1 ? '' : 's'));
    if (hours > 0) segments.push(hours + ' hour' + (hours === 1 ? '' : 's'));
    if (minutes > 0)
        segments.push(minutes + ' minute' + (minutes === 1 ? '' : 's'));
    if (seconds > 0)
        segments.push(seconds + ' second' + (seconds === 1 ? '' : 's'));
    return segments.join(', ');
}

export class GuildData {
    public static verificationLevel: string[] = [
        'None - unrestricted access to the server',
        'Low - must have a verified email on their Discord account',
        'Medium - must be registered on Discord for longer than 5 minutes',
        'High - Must be a member of the server for longer than 10 minutes',
        'Highest - Must have a verified phone on their Discord account',
    ];
    public static explicitContentFilter: string[] = [
        'Disabled - do not scan any messages',
        'Members without roles - scan messages sent by members without a role',
        'All members - scan all messages sent by all members',
    ];
    public static defaultMessageNotifications: string[] = [
        'All messages - receive notifications for all messages',
        'Only @mentions - only receive notifications when you are @mentioned',
    ];
    public static mfaLevel: string[] = [
        'None - 2FA not required',
        'elevated - 2FA required for moderation actions',
    ];
    public static premiumTier: string[] = [
        'None - not enough boosts',
        'Tier 1 - server boosts level 1',
        'Tier 2 - server boosts level 2',
        'Tier 3 - server boosts level 3'];
    public static systemChannelFlags: string[] = [
        'Suppress member join notifications',
        'Suppress server boost notifications',
        'Suppress server setup tips',
    ];
    public static nsfwLevel: string[] = [
        'Default - display an age gate for NSFW channels',
        'Explicit - do not display an age gate for NSFW channels',
    ];
}
