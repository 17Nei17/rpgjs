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
        this.setGraphic('cheese-4');
    }
    async onAction(player: RpgPlayer) {
        player.showText('*Большой стопка сыров');
    }
    async onChanges(player: RpgPlayer) {

    }
}