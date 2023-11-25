import { RpgModule, RpgClient } from '@rpgjs/client'
import { Daat } from './music/assets'
import  MessageGUI  from './gui/messageGui.tsx'

@RpgModule<RpgClient>({
    "sounds": [Daat],
    "gui": [MessageGUI]
})


export default class RpgClientEngine { }