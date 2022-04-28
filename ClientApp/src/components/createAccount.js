import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';

import "./loginStyle.css";

function createAccount() {

    const history = useHistory();

    const routeBack = () => {
        let path = `/login`;
        history.push(path);
    }

    const [state, setState] = useState({
        name: "",
        pass: "",
    })

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleAccount = (event) => {

        event.preventDefault();
        const key = state.name
        const user = {
            username: state.name,
            password: state.pass,
            courseLevel1: 0,
            courseLevel2: 0
        };
        window.localStorage.setItem(key, JSON.stringify(user))
        setIsSubmitted(true);
    };

    const renderForm = (
            <div className="form">
                <form onSubmit={handleAccount}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="name" value={state.name} onChange={handleChange} />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" value={state.pass} onChange={handleChange} />
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Create Account</div>
                {isSubmitted ? <div>Account created successfully</div> : renderForm}
            </div>
        </div>
    );
}

export default createAccount;