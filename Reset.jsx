import React from 'react';
import { useDispatch } from 'react-redux';

const Reset = () => {
    const dispatch = useDispatch()
    const handleReset = () => {
        dispatch({type:'reset' })
    }

    return (
        <button className='btn' onClick={handleReset}>Я сбрасываю</button>
    );
};

export default Reset;