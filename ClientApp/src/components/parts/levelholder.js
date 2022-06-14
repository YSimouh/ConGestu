import React, { useState } from 'react';
//import '../design/levels.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, Flip } from 'react-toastify';
import { toast } from 'react-toastify';
import {Link, useLocation} from "react-router-dom";
import updateProgress from '../parts/updateProgress';

export default function Levelholder(props) {
	const location= useLocation();
	const {questions}=location.state;

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			updateProgress(1, score);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		if(isCorrect){
			return toast.success("Correct!", {
				position: "top-center",
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
			
		}
		else{
			return toast.error('Fout!', {
				position: "top-center",
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
		};
	};
	return (
		<>
		<ToastContainer
          toastStyle={{ backgroundColor: "black" }}
          position="top-center"
          transition={Flip}
          autoClose={900}
          hideProgressBar={false}
          newestOnTop={false}
          closeButton={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
		<div>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Je hebt {score} van de {questions.length} vragen goed!
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Vraag {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						<img src={questions[currentQuestion].picture} className="picture"/>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<div>
							<button className='buttons' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							
							</div>
						))}
					</div>
				</>
			)}
		</div>
		</div>

		</>
		
	);
}