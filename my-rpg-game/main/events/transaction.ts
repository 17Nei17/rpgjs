import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { RpgGui, PrebuiltGui } from '@rpgjs/client'

@EventData({
    name: 'transaction', 
    hitbox: {
        width: 100,
        height: 100
    }
})
export default class TransactionEvent extends RpgEvent {
    onInit() {
        this.setGraphic('transaction')
    }
    async onAction(player: RpgPlayer) {
     
    }
} 