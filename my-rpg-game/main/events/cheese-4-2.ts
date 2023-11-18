import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'


@EventData({
    name: 'cheese-4-2',
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
        player.showText('*Сыры, уложенные друг на друга');
    }
    async onChanges(player: RpgPlayer) {

    }
} 