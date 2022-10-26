import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from './Card.module.css';
import Cards from '@mui/material/Card'
import CardsContent from '@mui/material/CardContent';
export function Card({ text, id, index, profilePicture, projectNumber, point, highLevel, projectPicture }) {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps} >
                    <Cards className={styles.cardContainer}>
                        <CardsContent>
                            <div className={styles.text}>{text}</div>
                            <div className={styles.bottomInfo}>
                                <ul>
                                    <li><img src={projectPicture} /></li>
                                    <li>{projectNumber}</li>
                                    <li><img src={profilePicture} /></li>
                                    <li>{point}</li>
                                    <li><img src={highLevel} /></li>


                                </ul>
                            </div>
                        </CardsContent>
                    </Cards>
                </div>
            )}
        </Draggable>
    );
};
