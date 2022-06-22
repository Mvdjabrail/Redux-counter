import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Decrement = () => {
    const num =useSelector((state) => state.number)
    const dispatch = useDispatch()
    const handleDecrement = () => {
        if(num > 0){
        dispatch({type: 'decrement'})
        }
    }
    return (
            <button className='btn' onClick={handleDecrement}>Я уменьшаю</button>
    );
};

export default Decrement;