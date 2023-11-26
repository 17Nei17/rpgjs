import { RpgReactContext } from '@rpgjs/client/react';
import { React, useContext, useEffect, useState } from 'react';
import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'


export default function MessageGUI(props) {
    const [currentImage, setCurrentImage] = useState('');

    return (
        <div>
           <img src={props.image} class='image'></img>
        </div>
    );
}