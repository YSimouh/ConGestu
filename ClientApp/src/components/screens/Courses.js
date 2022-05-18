import React from 'react'
import '../parts/levelholder';
import '../design/levels.css'
import Cursusoption from '../parts/cursusoption';
import '../design/courses.css'
import Levelholder from '../parts/levelholder';



function Courses() {
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
	  }
	  
	function generate(amount){
		const randquestions=[];
		const signs=["A","B","C","D","E","F","G","H","O","Q","R","S","U","V","X","Y","Z"];
		for(let index=0;index<amount;index++){
			const correctanswer=getRandomInt(0,4);
			const sign=getRandomInt(0,17);
			const path=""+signs[sign]
			randquestions[index]={
				answerOptions: [
				],
				picture:require("../pictures/sign/"+`${path}`+".png"),
			};
			randquestions[index].answerOptions[correctanswer]={
				answerText: 'Letter '+`${path}`+"",isCorrect:true
			}
			for(let b=0;b<4;b++){
				if(b!=correctanswer){
					let randint=getRandomInt(0,17)
					let randsign=""+signs[randint]
					while(randsign==path){
						randint=getRandomInt(0,17)
						randsign=""+signs[randint]
					}
					randquestions[index].answerOptions[b]={
						answerText:'Letter '+`${randsign}`+"",isCorrect:false
					}
				}
			}
		}
		return randquestions
	}

  return (
    <>
      <div class="rows">
        <Cursusoption link={"\levelholder"} questions={generate(7)} header="Alfabet" text="Oefen je gebarentaal kunsten" class="item"/>
        <Cursusoption link={"\Courses"} header="Activiteiten" text="Hoeveel weet jij over activiteiten? Test jezelf" class="item"/>
        <Cursusoption link={"\Courses"} header="Sporten" text="Sporten is voor iedereen belangrijk" class="item"/>
        
      </div>
    </>
)
}

export default Courses