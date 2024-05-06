import React from 'react';
import Styles from "./Styles.module.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/features/counterSlice';

const Home = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const VariableEnv = import.meta.env.VITE_TEST_VARIABLE || "Default Enviroment"

    console.log(VariableEnv);

    return (
        <div className={Styles.container}>
            <div>
                <h1 className={Styles.title}>Home</h1>
                <Link className={Styles.Links} to="/" >Home</Link>
                <Link className={Styles.Links} to="/signin" >Sign In</Link>
                <Link className={Styles.Links} to="/signup" >Sign Up</Link>
            </div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span className={Styles.valueCount}>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Home