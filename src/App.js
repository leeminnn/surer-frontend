import React, { useState } from 'react';
import { v4 as uuid} from 'uuid';
import List from './components/List';
import InputContainer from './input/InputContainer';
import store from './utils/store';
import storeAPI from './utils/storeAPI'
import './css/style.css'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Col, Row } from "react-bootstrap";

function App() {
  const [data, setData] = useState(store);
  const addCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [... list.cards, newCard] //use spread operator to get the previous data and add new card inside
  
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]:list,
      },
    };
    setData(newState)
  };

  const addList = (title) =>{
    const newListId = uuid();
    const newList ={
      id:newListId,
      title,
      cards:[],
    };
    const newState={
      listIds:[...data.listIds, newListId],
      lists:{
        ...data.lists,
        [newListId]:newList
      }
    };
    setData(newState);
  }
  const onDragEnd = (result) => {
    const {destination, source, draggableId, type} = result;

    if (!destination){
      return ;
    }
    if (type ==='list'){
      const newListIds = data.listIds;
      newListIds.splice(source.index,1)
      newListIds.splice(destination.index,0, draggableId)
      return ;
    }
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const destinationLength = destinationList.cards.length
    const draggingCard = sourceList.cards.filter(
      (card) => card.id ===draggableId
    )[0];
    if (source.droppableId === destination.droppableId ) {
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index,0,draggingCard);
      
      const newState ={
        ...data,
        lists:{
          ...data.lists,
          [sourceList.id]:destinationList
        }
      };
      
      setData(newState)
    } else {
      if (destinationLength === 6) {

      } else {
        sourceList.cards.splice(source.index,1);
        destinationList.cards.splice(destination.index,0,draggingCard)
        console.log('success')
        const newState ={
          ...data,
          lists:{
            ...data.lists,
            [sourceList.id]:sourceList,
            [destinationList.id]:destinationList
          }
        };
        setData(newState)
      }
    }
  }

  return (
    
      <storeAPI.Provider value={{addCard, addList}}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='app' type='list' direction='horizontal'>
            {(provided) =>(
              <Row xs={2} md={4}> 
              <div className='column' ref={provided.innerRef}{...provided.droppableProps}>
                {data.listIds.map((listIds, index)=> {
                  const list = data.lists[listIds];
                  return (
                    <Col md={3}>
                      <List list = {list} key={listIds} index={index}/>
                    </Col>
                  )
                })}
                <InputContainer type='list'/>
                {provided.placeholder}
              </div>
              </Row>
            )}
          </Droppable>
        </DragDropContext>
      </storeAPI.Provider>
    

    
  );
}

export default App;
