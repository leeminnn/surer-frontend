import React, {useState} from 'react';
import {Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Link} from "react-router-dom";
import '../css/style.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

function Home() {
    window.onunload = function () {
        localStorage.removeItem('boardObject');
    }

    var boardList = localStorage.getItem('boardObject');
    if (boardList == null){
        boardList=[]
    }else {
        var boardList = JSON.parse(boardList);
    }

    const [boardName, setBoardName] = useState('');
    const [boardDescription, setBoardDescription] = useState('');
    const [board, setBoard] = useState(boardList)

    function handleList() {
        const newState={
                name: boardName,
                description: boardDescription
        };
        setBoard([...board, newState]);
        setBoardName('')
        setBoardDescription('')
    }
    
    function onChangeBoardName(e) {
        setBoardName(e.target.value)
    }

    function onChangeBoard(e) {
        setBoardDescription(e.target.value)
    }

    return (
        <div>
            <div className='home'>
                <div>
                    <div style={{marginBottom: '15px'}}>
                        <TextField 
                            size="small"
                            id="outlined-basic" 
                            value={boardName} 
                            onChange={onChangeBoardName}
                            label="Board Name" 
                            variant="outlined" 
                            placeholder="Enter board name here"
                        />
                    </div>
                    <div>
                        <TextField 
                            size="small"
                            id="outlined-basic" 
                            value={boardDescription} 
                            onChange={onChangeBoard}
                            label="Board Description" 
                            variant="outlined" 
                            placeholder="Enter board description here"
                        />
                    </div>
                </div>
                <div className='newBoard'>
                    <Button 
                        onClick={handleList}
                    >                    
                        <b>Create New Board</b>
                    </Button>
                </div>
            </div>
            <div className='dashboard'>
                {board.map((e, index) => (
                    <Card className='dashboard_card'>
                        <CardContent className='card_content'>
                            <Typography color="textSecondary" gutterBottom>
                                <div style={{paddingBottom:'10px'}}>
                                    <div style={{fontSize:'20px'}}>{e.name}</div>
                                    <div style={{fontSize:'15px'}}>{e.description}</div>
                                </div>
                                <div style={{fontSize:'10px'}}>
                                    <Link to={`/${e.name}`} 
                                        style={{ textDecoration: 'none' }}
                                        onClick={()=>localStorage.setItem('boardObject', JSON.stringify(board))}
                                    >
                                            Click here to view board
                                    </Link>
                                </div>
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        
    )
}

export default Home