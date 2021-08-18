import { Paper, InputBase, Button, alpha } from '@material-ui/core';
import React from 'react';
import { MdClose } from 'react-icons/md';
import '../components/List.css';
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    paperRoot: {
        paddingBottom: theme.spacing(4),
    },
    input: {
        margin: theme.spacing(1),
    },
    button :{
        backgroundColor: '#12824C', 
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: alpha('#12824C', 0.75)
        }
    }
    }));

function InputCard({ setOpen }) {
    const classes = useStyles();
    return (
        <div>
            <div className='input'>
                <Paper className={classes.paperRoot}>
                    <InputBase 
                    multiline 
                    onBlur={()=>setOpen(false)}
                    placeholder="Enter title of this card..."
                    inputProps={{
                        className: classes.input
                    }}
                />
                </Paper>
            </div>
            <div className='add_card_inner'>
                <Button 
                    className={classes.button}
                    onClick={()=>setOpen(false)}
                >                    
                Add card</Button>
                <MdClose onClick={()=>setOpen(false)}/>
            </div>
        </div>
        
    )
}

export default InputCard;
