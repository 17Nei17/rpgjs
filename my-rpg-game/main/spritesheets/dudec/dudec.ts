
import { Spritesheet, Animation } from '@rpgjs/client'

@Spritesheet({
    id: 'dudec',
    width: 150,
    height: 150,
    framesHeight: 1,
    framesWidth: 1,
    rectWidth: 150,
    rectHeight: 150,
    offset: {
        x: 0, y: 0,
    },
    image: require('./dudec.png'),
    textures: {
        [Animation.Stand]: {
            animations: direction => [
                [{ time: 0, frameX: 0, frameY: 0 }]
            ]
        },
    }
})
export default class Dudec { }