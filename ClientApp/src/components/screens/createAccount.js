import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import "../design/loginStyle.css";

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
            courseLevel1: { totalAnswers: 7, answersCorrect: 0, gesttotalAnswers: 7, gestAnswersCorrect: 0},
            courseLevel2: { totalAnswers: 5, answersCorrect: 0 },
            courseLevel3: { totalAnswers: 5, answersCorrect: 0 },

        };
        window.localStorage.setItem(key, JSON.stringify(user))
        setIsSubmitted(true);
    };

    const renderForm = (
            <div className="form">
                <form onSubmit={handleAccount}>
                    <div className="input-container">
                        <label>Gebruikersnaam</label>
                        <input type="username" name="name" value={state.name} onChange={handleChange} />
                    </div>
                    <div className="input-container">
                        <label>Wachtwoord</label>
                        <input type="password" name="pass" value={state.pass} onChange={handleChange} />
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
    );

    return (
        <div className="app_createAccount">
            <div className="createAccountForm">
                <div className="title">Account maken</div>
                {isSubmitted ? <div className="successful_output" style={{"marginRight" : "auto", "marginLeft" : "auto"}}>Account succesvol aangemaakt!</div> : renderForm}
            </div>
            {isSubmitted ? <button className="createAccountButton" onClick={routeBack}>Back</button> : <button className="createAccountButton" onClick={routeBack}>Back</button>}
        </div>
    );
}

export default createAccount;