import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-2',
    hitbox: {
        width: 100,
        height: 100
    }
})
export default class TestEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female')
    }
    async onAction(player: RpgPlayer) {
        // await player.showText('I give you 10 gold.', {
        //     talkWith: this
        // })
        // player.gold += 10
        // RpgGui.display(PrebuiltGui.Notification, {
        //     message: 'You have unlocked the secret passage',
        //     time: Infinity,
        //     icon: 'icon_id',
        //     sound: 'sound_id'
        // })
        const choice = await player.showChoices('What color do you prefer?', [
            { text: 'Black', value: 'black' },
            { text: 'Rather the blue', value: 'blue' },
            { text: 'I don\'t have a preference!', value: 'none' }
       ])
       
       // If the player selects the first
       console.log(choice) // { text: 'Black', value: 'black' }
    }
}




