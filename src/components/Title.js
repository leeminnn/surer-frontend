import React , {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { FaEllipsisH } from 'react-icons/fa';
import './List.css';


function Title(){
    const [name, setName] = useState('Todo');

    function onChangeText(e) {
        setName(e.target.value)
        console.log(name)
    }

    return (
        <div className='container'>
            <div className='header'>
                <TextField 
                    id="standard-basic" 
                    value={name} 
                    onChange={onChangeText}
                    InputProps={{
                        disableUnderline: true,
                    }}
                />
                <FaEllipsisH/>
            </div>
        </div>
    )
}

export default Title;