import { RpgModule, RpgClient } from '@rpgjs/client'
import { Daat } from './music/assets'

@RpgModule<RpgClient>({
    "sounds": [ Daat ]
})


export default class RpgClientEngine { }