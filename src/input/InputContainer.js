import React, {useState} from 'react';
import {alpha, Paper, Typography, Collapse} from '@material-ui/core';
import '../components/List';
import {makeStyles} from '@material-ui/core'
import InputCard from'./InputCard';

const useStyles = makeStyles(theme => ({
    paperRoot: {
        width: 'auto',
        '&:hover':{
            backgroundColor:alpha('#000', 0.25)
        }
    }
    }));

function InputContainer({listId, type}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <div className='add_card'>
            <Collapse in={open}>
                <InputCard setOpen={setOpen} listId={listId} type={type}/>
            </Collapse>
            <Collapse in={!open}>
                <Paper 
                    className={classes.paperRoot} 
                    elevation={0}
                    onClick={()=>setOpen(!open)}
                >
                    <Typography>
                        {type==='card'?'+ Add a Card':'+ Add another Board'}
                    </Typography>
                </Paper>
            </Collapse>
        </div>
    )
}
export default InputContainer