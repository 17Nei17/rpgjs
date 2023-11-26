import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'


@EventData({
    name: 'cheese-1',
    hitbox: {
        width: 100,
        height: 100
    }
})

export default class CheeseFour extends RpgEvent {
    onInit() {
        this.setGraphic('cheese-1');
    }
    async onAction(player: RpgPlayer) {
        if (!player.getVariable('get-cheese')) {
            await player.showText('*Этот одинокий круглый сыр размышляет о том, что мог бы быть на верхушке пирамиды из сыров, но он скатился.');
            await player.showText('Вам начинает казаться что вы слышите смех остальных сыров над ним.');
            await player.showText('Сыр дрожит... Сыры умеют плакать?');
            await player.showText('Наблюдать за этой картиной становится все печальней... Смотря на сыр, скатившийся с горки вы вспоминаете свою жизнь.');
            await player.showText('Сожаление переполняет вас.');
            const choice = await player.showChoices('Хотите взять сыр с собой и показать ему новые вершины?', [
                { text: 'Да', value: 'Yes' },
                { text: 'Нет', value: 'No' },
            ])
            if (choice?.value === "Yes") {
                // this.remove();
                player.setVariable('get-cheese', true);
            }
            if (choice?.value === "No") {
                await player.showText('Решив, что сыр сам виноват в своих бедах вы проходите мимо почти потоптавшись по неудачливому сыру.');
            }
        }
    }
    async onChanges(player: RpgPlayer) {
        if (player.getVariable('get-cheese')) {
            this.remove();
        }
    }
} 