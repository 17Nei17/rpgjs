
import { Spritesheet, Animation, Direction } from '@rpgjs/client'
// const frameY = direction => {
//     return {
//         [Direction.Down]: 0,
//         [Direction.Left]: 1,
//         [Direction.Right]: 0,
//         [Direction.Up]: 0
//     }[direction]
// }

@Spritesheet({
    id: 'transaction',
    width: 100,
    height: 150,
    framesHeight: 1,
    framesWidth: 1,
    rectWidth: 100,
    rectHeight: 150,
    offset: {
        x: 0, y: 0,
    },
    image: require('./transaction.webp'),
    textures: {
        [Animation.Stand]: {
            animations: direction => [
                [{ time: 0, frameX: 0, frameY: 0 }]
            ]
        },
    }
})
export default class Transaction { }