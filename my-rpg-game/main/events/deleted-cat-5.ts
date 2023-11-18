import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { RpgGui, PrebuiltGui } from '@rpgjs/client'

@EventData({
    name: 'deleted-cat-5'
})
export default class TransactionDoorEvent extends RpgEvent {
    onInit() {
        this.setGraphic('deleted-cat-5');
    }
    async onAction(player: RpgPlayer) {
        let playerVariable = player.getVariable('deleted-cat-5');
        await player.showText('Спящий кот во сне что-то бормочет...');
        await player.showText('Вы разобрали странные и незнакомые слова:');
        await player.showText('Аукцион... Юч... ');
        await player.showText('Окрасы... Сияние...');
        await player.showText('Пенькокран... Экзамен на...');
    }
    async onChanges(player: RpgPlayer) {
        
    }
} 