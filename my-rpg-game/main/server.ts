import { RpgServerEngine } from '@rpgjs/server';
import { RpgServer, RpgModule } from '@rpgjs/server';
import caveDyto from "./maps/enter-to-dytokrys"
import ExitToDytokrys from "./maps/exit-to-dytokrys"
@RpgModule<RpgServer>({
    engine: {
        onStart(engine: RpgServerEngine) {
            const sceneMap = engine.sceneMap;
            sceneMap.createDynamicMap(caveDyto)
            sceneMap.createDynamicMap(ExitToDytokrys)
        }
    }
})

export default class RpgServerModuleEngine { }