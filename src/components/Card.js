import React from 'react';
import {Paper} from '@material-ui/core';
import './List.css';
import { Draggable } from 'react-beautiful-dnd';

function Card({card, index}) {
    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) =>(
                <div className='card'
                    ref={provided.innerRef} 
                    {...provided.dragHandleProps} 
                    {...provided.draggableProps}
                >
                    <Paper className='paper'>{card.title} </Paper>
                </div>
            )}
        </Draggable>
    )
}

export default Card