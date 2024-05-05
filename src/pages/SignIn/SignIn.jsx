import React from 'react';
import Styles from "./Styles.module.css";
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className={Styles.container}>
            <h1>Sign In</h1>
            <Link className={Styles.Links} to="/" >Home</Link>
            <Link className={Styles.Links} to="/signin" >Sign In</Link>
            <Link className={Styles.Links} to="/signup" >Sign Up</Link>
        </div>
    )
}

export default SignIn