import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import "../design/loginStyle.css";
import updateProgress from "../parts/updateProgress";

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
        uname: "incorrecte gebruikersnaam",
        pass: "incorrecte wachtwoord"
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

                const currentUser = JSON.parse(window.localStorage.getItem(profile));

                const key = "currentUser";
                const user = {
                    username: currentUser.username,
                    password: currentUser.password,
                    courseLevel1: currentUser.courseLevel1,
                    courseLevel2: currentUser.courseLevel2
                };
                window.localStorage.setItem(key, JSON.stringify(user));

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
                    <label className="label">Gebruiksnaam</label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label className="label">Wachtwoord</label>
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
        <div className="loginPage">
            <div className="login-form">
                <div className="title">Inloggen</div>
                {isSubmitted ? <div>Gebruiker is ingelogd!</div> : renderForm}
                {isLoggedIn ? <Redirect to={"/profile/" + profile} /> : null}
            </div>
            <button className="createAccountButton" onClick={routeCreateAccount}>Account maken</button>
        </div>
    );
}

export default Login;