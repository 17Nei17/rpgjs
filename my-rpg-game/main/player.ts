import { RpgPlayer, type RpgPlayerHooks, Control, Components, RpgShape } from '@rpgjs/server'
import howlMusic from "./howlMusic"
import { RpgMap } from '@rpgjs/server'

const player: RpgPlayerHooks = {
    async onConnected(player: RpgPlayer) {
        // player.name = 'Nei'
        // player.setComponentsTop(Components.text('{name}'));

    },

    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer, map: RpgMap) {
        let currentMap = "Не определена";
        if (player.getCurrentMap()) {
            currentMap = player.getCurrentMap().class;
            howlMusic(player.getCurrentMap().songName, 'join');
        }

        // эта штука вполне себе работает и вызывает окошко через пропсы в myGui.tsx
        player.gui('my-gui').open({
            currentMap: currentMap,
        });

        player.setVariable('CURRENT_TIME_DAY', true);


        if (new Date().getHours() <= 12 && new Date().getHours() >= 0) {
            player.setVariable('CURRENT_TIME_DAY', true)
            console.log("day");
        }
        if (new Date().getHours() >= 23) {
            player.setVariable('CURRENT_TIME_DAY', false)
            console.log("night");
        }

    },
    async onLeaveMap(player: RpgPlayer) {
        howlMusic(player.getCurrentMap().songName, 'leave');
    },
    // async onInShape(player: RpgPlayer, shape: RpgShape) {
    //     console.log('in', player.name, shape.name)
    //     if (shape.name === "enter-to-dytokrys") {
    //         const choice = await player.showChoices('Уйти из пещеры?', [
    //             { text: 'Да', value: 'Yes' },
    //             { text: 'Нет', value: 'No' },
    //         ])
    //         if (choice?.value === "Yes") {
    //             await player.changeMap('exit-to-dytokrys', {
    //                 x: 86,
    //                 y: -4000
    //             });
    //         }
    //     }
    // },
    // onOutShape(player: RpgPlayer, shape: RpgShape) {
    //     console.log('out', player.name, shape.name)
    // }
}

export default player