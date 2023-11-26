import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

import dudecOpen from "../messageImages/dudecOpen.png"
import dudecClosed from "../messageImages/dudecClosed.png"


@EventData({
    name: 'load-cat',
    hitbox: {
        width: 50,
        height: 100
    }
})
export default class TransactionDoorEvent extends RpgEvent {
    onInit() {
        this.setGraphic('dudec');
    }
    async onAction(player: RpgPlayer) {
        player.gui('message-gui').open({
            text: "text",
            image: dudecClosed
        })
        if (localStorage.getItem('gameSave')) {
            await player.showText('Ты можешь продолжить игру с последнего воспоминания.');
        }
        if (!localStorage.getItem('gameSave')) {
            await player.showText('У тебя нет воспоминаний об о былых приключениях.');
        }
        player.gui('message-gui').close();
        player.gui('message-gui').open({
            text: "text",
            image: dudecOpen
        })
        const choice = await player.showChoices('Что ты хочешь сделать?', [
            { text: 'Загрузить последнее воспоминание', value: 'Load' },
            { text: 'Выйти', value: 'Exit' },
        ])
        player.gui('message-gui').close();
        if (choice?.value === "Load") {
            const savedUser = JSON.parse(localStorage.getItem('gameSave'));
            savedUser && player.load(savedUser);
        }
    }
    async onChanges(player: RpgPlayer) {

    }
} 