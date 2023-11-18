import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'


@EventData({
    name: 'cheese-1',
    hitbox: {
        width: 100,
        height: 100
    }
})

export default class CheeseFour extends RpgEvent {
    onInit() {
        this.setGraphic('cheese-1');
    }
    async onAction(player: RpgPlayer) {
        player.showText('*Этот одинокий круглый сыр размышляет о том, что мог бы быть на верхушке пирамиды из сыров, но он скатился.');
    }
    async onChanges(player: RpgPlayer) {

    }
} 