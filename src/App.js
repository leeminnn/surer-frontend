import React, { useState } from 'react';
import { v4 as uuid} from 'uuid';
import List from './components/List';
import InputContainer from './input/InputContainer';
import store from './utils/store';
import storeAPI from './utils/storeAPI'
import './css/style.css'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Col, Row } from "react-bootstrap";
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';


function App( {match}) {
  const boardList = JSON.parse(localStorage.getItem('boardObject'));
  const valueStorage = boardList.filter(boardList => boardList.name === match.params.board)
  const [titleName, setTitleName] = useState(valueStorage[0].name)
  const [titleDescription, setTitleDescription] = useState(valueStorage[0].description)
  const [newList, setNewList] = useState([]);
  
  function onChangeName(e){
    setTitleName(e.target.value)
    const updatedName = boardList.filter(function(e) {
      return e !== valueStorage[0];
    });
    setNewList(updatedName);
  }

  function onChangeDescription(e){
    setTitleDescription(e.target.value)
    const updatedName = boardList.filter(function(e) {
      return e !== valueStorage[0];
    });
    setNewList(updatedName);
  }

  function updateStorage(){
    const newValue = {name: titleName, description: titleDescription}
    newList.push(newValue)
    localStorage.removeItem('boardObject');
    localStorage.setItem('boardObject', JSON.stringify(newList))
  }

  const [data, setData] = useState(store);
  const addCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard] //use spread operator to get the previous data and add new card inside
  
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
              <Row xs={2} md={4} className='row'> 
                <div className='board'>
                    <Link to={`/`} onClick={updateStorage}><IoArrowBackCircleOutline size={40} /></Link>
                  <h4>Back to Homepage</h4>
                </div>
                <div className ='board_1'>
                  <TextField
                    id="standard-size-small" 
                    value={titleName} 
                    onChange={onChangeName}
                    size="small" 
                    InputProps={{ disableUnderline: true, style: {fontSize: 30}}}
                  />
                </div>
                <div className ='board_1'>
                  <TextField
                    id="standard-size-small" 
                    value={titleDescription} 
                    onChange={onChangeDescription}
                    size="small" 
                    InputProps={{ disableUnderline: true, style: {fontSize: 20}}}
                  />
                </div>
                <div className='column' ref={provided.innerRef}{...provided.droppableProps}>
                  {data.listIds.map((listIds, index)=> {
                    const list = data.lists[listIds];
                    const cardLength = list.cards.length;
                    
                    if (cardLength === 6 ) {
                      var disable = true;
                    } else {
                      var disable = false;
                    }
                    return (
                      <Col md={3}>
                        <List list = {list} key={listIds} index={index} disable={disable}/>
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
