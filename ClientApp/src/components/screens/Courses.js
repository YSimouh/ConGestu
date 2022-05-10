import React from 'react'
import '../parts/levelholder';
import '../design/levels.css'
import Cursusoption from '../parts/cursusoption';
import '../design/courses.css'
import Levelholder from '../parts/levelholder';



function Courses() {
  const quest = [
		{

			answerOptions: [
				{ answerText: 'Letter C', isCorrect: false },
				{ answerText: 'Letter H', isCorrect: true },
				{ answerText: 'Letter I', isCorrect: false },
				{ answerText: 'Letter Z', isCorrect: false },
			],
			picture:require("../pictures/sign/H.png"),
		},
		{

			answerOptions: [
				{ answerText: 'Letter A', isCorrect: false },
				{ answerText: 'Letter z', isCorrect: false },
				{ answerText: 'Letter F', isCorrect: false },
				{ answerText: 'Letter R', isCorrect: true },
			],
			picture:require("../pictures/sign/R.png"),
		},
		{

			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
			picture:require("../pictures/logo.png"),
		},
		{

			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
			picture:require("../pictures/logo.png"),
		},
	];
  return (
    <>
      <div class="rows">
        <Cursusoption link={"\levelholder"} questions={quest} header="Alfabet" text="Oefen je gebarentaal kunsten" class="item"/>
        <Cursusoption link={"\Courses"} header="Activiteiten" text="Hoeveel weet jij over activiteiten? Test jezelf" class="item"/>
        <Cursusoption link={"\Courses"} header="Sporten" text="Sporten is voor iedereen belangrijk" class="item"/>
        
      </div>
    </>
)
}

export default Courses