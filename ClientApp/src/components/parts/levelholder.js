import React, { useState } from 'react';
import '../design/levels.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';
import logo from "../pictures/logo.png";
import H from "../pictures/sign/H.png";
import R from "../pictures/sign/R.png";


export default function Levelholder() {
	const questions = [
		{
			// questionText: 'Wat is het beste Project groepje',
			answerOptions: [
				{ answerText: 'Letter C', isCorrect: false },
				{ answerText: 'Letter H', isCorrect: true },
				{ answerText: 'Letter I', isCorrect: false },
				{ answerText: 'Letter Z', isCorrect: false },
			],
			picture:H,
		},
		{
			// questionText: 'Wie is de CEO van Tesla',
			answerOptions: [
				{ answerText: 'Letter A', isCorrect: false },
				{ answerText: 'Letter z', isCorrect: false },
				{ answerText: 'Letter F', isCorrect: false },
				{ answerText: 'Letter R', isCorrect: true },
			],
			picture:R,
		},
		{
			// questionText: 'Waar komt de iPhone vandaan :) ?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
			picture:logo,
		},
		{
			// questionText: 'Wat is een mooi getal?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
			picture:logo,
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
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
			return toast.error('Wrong!', {
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
		<div>

		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
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
	);
}