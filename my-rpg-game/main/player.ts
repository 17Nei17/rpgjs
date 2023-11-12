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
        console.log("onJoinMap");
        //эта штука вполне себе работает и вызывает окошко через пропсы в myGui.tsx
        player.gui('my-gui').open({
            foo: 123 
        });
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
        player.setVariable('AFTER_INTRO', true)
    }
}

export default player