import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'load-cat',
    hitbox: {
        width: 50,
        height: 100
    }
})
export default class TransactionDoorEvent extends RpgEvent {
    onInit() {
        this.setGraphic('save');
    }
    async onAction(player: RpgPlayer) {
        if (localStorage.getItem('gameSave')) {
            await player.showText('Ты можешь продолжить игру с последнего воспоминания.');
        }
        if (!localStorage.getItem('gameSave')) {
            await player.showText('У тебя нет воспоминаний об о былых приключениях.');
        }
        const choice = await player.showChoices('Что ты хочешь сделать?', [
            { text: 'Загрузить последнее воспоминание', value: 'Load' },
            { text: 'Выйти', value: 'Exit' },
        ])
        if (choice?.value === "Load") {
            const savedUser = JSON.parse(localStorage.getItem('gameSave'));
            player.load(savedUser);
        }
    }
    async onChanges(player: RpgPlayer) {

    }
} 