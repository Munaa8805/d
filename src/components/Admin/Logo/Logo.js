import React from 'react';

import mnbLogo from '../../../assets/images/logo1.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={mnbLogo} alt="MNB" />
    </div>
);

export default logo;