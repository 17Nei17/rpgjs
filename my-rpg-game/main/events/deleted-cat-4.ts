import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { RpgGui, PrebuiltGui } from '@rpgjs/client'

@EventData({
    name: 'deleted-cat-4'
})
export default class TransactionDoorEvent extends RpgEvent {
    onInit() {
        this.setGraphic('deleted-cat-4');
    }
    async onAction(player: RpgPlayer) {
        let playerVariable = player.getVariable('deleted-cat-4');

        switch (playerVariable) {
            case 1:
                await player.showText('Этот огонь словно замер...');
                await player.showText('Он даже не горячий и его можно потрогать...');
                await player.showText('(*Вы не стали рисковать и проверять костер)');
                player.setVariable('deleted-cat-4', 2);
                break;
            case 2:
                await player.showText('Здесь есть много таких же, как я.');
                // if (player.getVariable('currentTime') <= 12 && player.getVariable('currentTime') >= 0) {
                //     await player.showText('Будь осторожен, ночью тут может быть гораздо опасней.');
                // }
                // if (player.getVariable('currentTime') >= 12 && player.getVariable('currentTime') <= 0) {
                //     await player.showText('Сейчас день, но это не значит что пустыня безопасна для одиночек.');
                // }
                await player.showText('Раньше со мной был котенок, но последнее время я не вижу его...');
                await player.setVariable('deleted-cat-4', 3);
                break;
            case 3:
                await player.showText('В пустыне все замерло, часто сюда попадают коты, которые сначало рассказывают много удивительных вещей...');
                await player.showText('Но со временем они все забывают, и просто сонливо бездействуют.. Или коротают дни, сидя у этого огня...');
                await player.setVariable('deleted-cat-4', 4);
                break;
            case 4:
                await player.showText('Многие приходят, а потом просто теряются в этой пустыне... Поэтому мы стараемся держаться этого места с костром, чтобы оставаться в безопасности.');
                await player.showText('Когда-то я тоже...');
                player.setVariable('deleted-cat-4', 5);
                break;
            case 5:
                await player.showText('*Кот просто безмолвно смотрит на огонь и молчит.');
                break;
            default:
                await player.showText('Кто ты такой?');
                await player.showText('Я обитаю тут уже очень давно, но впервые вижу тебя.');
                player.setVariable('deleted-cat-4', 1);

        }


    }
    async onChanges(player: RpgPlayer) {
        // const isTexted = player.getVariable('transaction-init')
        // if (isTexted) {
        //     // this.setGraphic('door_opened');
        //     await player.showText('Дверь открыта');
        // }
    }
} 