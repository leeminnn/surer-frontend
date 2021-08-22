import React, { useState } from 'react';
import {Paper} from '@material-ui/core';
import '../css/style.css'
import { Draggable } from 'react-beautiful-dnd';
import { MdClose } from 'react-icons/md';

function Card({card, index, list, sendDataToParent}) {
    
    const [show, setShow] = useState(true)

    function hide(){
        const lucky = list.cards.filter(function(number) {
            return number !== card;
          });
        list.cards = lucky;
        sendDataToParent(list)
        setShow(false)
    }

    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) =>(
                <div className='card'
                    ref={provided.innerRef} 
                    {...provided.dragHandleProps} 
                    {...provided.draggableProps}
                    
                >
                {show ?
                    <Paper className='paper'>
                        <div style={{width:'80%', display: 'inline-block' }}>
                            {card.title}
                        </div> 
                        <div style={{width:'10%', display: 'inline-block', float: 'right'}}>
                            <MdClose onClick={hide}/>
                        </div>
                    </Paper>
                    :
                    <></>
                }
                </div>
            )}
        </Draggable>
    )
}

export default Card