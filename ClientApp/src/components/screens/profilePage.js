import React from 'react';
import '../design/profileCSS.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function profilePage() {

    var url = new URL(window.location.href);
    var search_params = url.searchParams;
    url.search = search_params.toString();
    const profile = JSON.parse(window.localStorage.getItem("currentUser"));
    const percentage = 100;
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
                        <div style={{ width: 25, height: 25}}>
                        <CircularProgressbar value={100} />
                        </div>
                    </p>
                    <p>Course level 2: {profile.courseLevel2}</p>
                    <button>Sign out</button>
                </div>
            </div>
        </div>
    )
}
export default profilePage;