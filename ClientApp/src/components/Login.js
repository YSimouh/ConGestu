import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import "./loginStyle.css";

function allUsers() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }
    return values;
}

function Login() {
    // Create account redirect

    const history = useHistory();

    const routeCreateAccount = () => {
        let path = `/createAccount`;
        history.push(path);
    }

    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // User Login info
    let profile = "";
    let database = [];
    const users = allUsers();
    const i = users.length;
    let j = 0;
    while (j < i) {
        let json = JSON.parse(users[j]);
        database[j] = {
            username: json.username,
            password: json.password
        }
        j++;
    }

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find(user => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
                setIsLoggedIn(true);
                profile = uname.value;
                console.log(name);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
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
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
                {isLoggedIn ? <Redirect to={"/profile/" + profile} /> : null}
            </div>
            <button className="createAccountButton" onClick={routeCreateAccount}>Create Account</button>
        </div>
    );
}

export default Login;