// import { Spritesheet, Presets } from '@rpgjs/client'
import { Spritesheet, Animation, Direction } from '@rpgjs/client'
// const { RMSpritesheet } = Presets

// @Spritesheet({
//     ...RMSpritesheet(1, 1)
// })
const frameY = direction => {
    // return {
    //     [Direction.Down]: 0,
    //     [Direction.Left]: 0,
    //     [Direction.Right]: 0, 
    //     [Direction.Up]: 0
    // }[direction]
}

@Spritesheet({
    framesWidth: 1, // number of frames of the image across the width
    framesHeight: 1, // number of frames of the image across the height
    textures: {
        [Animation.Stand]: {
            animations: direction => [
                [{ time: 0, frameX: 0, frameY: 0 }]
            ]
        },
        [Animation.Walk]:  {
            animations: direction => [
                    [ 
                        { time: 0, frameX: 0, frameY: 0 },
                        { time: 10, frameX: 0, frameY: 0 },
                        { time: 20, frameX: 0, frameY: 0 },
                        { time: 40 } // in in fact the final duration of the animation.
                    ]
                ]
         }
    }
})
export default class Characters { }