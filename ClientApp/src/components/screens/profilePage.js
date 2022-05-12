import React from 'react';
import '../design/profileCSS.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function profilePage() {

    var url = new URL(window.location.href);
    var search_params = url.searchParams;
    url.search = search_params.toString();
    const profile = JSON.parse(window.localStorage.getItem("currentUser"));
    const l1Answers = profile.courseLevel1.correctAnswers;
    const l1TotalAnswers = profile.courseLevel1.totalAnswers;
    const l2Answers = profile.courseLevel2.correctAnswers;
    const l2TotalAnswers = profile.courseLevel2.totalAnswers;
  
    return (
        <div className="box">
            <div className="Card">
                <div className="upper-container">
                    <div className="image-container">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" height= "100px" width="100px"/>
                    </div>
                </div>
                <div className="lower-container">
                    <h3> user123 </h3>
                    <h4> Beginner </h4>
                    <p>Course level 1:
                        <div style={{ width: 30, height: 30, float: 'right'}}>
                            <CircularProgressbar
                                value={l1Answers}
                                maxValue={l1TotalAnswers}
                                text={`${l1Answers / l1TotalAnswers * 100}%`}
                                styles={{
                                    text: {
                                        fill: '#fff',
                                        fontSize: '20px'
                                    },
                                }}
                            />
                        </div>
                    </p>
                    <p>Course level 2:
                        <div style={{ width: 30, height: 30, float: 'right'}}>
                            <CircularProgressbar
                                value={l2Answers}
                                maxValue={l2TotalAnswers}
                                text={`${l2Answers / l2TotalAnswers * 100}%`}
                                styles={{
                                    text: {
                                        fill: '#fff',
                                        fontSize: '20px'
                                    },
                                }}
                            />
                        </div>
                    </p>
                    <button>Sign out</button>
                </div>
            </div>
        </div>
    )
}
export default profilePage;