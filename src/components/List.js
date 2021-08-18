import React from 'react';
import {Paper, CssBaseline} from '@material-ui/core';
import './List.css'
import Title from './Title';
import Card from './Card';
import InputContainer from '../input/InputContainer';


function List() {
        return (
            <div className='list'>
                <Paper>
                    <CssBaseline/>
                    <Title/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <InputContainer/>
                </Paper>
            </div>
        )
}

export default List;