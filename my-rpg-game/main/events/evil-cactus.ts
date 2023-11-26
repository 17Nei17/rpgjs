import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'evil-cactus'
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