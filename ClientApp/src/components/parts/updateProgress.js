import React from 'react'

function updateProgress(level, answersCorrect) {

    let currentUser = localStorage.getItem("currentUser");

    currentUser = JSON.parse(currentUser);

    if (level === 1) {
        const answers = answersCorrect > currentUser.courseLevel1.answersCorrect ? answersCorrect : currentUser.courseLevel1.answersCorrect;
        const key = currentUser.username;
        const user = {
            username: currentUser.username,
            password: currentUser.password,
            courseLevel1: {totalAnswers: currentUser.courseLevel1.totalAnswers, answersCorrect: answers},
            courseLevel2: currentUser.courseLevel2
        };
        window.localStorage.setItem(key, JSON.stringify(user))
    }

    if (level === 2) {
        const answers = answersCorrect > currentUser.courseLevel2.answersCorrect ? answersCorrect : currentUser.courseLevel2.answersCorrect;
        const key = currentUser.username;
        const user = {
            username: currentUser.username,
            password: currentUser.password,
            courseLevel1: currentUser.courseLevel1,
            courseLevel2: { totalAnswers: currentUser.courseLevel2.totalAnswers, answersCorrect: answers }
        };
        window.localStorage.setItem(key, JSON.stringify(user))
    }

}
export default updateProgress;