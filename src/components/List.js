import React from 'react';
import {Paper, CssBaseline} from '@material-ui/core';
import './List.css'
import Title from './Title';
import Card from './Card';
import InputContainer from '../input/InputContainer';
import { Droppable } from 'react-beautiful-dnd';

function List({list}) {
        return (
            <div className='list'> 
                <Paper>
                    <CssBaseline/>
                    <Title title={list.title}/>
                    <Droppable droppableId={list.id}>
                        {(provided)=>(
                            <div
                            ref={provided.innerRef} {...provided.droppableProps}>
                                {list.cards.map((card, index)=>(
                                    <Card key={card.id} card={card} index={index} />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <InputContainer listId={list.id} type="card"/>
                </Paper>
            </div>
        )
}

export default List;