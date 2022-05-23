import React from 'react';
import '../design/profileCSS.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useHistory } from "react-router-dom";

function profilePage() {

    var url = new URL(window.location.href);
    var search_params = url.searchParams;
    url.search = search_params.toString();
    const profile = JSON.parse(window.localStorage.getItem("currentUser"));
    const l1Answers = profile.courseLevel1.answersCorrect;
    const l1TotalAnswers = profile.courseLevel1.totalAnswers;
    const l2Answers = profile.courseLevel2.answersCorrect;
    const l2TotalAnswers = profile.courseLevel2.totalAnswers;

    const history = useHistory();
    const logOut = () => {
        const key = "currentUser";
        const user = {
            username: "",
            password: "",
            courseLevel1: "",
            courseLevel2: ""
        };
        window.localStorage.setItem(key, JSON.stringify(user));
        let path = `/login`;
        history.push(path);
    }

    function circularProgressBar(progress, totalAnswers) {
        return (
                <CircularProgressbar
                    value={progress}
                    maxValue={totalAnswers}
                    text={`${progress / totalAnswers * 100}%`}
                    background={true}
                    styles={{
                        text: {
                            fill: '#1D3461',
                            fontSize: '24px'
                        },
                        background: {
                            fill: '#fff',
                        },
                        path: {
                            stroke: `rgba(230, 175, 46, ${100})`,
                            strokeLinecap: 'round',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transformOrigin: 'center center',
                        },
                    }}
                />
        );
    }


    return (
        <div className="box">
            <div className="Card">
                <div className="upper-container">
                    <div className="image-container">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" height= "100px" width="100px"/>
                    </div>
                </div>
                <div className="lower-container">
                    <h3> {profile.username} </h3>
                    <p>Curses 1:
                        <div style={{ width: 30, height: 30, float: 'right' }}>
                            {circularProgressBar(l1Answers, l1TotalAnswers)}
                        </div>
                    </p>
                    <p>Curses 2:
                        <div style={{ width: 30, height: 30, float: 'right'}}>
                            {circularProgressBar(l2Answers, l2TotalAnswers)}
                        </div>
                    </p>
                    <button onClick={logOut}>Uitloggen</button>
                </div>
            </div>
        </div>
    )
}
export default profilePage;