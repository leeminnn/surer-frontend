import React, { useState} from 'react';
import {Paper, CssBaseline} from '@material-ui/core';
import '../css/style.css'
import Title from './Title';
import Card from './Card';
import InputContainer from '../input/InputContainer';
import { Draggable, Droppable } from 'react-beautiful-dnd';


function List({list, index, disable}) {
    const [newList, setNewList] = useState(list)

    const sendDataToParent  = (l,s) => {
        setNewList(l);
    }
    return (
        <Draggable draggableId={list.id} index={index}> 
            {(provided)=>(
                <div className='list'{...provided.draggableProps} ref={provided.innerRef}> 
                    <Paper {...provided.dragHandleProps}>
                        <CssBaseline/>
                        <Title title={newList.title} listId={list.id} description={list.description}/>
                        <Droppable droppableId={list.id}>
                            {(provided)=>(
                                <div
                                ref={provided.innerRef} {...provided.droppableProps}>
                                    {Array.from(newList.cards).map((card, i) => (
                                        <Card 
                                        key={card.id} 
                                        card={card} 
                                        index={i} 
                                        listId={list.id} 
                                        list={list} 
                                        sendDataToParent={sendDataToParent}/>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        
                        </Droppable>
                        <InputContainer listId={list.id} disable={disable} type="card"/>
                    </Paper>
                </div>
            )}
            
        </Draggable>
    )
}

export default List;