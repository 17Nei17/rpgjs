import { RpgServerEngine } from '@rpgjs/server';
import { RpgServer, RpgModule } from '@rpgjs/server';

@RpgModule<RpgServer>({ 
    engine: {
        onStart(server: RpgServerEngine) {
            console.log('server.globalConfig.start.map')
        }
    }
 })
export default class RpgServerModuleEngine {}