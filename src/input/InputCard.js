import { Paper, InputBase, Button, alpha } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import { MdClose } from 'react-icons/md';
import '../css/style.css';
import { makeStyles } from '@material-ui/core'
import storeAPI from '../utils/storeAPI';

const useStyles = makeStyles(theme => ({
    paperRoot: {
        paddingBottom: theme.spacing(4),
    },
    input: {
        margin: theme.spacing(1),
    },
    button: {
        backgroundColor: '#12824C',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: alpha('#12824C', 0.75)
        }
    }
}));

function InputCard({ setOpen, listId, type }) {
    const classes = useStyles();
    const { addCard, addList } = useContext(storeAPI);
    const [title, setTitle] = useState('');
    const handleOnChange = (e) => {
        setTitle(e.target.value)
    };
    const handleBtnCLick = () => {
        if (type === 'card') {
            addCard(title, listId)
            setTitle('')
            setOpen(false)
        }
        else {
            addList(title);
            setTitle('');
            setOpen(false);
        }
    }
    return (
        <div>
            <div className='input'>
                <Paper className={classes.paperRoot}>
                    <InputBase
                        onChange={handleOnChange}
                        multiline
                        placeholder={type === 'card' ? "Enter title of this card..." : "Enter column title..."}
                        inputProps={{
                            className: classes.input
                        }}

                        value={title}
                    />
                </Paper>
            </div>
            <div className='add_card_inner'>
                <Button
                    className={classes.button}
                    onClick={handleBtnCLick}
                >
                    {type === 'card' ? "Add Card" : "Add Column"}
                </Button>
                <MdClose onClick={() => setOpen(false)} />
            </div>
        </div>

    )
}

export default InputCard;
