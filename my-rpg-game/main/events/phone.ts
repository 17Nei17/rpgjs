import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'


@EventData({
    name: 'phone',
    hitbox: {
        width: 50,
        height: 50
    }
})
export default class Phone extends RpgEvent {
    onInit() {
        console.log("PhoneInit");
    }
    async onAction(player: RpgPlayer) {
        await player.showText('На столе стоит телефон и рядом небольшая записная книжка с номерами:');
        const CURRENT_TIME_DAY = player.getVariable("CURRENT_TIME_DAY");
        let ringingTimeMyrlychka = player.getVariable('ringingTimeMyrlychka');
        let ringingTimeSiyanie = player.getVariable('ringingTimeSiyanie');
        const choice = await player.showChoices('Какой номер набрать?', [
            { text: 'Мурлычка- 72-72-27', value: 'Myrlychka' },
            { text: 'Сияние - 75-88-85', value: 'Siyanie' },
            { text: 'Мурр - 1', value: 'Murr' },
            { text: 'Кирпекоты - ####c ### #', value: 'Kirpekot' }
        ])
        console.log(choice)
        console.log(CURRENT_TIME_DAY);
        if (choice?.value === "Murr") {
            await player.showText('Набранный номер не существует... Перепроверьте и позвоните позже.');
        }
        if (!CURRENT_TIME_DAY) {
            if (choice?.value === "Myrlychka") {
                switch (ringingTimeMyrlychka) {
                    case 1:
                        await player.showText('Я не могу говорить, я сейчас занята на рейде.');
                        player.setVariable('ringingTimeMyrlychka', 2);
                        break;
                    case 2:
                        await player.showText('*Звуки кошачьей борьбы.');
                        player.setVariable('ringingTimeMyrlychka', 3);
                        break;
                    case 3:
                        await player.showText('*Вы слышите звуки удара сыром по кошачьим головам.');
                        player.setVariable('ringingTimeMyrlychka', 4);
                        break;
                    case 4:
                        await player.showText('Трубку больше никто не берет...');
                        break;
                    default:
                        await player.showText('Алло? Вы время видели?');
                        await player.showText('*На том конце бросили трубку.');
                        player.setVariable('ringingTimeMyrlychka', 1);
                }
            }
            if (choice?.value === "Siyanie") {
                switch (ringingTimeSiyanie) {
                    case 1:
                        await player.showText('Вы пытаетесь дозвониться, но все еще никто не подымает трубку.');
                        player.setVariable('ringingTimeSiyanie', 2);
                        break;
                    case 2:
                        await player.showText('Кажется, трубку случайно все-же подняли.');
                        await player.showText('*Слышны звуки пересчитывания денег.');
                        player.setVariable('ringingTimeSiyanie', 3);
                        break;
                    case 3:
                        await player.showText('Что-то упало... Наверно это был сервер catwar.');
                        await player.showText('*Слышна тихая ругань.');
                        player.setVariable('ringingTimeSiyanie', 4);
                        break;
                    case 4:
                        await player.showText('Больше никто не берет трубку...');
                        break;
                    default:
                        await player.showText('Никто не берет трубку.');
                        player.setVariable('ringingTimeSiyanie', 1);
                }
            }
        }
        if (CURRENT_TIME_DAY) {
            if (choice?.value === "Siyanie") {
                switch (ringingTimeSiyanie) {
                    case 1:
                        await player.showText('Никто не берет трубку.');
                        player.setVariable('ringingTimeSiyanie', 2);
                        break;
                    case 2:
                        await player.showText('Никто не берет трубку.');
                        player.setVariable('ringingTimeSiyanie', 3);
                        break;
                    case 3:
                        await player.showText('Трубку сняли но в нее молчат...');
                        player.setVariable('ringingTimeSiyanie', 4);
                        break;
                    case 4:
                        await player.showText('Больше никто не берет трубку...');
                        break;
                    default:
                        await player.showText('Никто не берет трубку.');
                        player.setVariable('ringingTimeSiyanie', 1);
                }
            }
            if (choice?.value === "Myrlychka") {
                switch (ringingTimeMyrlychka) {
                    case 1:
                        await player.showText('Да-да, не переживайте, сыр всегда прибывает вовремя и свежий.');
                        player.setVariable('ringingTimeMyrlychka', 2);
                        break;
                    case 2:
                        await player.showText('Хватит сюда звонить! С такой настойчивостью я буду вынуждена отказать вам в постоянной скидке.');
                        player.setVariable('ringingTimeMyrlychka', 3);
                        break;
                    case 3:
                        await player.showText('Мне нужно работать! Сыр едет!');
                        player.setVariable('ringingTimeMyrlychka', 4);
                        break;
                    case 4:
                        await player.showText('Трубку больше никто не берет...');
                        break;
                    default:
                        await player.showText('Алло? Новая партия сыра? Была отправлена вчера.');
                        player.setVariable('ringingTimeMyrlychka', 1);
                }
            }
        }


    }
    async onChanges(player: RpgPlayer) {

    }
} 