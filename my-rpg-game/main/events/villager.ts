import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { RpgGui, PrebuiltGui } from '@rpgjs/client'

@EventData({
    name: 'EV-1', 
    hitbox: {
        width: 100,
        height: 100
    }
})
export default class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female')
    }
    async onAction(player: RpgPlayer) {
        // await player.showText('I give you 10 gold.', {
        //     talkWith: this
        // })
        // player.gold += 10
        // my-gui
        RpgGui.display(PrebuiltGui.Notification, {
            message: 'You have unlocked the secret passage',
            time: 2000,
            icon: 'icon_id',
            sound: 'sound_id'
        })
    }
} 