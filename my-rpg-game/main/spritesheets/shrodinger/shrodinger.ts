
import { Spritesheet, Animation, Direction } from '@rpgjs/client'

const frameY = direction => {
    return {
        [Direction.Down]: 0,
        [Direction.Left]: 1,
        [Direction.Right]: 0,
        [Direction.Up]: 0
    }[direction]
}

@Spritesheet({
    id: 'shrodinger',
    width: 300,
    height: 450,
    framesHeight: 2,
    framesWidth: 3,
    rectWidth: 150,
    rectHeight: 150,
    offset: {
        x: 0, y: 0,
    },
    image: require('./shrodinger.png'),
    textures: {
        [Animation.Stand]: {
            animations: direction => [
                [{ time: 0, frameX: 0, frameY: frameY(direction) }]
            ]
        },
        [Animation.Walk]: {
            animations: direction => [
                [
                    { time: 0, frameX: 0, frameY: frameY(direction) },
                    { time: 12, frameX: 1, frameY: frameY(direction) },
                    { time: 24, frameX: 0, frameY: frameY(direction) },
                    { time: 36, frameX: 2, frameY: frameY(direction) },
                    { time: 48, frameX: 0, frameY: frameY(direction) },
                ]
            ]
        }
    }
})
export default class Shrodinger { }