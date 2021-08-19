import React , {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { FaEllipsisH } from 'react-icons/fa';
import '../css/style.css'


function Title({title, description}){
    const [name, setName] = useState(title);
    const [describe, setDescription] = useState(description);

    function onChangeTitle(e) {
        setName(e.target.value)
    }

    function onChangeDescription(e) {
        setDescription(e.target.value)
    }

    return (
        <div className='container'>
            <div className='header'>
                <TextField 
                    fontWeight="fontWeightBold"
                    id="standard-basic" 
                    value={name} 
                    onChange={onChangeTitle}
                    InputProps={{
                        disableUnderline: true,
                        style: {fontWeight: 'bold'}
                    }}
                />
                <FaEllipsisH/>
            </div>
            <div className='header'>
                <TextField 
                    id="standard-basic" 
                    value={describe} 
                    onChange={onChangeDescription}
                    InputProps={{
                        disableUnderline: true,
                        style: {fontSize: '13px'}
                    }}
                />
            </div>
        </div>
    )
}

export default Title;