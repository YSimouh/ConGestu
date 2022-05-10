import React from 'react';
import '../design/profileCSS.css';

function profilePage() {

    var url = new URL(window.location.href);
    var search_params = url.searchParams;
    url.search = search_params.toString();
    
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
                    <p>text</p>
                    <button>Sign out</button>
                </div>
            </div>
        </div>
    )
}
export default profilePage;