import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'


@EventData({
    name: 'dytoKrysa-1'
})
export default class DytoKrysa extends RpgEvent {
    onInit() {
        this.setGraphic('dytoKrysa-1');
    }
    async onAction(player: RpgPlayer) {
        player.showText('*Пищит на крысином');
    }
    async onChanges(player: RpgPlayer) {

    }
} 