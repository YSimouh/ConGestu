import React from 'react'
import '../parts/cursusmodules/1alfabet';
import '../design/levels.css'
import Cursusoption from '../parts/cursusoption';
import '../design/courses.css'
// import alfabetModule from '../parts/cursusmodules/1alfabet';
// import etenEnDrinkenModule from '../parts/cursusmodules/2etenEnDrinken';


function Courses() {
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
	  }
	  
	function generateQuestionsModule1(amount){
		const randquestions=[];
		const signs=["A","B","C","D","E","F","G","H","O","Q","R","S","U","V","X","Y","Z"];
		for(let index=0;index<amount;index++){
			const correctanswer=getRandomInt(0,4);
			const sign=getRandomInt(0,17);
			const path=""+signs[sign]
			console.log(path)
			randquestions[index]={
				answerOptions: [
				],
				picture:require("../pictures/1alfabet/"+`${path}`+".png"),
			};
			randquestions[index].answerOptions[correctanswer]={
				answerText: 'Letter '+`${path}`+"",isCorrect:true
			}
			for(let b=0;b<4;b++){
				if(b!=correctanswer){
					const randint=getRandomInt(0,17)
					const randsign=""+signs[randint]
					randquestions[index].answerOptions[b]={
						answerText:'Letter '+`${randsign}`+"",isCorrect:false
					}
				}
			}
		}
		return randquestions
	}

	  
	function generateQuestionsModule2(amount){
		const randquestions=[];
		// const signs=["A","B","C","D","E","F","G","H","O","Q","R","S","U","V","X","Y","Z"];
		const signs = ["koekje","koffie","mandarijn","melk"];
		for(let index=0;index<amount;index++){
			const correctanswer=getRandomInt(0,4);
			const sign=getRandomInt(0, signs.length);
			const path=""+signs[sign]
			console.log(path)
			randquestions[index]={
				answerOptions: [
				],
				picture:require("../pictures/2eten-en-drinken/"+`${path}`+".png"),
			};
			randquestions[index].answerOptions[correctanswer]={
				answerText: `${path}`+"",isCorrect:true
			}
			for(let b=0;b<4;b++){
				if(b!=correctanswer){
					const randint=getRandomInt(0,signs.length)
					const randsign=""+signs[randint]
					randquestions[index].answerOptions[b]={
						answerText:`${randsign}`,isCorrect:false
					}
				}
			}
		}
		return randquestions
	}


//   const quest = [
// 		{

// 			answerOptions: [
// 				{ answerText: 'Letter C', isCorrect: false },
// 				{ answerText: 'Letter H', isCorrect: true },
// 				{ answerText: 'Letter I', isCorrect: false },
// 				{ answerText: 'Letter Z', isCorrect: false },
// 			],
// 			picture:require("../pictures/1alfabet/H.png"),
// 		},
// 		{

// 			answerOptions: [
// 				{ answerText: 'Letter A', isCorrect: false },
// 				{ answerText: 'Letter z', isCorrect: false },
// 				{ answerText: 'Letter F', isCorrect: false },
// 				{ answerText: 'Letter R', isCorrect: true },
// 			],
// 			picture:require("../pictures/1alfabet/R.png"),
// 		},
// 		{

// 			answerOptions: [
// 				{ answerText: 'Apple', isCorrect: true },
// 				{ answerText: 'Intel', isCorrect: false },
// 				{ answerText: 'Amazon', isCorrect: false },
// 				{ answerText: 'Microsoft', isCorrect: false },
// 			],
// 			picture:require("../pictures/logo.png"),
// 		},
// 		{

// 			answerOptions: [
// 				{ answerText: '1', isCorrect: false },
// 				{ answerText: '4', isCorrect: false },
// 				{ answerText: '6', isCorrect: false },
// 				{ answerText: '7', isCorrect: true },
// 			],
// 			picture:require("../pictures/logo.png"),
// 		},
// 	];
  return (
    <>
      <div class="rows">
        <Cursusoption link={"\alfabetModule"} questions={generateQuestionsModule1(4)} header="Alfabet" text="Leer het handalfabet van Nederlandse Gebarentaal" class="item"/>
        <Cursusoption link={"\etenEnDrinkenModule"} questions={generateQuestionsModule2(4)} header="Eten en drinken" text="Leer de meestvoorkomende gebaren voor eten en drinken" class="item"/>
        <Cursusoption link={"\Courses"} header="Sporten" text="Sporten is voor iedereen belangrijk" class="item"/>
        
      </div>
    </>
)
}

export default Courses