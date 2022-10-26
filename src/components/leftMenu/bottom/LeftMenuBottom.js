import React, { useState } from 'react';
import styles from './LeftMenuBottom.module.css';

import plus from '../../images/plus.png';
import chat from '../../images/chat-alt.png'
import bell from '../../images/bell.png'
import photo from '../../images/photoNeil.png'
import e from '../../images/E.png'

export function LeftMenuBottom() {
  return (

    <div>
      <div className={styles.bottom}>
        <ul>
          <li> <img src={plus}></img>Invite People</li>
          <li> <img src={chat}></img>Help & Community</li>
          <li> <img src={bell}></img>Notifications</li>
          <li> <img src={photo}></img>Neil Larkins</li>
          <li> <img src={e}></img>Epodbay Inc.</li>
        </ul>
      </div>
    </div>

  );
}
