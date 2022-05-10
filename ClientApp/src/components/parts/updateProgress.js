import React from 'react'

function updateProgress(level, cleared) {

    let currentUser = localStorage.getItem("currentUser");

    currentUser = JSON.parse(currentUser);

    if (level == 1 && cleared == true) {
        const key = currentUser.username;
        const user = {
            username: currentUser.username,
            password: currentUser.password,
            courseLevel1: cleared,
            courseLevel2: currentUser.courseLevel2
        };
        window.localStorage.setItem(key, JSON.stringify(user))
    }

    if (level == 2 && cleared == true) {
        const key = currentUser.username;
        const user = {
            username: currentUser.username,
            password: currentUser.password,
            courseLevel1: currentUser.courseLevel1,
            courseLevel2: cleared
        };
        window.localStorage.setItem(key, JSON.stringify(user))
    }

}
export default updateProgress;