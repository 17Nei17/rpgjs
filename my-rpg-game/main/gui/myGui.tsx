import { RpgReactContext } from '@rpgjs/client/react';
import { React, useContext, useEffect, useState } from 'react';

export default function MyGUI() {
    var date = new Date();
    const { rpgCurrentPlayer } = useContext(RpgReactContext);
    const [hp, setHp] = useState(date.getHours());

    useEffect(() => {
    }, []);

    return (
        <div>
            <h1>{hp}</h1>
        </div>
    );
}