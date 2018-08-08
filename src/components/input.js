import React from 'react';

const Input = ({title, state, name}, onChange) => {
    
        return (
            <div className='input' key={name}>
                <input name={name} value={state} onChange={onChange}/>
                <label>{title}</label>
            </div>
        )
}

export default Input;