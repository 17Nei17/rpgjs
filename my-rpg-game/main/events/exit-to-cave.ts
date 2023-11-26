import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'exit-to-cave',
    hitbox: {
        width: 150,
        height: 50
    }
})
export default class TransactionDoorEvent extends RpgEvent {
    onInit() {
        // this.setGraphic('cactus');
    }
    async onAction(player: RpgPlayer) {
        const choice = await player.showChoices('Уйти из пещеры?', [
            { text: 'Да', value: 'Yes' },
            { text: 'Нет', value: 'No' },
        ])
        if (choice?.value === "Yes") {
            await player.changeMap('exit-to-dytokrys', {
                x: 1000,
                y: 950
            });
        }
    }
    async onChanges(player: RpgPlayer) {

    }
} 