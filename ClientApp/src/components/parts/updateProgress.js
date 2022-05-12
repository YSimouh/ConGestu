import React from 'react'

function updateProgress(level, answersCorrect) {

    let currentUser = localStorage.getItem("currentUser");

    currentUser = JSON.parse(currentUser);

    if (level === 1) {
        const key = currentUser.username;
        const user = {
            username: currentUser.username,
            password: currentUser.password,
            courseLevel1: {totalAnswers: currentUser.courseLevel1.totalAnswers, correctAnswers: answersCorrect},
            courseLevel2: currentUser.courseLevel2
        };
        window.localStorage.setItem(key, JSON.stringify(user))
    }

    if (level == 2) {
        const key = currentUser.username;
        const user = {
            username: currentUser.username,
            password: currentUser.password,
            courseLevel1: currentUser.courseLevel1,
            courseLevel2: { totalAnswers: currentUser.courseLevel2.totalAnswers, correctAnswers: answersCorrect }
        };
        window.localStorage.setItem(key, JSON.stringify(user))
    }

}
export default updateProgress;