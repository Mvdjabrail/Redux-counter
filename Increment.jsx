import React from 'react';
import { useDispatch } from 'react-redux';
import './index.css'

const Increment = () => {
    const dispatch = useDispatch();
    const handleInc = () => {
        dispatch({type: 'increment'})
    }

    return (
        <button className='btn' onClick={handleInc}>Я увеличиваю</button>
    );
};

export default Increment;