import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../store/reducers/counterReducer";
import {getCounterValue} from "../../store/reducers/selectors/getCounterValue/getCounterValue";

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const onIncr = () => dispatch(increment())
    const onDecr = () => dispatch(decrement())

    return (
        <div>
            <h1>value = {value}</h1>
            <button onClick={onIncr}>incr</button>
            <button onClick={onDecr}>decr</button>
        </div>
    );
};

export default Counter;