import React from 'react';
import Styles from "./Styles.module.css";
import { Link } from 'react-router-dom';

const Home = () => {

    const VariableEnv = import.meta.env.VITE_TEST_VARIABLE || "Default Enviroment"

    console.log(VariableEnv);

    return (
        <div className={Styles.container}>
            <h1 className={Styles.title}>Home</h1>
            <Link className={Styles.Links} to="/" >Home</Link>
            <Link className={Styles.Links} to="/signin" >Sign In</Link>
            <Link className={Styles.Links} to="/signup" >Sign Up</Link>
        </div>
    )
}

export default Home