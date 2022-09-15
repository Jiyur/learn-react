/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';


function CounterFeature(props) {
    const dispatch=useDispatch()
    const count=useSelector(state => state.counter)
    const handleIncreaseClick = () => {
        const action=increase()
        console.log(action)
        dispatch(action)
    }
    const handleDecreaseClick = () => {
        const action=decrease()
        console.log(action)
        dispatch(action)

    }
    return (
        <div>
            Counter: {count}
        <div>
            <button onClick={handleIncreaseClick}>increase</button>
            <button onClick={handleDecreaseClick}>decrease</button>

        </div>
        </div>

    );
}

export default CounterFeature;