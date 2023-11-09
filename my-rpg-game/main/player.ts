import { RpgPlayer, type RpgPlayerHooks, Control, Components } from '@rpgjs/server'



const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.name = 'Nei'
        player.setComponentsTop(Components.text('{name}'))
    },

    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer) {
        player.gui('my-gui').open({
            foo: 'bar' // You can send props to the GUI
        });
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
        // await player.showText('And, please, support the project on github https://github.com/RSamaium/RPG-JS ! :)')
        player.setVariable('AFTER_INTRO', true)
    }
}

export default player