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
        player.showText('Эти сыры очень довольны своей судьбой.');
        if (player.getVariable('get-cheese')) {
            player.showText('*Гора сыров удивлена вашим решением');
        }
    }
    async onChanges(player: RpgPlayer) {

    }
} 