import React from 'react';
import {Paper, CssBaseline} from '@material-ui/core';
import '../css/style.css'
import Title from './Title';
import Card from './Card';
import InputContainer from '../input/InputContainer';
import { Draggable, Droppable } from 'react-beautiful-dnd';

function List({list, index}) {
    console.log(Card.deletObj)
    return (
        <Draggable draggableId={list.id} index={index}> 
            {(provided)=>(
                <div className='list'{...provided.draggableProps} ref={provided.innerRef}> 
                    <Paper {...provided.dragHandleProps}>
                        <CssBaseline/>
                        <Title title={list.title} listId={list.id}/>
                        <Droppable droppableId={list.id}>
                            {(provided)=>(
                                <div
                                ref={provided.innerRef} {...provided.droppableProps}>
                                    {list.cards.map((card, index)=>(
                                        <Card key={card.id} card={card} index={index} listId={list.id}/>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        
                        </Droppable>
                        <InputContainer listId={list.id} type="card"/>
                    </Paper>
                </div>
            )}
            
        </Draggable>
    )
}

export default List;