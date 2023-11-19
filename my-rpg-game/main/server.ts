import { RpgServerEngine } from '@rpgjs/server';
import { RpgServer, RpgModule } from '@rpgjs/server';
import caveDyto from "./maps/enter-to-dytokrys"
@RpgModule<RpgServer>({
    engine: {
        onStart(engine: RpgServerEngine) {
            const sceneMap = engine.sceneMap;
            sceneMap.createDynamicMap(caveDyto)
        }
    }
})

export default class RpgServerModuleEngine { }