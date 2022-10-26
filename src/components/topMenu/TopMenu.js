import React, { useState } from 'react';
import styles from './TopMenu.module.css';

import leftarrow from '../images/arrow-left.png'
import spr from '../images/Icons.png'
import team from '../images/Icons-2.png'
import calendar from '../images/calendar.png'
import people from '../images/people.png'
import opt from '../images/opt.png'
import opt2 from '../images/opt2.png'

export function TopMenu() {

    return (

        <div className={styles.topMenuContainer}>
            <ul>
                <li><img src={leftarrow}></img></li>
                <li><img src={spr}></img>SPR-06</li>
                <li><img src={team}></img>TEAM-10</li>
                <li>New Sprint Name</li>
                <li><img src={calendar}></img></li>
                <li><img src={people}></img></li>
                <li>Complete Sprint</li>
                <li><img src={opt2}></img></li>
                <li><img src={opt}></img></li>
            </ul>
        </div>

    );
}