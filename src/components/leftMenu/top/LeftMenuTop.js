import React, { useState } from 'react';
import styles from './LeftMenuTop.module.css';

import dashboard from '../../images/1.png';
import feedback from '../../images/2.png';
import task from '../../images/3.png';
import changelog from '../../images/dashboard.png'
import roadmap from '../../images/4.png';

export function LeftMenuTop() {

  return (

    <div>
      <div className={styles.top}>
        <ul>
          <li>  <img src={dashboard}></img>Dashboard</li>
          <li>  <img src={feedback}></img>Feedback</li>
          <li className={styles.active}>  <img src={changelog}></img><span>Task</span><div className={styles.circle}></div></li>
          <li>  <img src={task}></img>Roadmap</li>
          <li>  <img src={roadmap}></img>Changelog</li>
        </ul>
      </div>
    </div>

  );
}
