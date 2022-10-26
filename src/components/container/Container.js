import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Container.module.css';

import List from './list/List';

const Container = ({ text, cards, listID, image, totalPoint }) => {

    return (
        <>
            <List listID={listID} key={listID} text={text} cards={cards} image={image} totalPoint={totalPoint} ></List>
        </>
    )
}
export default Container;
