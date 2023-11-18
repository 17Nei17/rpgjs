import { Sound } from '@rpgjs/client'
import daatSong from "./daat.mp3"
import {Howl, Howler} from 'howler';






@Sound({
    sounds: {
        'tatto': require('./tatto.mp3')
    },

    loop: true,

})

export class Daat { }