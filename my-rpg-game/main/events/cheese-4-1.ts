import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'


@EventData({
    name: 'cheese-4-1',
    hitbox: {
        width: 100,
        height: 100
    }
})

export default class CheeseFour extends RpgEvent {
    onInit() {
        this.setGraphic('cheese-4');
    }
    async onAction(player: RpgPlayer) {
        player.showText('*Гора сыра');
    }
    async onChanges(player: RpgPlayer) {

    }
} 