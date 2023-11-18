import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'


@EventData({
    name: 'cheese-4-3',
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
        player.showText('*Кажется, эта пирамида скоро рухнет');
    }
    async onChanges(player: RpgPlayer) {

    }
}