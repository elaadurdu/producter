import React from "react";
import styles from './List.module.scss';
import { Card } from './card/Card'
import { Droppable } from "react-beautiful-dnd";
import logo from '../../images/backlog.png'

const List = ({ text, cards, listID, image, totalPoint }) => {
    return (

        <Droppable droppableId={String(listID)} key={listID} type="card" >
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} className={styles.listContainer}>
                    <div className={styles.title}>
                        <img src={image} />
                        <span >{text}</span>
                        <span className={styles.right}>{totalPoint}</span>
                    </div>
                    <div style={{ overflowY: "auto", height: "635px" }}>
                        {
                            cards.map((card, index) => (
                                <Card index={index} key={card.id} text={card.text} id={card.id} highLevel={card.highLevel} projectNumber={card.projectNumber} point={card.point} profilePicture={card.profilePicture} projectPicture={card.projectPicture} />
                            ))
                        }
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )

}
export default List;