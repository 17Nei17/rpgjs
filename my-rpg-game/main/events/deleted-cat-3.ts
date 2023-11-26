import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'deleted-cat-3'
})
export default class TransactionDoorEvent extends RpgEvent {
    onInit() {
        this.setGraphic('deleted-cat-3');
    }
    async onAction(player: RpgPlayer) {
        await player.showText('Это самая высокая скала куда я могу попасть.');
        await player.showText('Я залез сюда, чтобы осмотреться и узнать, нет ли поблизости того страшного кота...');
        await player.showText('К счастью никого опасного рядом нет');
    }
    async onChanges(player: RpgPlayer) {

    }
} 