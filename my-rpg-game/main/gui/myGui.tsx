import { RpgReactContext } from '@rpgjs/client/react';
import { React, useContext, useEffect, useState } from 'react';

export default function MyGUI(props) {
    console.log(props);
    var date = new Date();
    const { rpgCurrentPlayer } = useContext(RpgReactContext);
    const [hp, setHp] = useState(date.getHours());

    useEffect(() => {
    }, []);

    return (
        <div>
            <h1 style={{ color: 'red' }}>Местоположение: {props.currentMap}</h1>
        </div>
    );
}