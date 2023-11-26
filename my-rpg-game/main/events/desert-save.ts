import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'desert-save',
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
        await player.showText('"Воспоминание о былых приключениях" позволяет записать в него свою текущую историю.');
        const choice = await player.showChoices('Что ты хочешь сделать?', [
            { text: 'Сохраниться', value: 'Save' },
            { text: 'Выйти', value: 'Exit' },
        ])
        if (choice?.value === "Save") {
            const json = player.save();
            localStorage.setItem('gameSave', JSON.stringify(json));
            console.log(json);
            player.showNotification('Текущее состояние игры было записано в кэш браузера.')
        }
        if (choice?.value === "Exit") {
            player.showNotification('В "Воспоминание о былых приключениях" не были внесены новые записи.')
        }
    }
    async onChanges(player: RpgPlayer) {

    }
} 