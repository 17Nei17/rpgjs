import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'evil-cactus',
    hitbox: {
        width: 100,
        height: 100
    }
})

export default class TransactionDoorEvent extends RpgEvent {
    onInit() {
        this.setGraphic('cactus');
    }
    async onAction(player: RpgPlayer) {
        await player.showText('Кактус... Танцует?');
    }
    async onChanges(player: RpgPlayer) {

    }
} 