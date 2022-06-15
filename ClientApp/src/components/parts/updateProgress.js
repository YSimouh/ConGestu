import React from 'react'

function updateProgress(level, answersCorrect, gesture) {

    let currentUser = localStorage.getItem("currentUser");

    currentUser = JSON.parse(currentUser);

    if (level === 1 && gesture == true) {
        const answers = answersCorrect > currentUser.courseLevel1.gestAnswersCorrect ? answersCorrect : currentUser.courseLevel1.gestaAswersCorrect;
        const key = currentUser.username;
        const user = {
            username: currentUser.username,
            password: currentUser.password,
            courseLevel1: {totalAnswers: currentUser.courseLevel1.totalAnswers, answersCorrect: currentUser.courseLevel1.answersCorrect, gestAnswersCorrect: answers, gesttotalAnswers: currentUser.courseLevel1.gesttotalAnswers},
            courseLevel2: currentUser.courseLevel2,
            courseLevel3: currentUser.courseLevel3
        };
        window.localStorage.setItem(key, JSON.stringify(user))
    }
    if (level === 1) {
        const answers = answersCorrect > currentUser.courseLevel1.answersCorrect ? answersCorrect : currentUser.courseLevel1.answersCorrect;
        const key = currentUser.username;
        const user = {
            username: currentUser.username,
            password: currentUser.password,
            courseLevel1: { totalAnswers: currentUser.courseLevel1.totalAnswers, answersCorrect: answers },
            courseLevel2: currentUser.courseLevel2,
            courseLevel3: currentUser.courseLevel3
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
            courseLevel2: { totalAnswers: currentUser.courseLevel2.totalAnswers, answersCorrect: answers },
            courseLevel3: currentUser.courseLevel3
        };
        window.localStorage.setItem(key, JSON.stringify(user))
    }

    if (level === 3) {
        const answers = answersCorrect > currentUser.courseLevel3.answersCorrect ? answersCorrect : currentUser.courseLevel3.answersCorrect;
        const key = currentUser.username;
        const user = {
            username: currentUser.username,
            password: currentUser.password,
            courseLevel1: currentUser.courseLevel1,
            courseLevel2: currentUser.courseLevel2,
            courseLevel3: { totalAnswers: currentUser.courseLevel3.totalAnswers, answersCorrect: answers }
        };
        window.localStorage.setItem(key, JSON.stringify(user))
    }

}
export default updateProgress;