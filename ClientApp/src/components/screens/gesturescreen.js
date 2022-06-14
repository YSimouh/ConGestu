import testGesture from '../Functions/testGesture';
import React from 'react';
import '../design/gesturescreen.css';
import a from '../pictures/sign/A.png';
import b from '../pictures/sign/B.png';
import c from '../pictures/sign/C.png';
import d from '../pictures/sign/D.png';
import e from '../pictures/sign/E.png';
import f from '../pictures/sign/F.png';
import g from '../pictures/sign/G.png';
import h from '../pictures/sign/H.png';
import o from '../pictures/sign/O.png';
import q from '../pictures/sign/Q.png';
import r from '../pictures/sign/R.png';
import s from '../pictures/sign/S.png';
import u from '../pictures/sign/U.png';
import v from '../pictures/sign/V.png';
import x from '../pictures/sign/X.png';
import y from '../pictures/sign/Y.png';
import { useState } from 'react';
import { poseParameters } from '../parts/parameters';

function gesturescreen() {

    const [currentGesture, setCurrentGesture] = useState('');
    const [answer, setAnswer] = useState(null);
    const [stopCheck, setStopCheck] = useState(false);

    function refresh() {
        setAnswer(null);
        setCurrentGesture('');
        setStopCheck(false);
        return;
    }

    function checkAnswer() {
        if (answer == null) {
            return null
        }
        else {
            return  answer ? <div className = "correctAnswer_HandGesture">Correct!</div> : <div className="incorrectAnswer_HandGesture">Incorrect!</div>
        }
        
    }
    poseParameters.classifySpeed = 500

    poseParameters.pose1Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose1) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose2Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose2) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose3Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose3) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose4Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose4) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose5Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose5) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose6Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose6) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose7Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose7) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose8Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose8) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose9Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose9) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose10Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose10) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose11Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose11) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose12Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose12) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose13Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose13) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose14Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose14) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose15Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose15) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }
    poseParameters.pose16Action = () => {
        if (stopCheck == true) {
            return;
        }
        else {
            if (currentGesture == poseParameters.pose16) {
                setAnswer(true);
                setStopCheck(true);
            }
            else {
                setAnswer(false);
            }
        }

    }

    return (
        <div className="oefenGesture_screen">
            <div className="oefen_afbeeldingen" style={{"maxWidth" : "50%"}}>
                <div class="oefen_screen_container">
	                <div class="top">
    	                <ul>
                            <li><a href="#img_1"><img src={a} onClick={() => setCurrentGesture("a")}/></a></li>
                            <li><a href="#img_2"><img src={b} onClick={() => setCurrentGesture("b")}/></a></li>
                            <li><a href="#img_3"><img src={c} onClick={() => setCurrentGesture("c")}/></a></li>
                            <li><a href="#img_4"><img src={d} onClick={() => setCurrentGesture("d")}/></a></li>
                            <li><a href="#img_5"><img src={e} onClick={() => setCurrentGesture("e")}/></a></li>
                            <li><a href="#img_6"><img src={f} onClick={() => setCurrentGesture("f")}/></a></li>
                            <li><a href="#img_7"><img src={g} onClick={() => setCurrentGesture("g")}/></a></li>
                            <li><a href="#img_8"><img src={h} onClick={() => setCurrentGesture("h")}/></a></li>
                            <li><a href="#img_9"><img src={o} onClick={() => setCurrentGesture("o")}/></a></li>
                            <li><a href="#img_10"><img src={q} onClick={() => setCurrentGesture("q")}/></a></li>
                            <li><a href="#img_11"><img src={r} onClick={() => setCurrentGesture("r")}/></a></li>
                            <li><a href="#img_12"><img src={s} onClick={() => setCurrentGesture("s")}/></a></li>
                            <li><a href="#img_13"><img src={u} onClick={() => setCurrentGesture("u")}/></a></li>
                            <li><a href="#img_14"><img src={v} onClick={() => setCurrentGesture("v")}/></a></li>
                            <li><a href="#img_15"><img src={x} onClick={() => setCurrentGesture("x")}/></a></li>
                            <li><a href="#img_16"><img src={y} onClick={() => setCurrentGesture("y")}/></a></li>
                        </ul>
                        <a href="#_1" class="lightbox trans" id="img_1"><img src={a}/></a>
                        <a href="#_2" class="lightbox trans" id="img_2"><img src={b}/></a>
                        <a href="#_3" class="lightbox trans" id="img_3"><img src={c}/></a>
                        <a href="#_4" class="lightbox trans" id="img_4"><img src={d}/></a>
                        <a href="#_5" class="lightbox trans" id="img_5"><img src={e}/></a>
                        <a href="#_6" class="lightbox trans" id="img_6"><img src={f}/></a>
                        <a href="#_7" class="lightbox trans" id="img_7"><img src={g}/></a>
                        <a href="#_8" class="lightbox trans" id="img_8"><img src={h}/></a>
                        <a href="#_9" class="lightbox trans" id="img_9"><img src={o}/></a>
                        <a href="#_10" class="lightbox trans" id="img_10"><img src={q}/></a>
                        <a href="#_11" class="lightbox trans" id="img_11"><img src={r}/></a>
                        <a href="#_12" class="lightbox trans" id="img_12"><img src={s}/></a>
                        <a href="#_13" class="lightbox trans" id="img_13"><img src={u}/></a>
                        <a href="#_14" class="lightbox trans" id="img_14"><img src={v}/></a>
                        <a href="#_15" class="lightbox trans" id="img_15"><img src={x}/></a>
                        <a href="#_16" class="lightbox trans" id="img_16"><img src={y}/></a>
                    </div>
                </div>
            </div>
		    <div className="oefengesture_container">
                {testGesture()}
                <div className="question_container">
                    <div className="vraag_container">
                        Kies een handgebaar om te oefenen: {!currentGesture == '' ? <div className="chosen_gesture">&nbsp;&nbsp;{currentGesture}</div> : null}
                    </div>
                    {answer != null ? checkAnswer() : null}
                    <div className="refreshButton_container"><button className="refresh_button" onClick={() => refresh()}>Opnieuw</button></div>
                </div>
            </div>
        </div>
		)
}

export default gesturescreen;