import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'deleted-cat-3'
})
export default class TransactionDoorEvent extends RpgEvent {
    onInit() {
        this.setGraphic('deleted-cat-3');
    }
    async onAction(player: RpgPlayer) {
        await player.showText('Я залез сюда, чтобы осмотреться и узнать, нет ли поблизости того страшного кота...');
        await player.showText('И к радости всех, я его не вижу');
    }
    async onChanges(player: RpgPlayer) {

    }
} 