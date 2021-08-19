import React, { useState } from 'react';
import {Paper} from '@material-ui/core';
import '../css/style.css'
import { Draggable } from 'react-beautiful-dnd';
import { MdClose } from 'react-icons/md';

function Card({card, index}) {

    const [showResults, setShowResults] = useState(true)

    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) =>(
                <div className='card'
                    ref={provided.innerRef} 
                    {...provided.dragHandleProps} 
                    {...provided.draggableProps}
                >
                {showResults ?
                    <Paper className='paper'>
                        <div style={{width:'80%', display: 'inline-block' }}>
                            {card.title}
                        </div> 
                        <div style={{width:'10%', display: 'inline-block', float: 'right'}}>
                            <MdClose onClick={()=>setShowResults(false)}/>
                        </div>
                    </Paper>
                    :
                    <div></div>
                }
                </div>
            )}
        </Draggable>
    )
}

export default Card