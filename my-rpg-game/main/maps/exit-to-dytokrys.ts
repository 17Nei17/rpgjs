import { MapData,  RpgMap } from '@rpgjs/server' // import in top
import { RpgSceneMapHooks, RpgSceneMap } from '@rpgjs/client'


@MapData({
    id: 'exit-to-dytokrys',
    file: require('../worlds/maps/desert-bottom.tmx')
})

class ExitToDytokrys extends RpgMap {}

export default ExitToDytokrys;



