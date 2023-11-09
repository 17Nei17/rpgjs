import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { RpgGui, PrebuiltGui } from '@rpgjs/client'

@EventData({
    name: 'transaction-door'
})
export default class TransactionDoorEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female');
    }
    async onAction(player: RpgPlayer) {
        if (player.getVariable('transaction-init')) {
            player.showText('Дверь открыта');
            return;
        } else {
            player.showText('Заперто');
        }
    }
    async onChanges(player: RpgPlayer) {
        // const isTexted = player.getVariable('transaction-init')
        // if (isTexted) {
        //     // this.setGraphic('door_opened');
        //     await player.showText('Дверь открыта');
        // }
    }
} 