
import daat from "../main/music/sounds/assets/daat.mp3"
import start from "../main/music/sounds/assets/start.mp3"
import { Howl, Howler } from 'howler';


let prewMap = 'empty';
let currentMap = 'empty2';

function howlMusic(mapId, status) {
    if (status === 'leave') {
        prewMap = mapId;
    }
    if (status === 'join') {
        currentMap = mapId;
        if (currentMap !== prewMap) {
            Howler.stop();
            if (mapId === "desert") {
                let sound = new Howl({
                    src: [daat],
                    loop: true,
                });
                sound.play();
            }
            if (mapId === "start") {
                let sound = new Howl({
                    src: [start],
                    loop: true,
                });
                sound.play();
            }

        }

    }
}

export default howlMusic