import React from 'react';
import styles from './LeftMenu.module.css';

import { LeftMenuTop } from './top/LeftMenuTop';
import { LeftMenuBottom } from './bottom/LeftMenuBottom';

export function LeftMenu() {

    return (

        <div className={styles.leftMenuContainer}>
            <LeftMenuTop></LeftMenuTop>
            <LeftMenuBottom></LeftMenuBottom>
        </div>

    );

}


