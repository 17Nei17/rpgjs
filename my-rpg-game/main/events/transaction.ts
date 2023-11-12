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
        this.setGraphic('transaction');
        console.log("asd");
    }
    async onAction(player: RpgPlayer) {
        if (player.getVariable('transaction-init')) {
            player.showText('......')
            return
        }
        await player.showText('Кто ты такой?');
        await player.showText('Тебя не должно тут быть, ты не из этого мира');
        await player.showText('Черт, я не могу удалить тебя');
        player.setVariable('transaction-init', true)
    }
    onChanges(player: RpgPlayer) {
        const isTexted = player.getVariable('transaction-init')
        if (isTexted) {
            this.remove();
        }
    }
} 