import '../lib/setup';
import { LogLevel, SapphireClient } from '@sapphire/framework';

export class Client extends SapphireClient {
    constructor() {
        super({
            defaultPrefix: process.env["DEFAULT_PREFIX"],
            caseInsensitiveCommands: true,
            logger: {
                level: LogLevel.Debug
            },
            shards: 'auto',
            intents: [
                'GUILDS',
                'GUILD_MEMBERS',
                'GUILD_BANS',
                'GUILD_EMOJIS_AND_STICKERS',
                'GUILD_VOICE_STATES',
                'GUILD_MESSAGES',
                'GUILD_MESSAGE_REACTIONS',
                'DIRECT_MESSAGES',
                'DIRECT_MESSAGE_REACTIONS'
            ]
        })
    }

    public async main() {
        try {
            this.logger.info("Intentando conectar con Discord...");
            this.login();
        } catch (error) {
            this.logger.fatal("Hubo un error intentando conectarse a Discord.", error);
            this.destroy();
            process.exit(-1);
        }
    }
}