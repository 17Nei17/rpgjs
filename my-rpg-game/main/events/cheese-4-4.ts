import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'


@EventData({
    name: 'cheese-4-4',
    hitbox: {
        width: 100,
        height: 100
    }
})
export default class CheeseOne extends RpgEvent {
    onInit() {
        this.setGraphic('cheese-3');
    }
    async onAction(player: RpgPlayer) {
        player.showText('Тоже сыр');
    }
    async onChanges(player: RpgPlayer) {

    }
}