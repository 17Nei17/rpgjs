import { MapData,  RpgMap } from '@rpgjs/server' // import in top
import { RpgSceneMapHooks, RpgSceneMap } from '@rpgjs/client'


@MapData({
    id: 'enter-to-dytokrys',
    file: require('../worlds/maps/caveDyto.tmx')
})

class caveDyto extends RpgMap {}

export default caveDyto;



