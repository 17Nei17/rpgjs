import { RpgReactContext } from '@rpgjs/client/react';
import { React, useContext, useEffect, useState } from 'react';
import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

export default function MyGUI(props) {
    console.log(props);
    var date = new Date();
    const { rpgCurrentPlayer } = useContext(RpgReactContext);
    const [time, setTime] = useState(date.getHours());

    useEffect(() => {
    }, []);

    return (
        <div>
            <h1 style={{ color: 'red' }}>Местоположение: {props.currentMap}</h1>
            <h1 style={{ color: 'red' }}>Time: {time}</h1>
        </div>
    );
}