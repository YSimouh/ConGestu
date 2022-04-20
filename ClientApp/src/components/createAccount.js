import React from "react";
import { useState } from "react";

import "./loginStyle.css";

function createAccount() {
    const [state, setState] = useState({
        name: "",
        pass: "",
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleAccount = (event) => {

        event.preventDefault();

        const user = {
            username: state.name,
            password: state.pass,
            courseLevel1: 0,
            courseLevel2: 0
        };
        window.localStorage.setItem("user", JSON.stringify(user))
    };

    return (
        <div className="login-form">
            <div className="title">Create Account</div>
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
        </div>
    );
}

export default createAccount;