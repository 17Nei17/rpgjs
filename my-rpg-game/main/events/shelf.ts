import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'


@EventData({
    name: 'shelf',
    hitbox: {
        width: 50,
        height: 50
    }
})
export default class Shelf extends RpgEvent {
    onInit() {
    }
    async onAction(player: RpgPlayer) {
        player.showText('*Шкаф полон книг о ракетостроении.');
    }
    async onChanges(player: RpgPlayer) {

    }
} 