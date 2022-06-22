import React from 'react';
import { useDispatch } from 'react-redux';

const Random = () => {
    const dispatch = useDispatch()
    const handleRandom = () => {
        dispatch({type: 'random', payload:Math.floor(Math.random() * 10)})
    }
    return (
        <button className='btn' onClick={handleRandom}>Рандом</button>
    );
};

export default Random;