import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        style={{color:props.color,backgroundColor:props.bColor,width:props.width,height:props.height}}
        onClick={props.clicked}>{props.children}
    </button>
);

export default button;