import React, {useState} from 'react';
import './onOf.css';

type OnOffPropsType = {
    on:true
}

const OnOff = (props:OnOffPropsType) => {

    const [on, setOn] = useState(true)

    function onOffSet (){
        setOn(!on)

    }

    const classNameOn = on ? 'green' : 'red'
    const classNameOff = on ? 'red' : 'green'

    return (
        <div>
            <button className={classNameOn} onClick={onOffSet}>On</button>
            <button className={classNameOff} onClick={onOffSet}>Off</button>

            <input type={"radio"} className={"radio"}/>
        </div>
    );
};

export default OnOff;