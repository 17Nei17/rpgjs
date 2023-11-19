import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { RpgWorld } from '@rpgjs/server';

@EventData({
    name: 'door-to-dytokrys',
    hitbox: {
        width: 100,
        height: 100
    }
})
export default class CheeseOne extends RpgEvent {
    onInit() {
  
    }
    async onAction(player: RpgPlayer) {
        await player.changeMap('enter-to-dytokrys', {
            x: 179,
            y: 1400
        });
    }
    async onChanges(player: RpgPlayer) {

    }
}