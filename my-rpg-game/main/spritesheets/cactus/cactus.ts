
import { Spritesheet, Animation } from '@rpgjs/client'

@Spritesheet({
    id: 'cactus',
    width: 188,
    height: 330,
    framesHeight: 2,
    framesWidth: 1,
    rectWidth: 188,
    rectHeight: 164,
    offset: {
        x: 0, y: 0,
    },
    image: require('./cactus.png'),
    textures: {
        [Animation.Stand]: {
            animations: direction => [
                [{ time: 0, frameX: 0, frameY: 0 }],
                [{ time: 50, frameX: 0, frameY: 1 }],
                [{ time: 100, frameX: 0, frameY: 0 }],
            ]
        },
    }
})
export default class Cactus { }