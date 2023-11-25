import { RpgReactContext } from '@rpgjs/client/react';
import { React, useContext, useEffect, useState } from 'react';
import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import transactionMessage from "../messageImages/transactionMessage.png"

export default function MessageGUI(props) {
    console.log(props);
    useEffect(() => {
    }, []);

    return (
        <div>
            <img src={transactionMessage} class='image'></img>
        </div>
    );
}