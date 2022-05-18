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
	  
	function generate(amount,basepath,signsarray,syntax){
		const randquestions=[];
		const signs=signsarray;
		for(let index=0;index<amount;index++){
			const correctanswer=getRandomInt(0,4);
			const sign=getRandomInt(0,signsarray.length);
			const path=""+signs[sign]
			let alreadyassigned=[];
			alreadyassigned+=path
			console.log(alreadyassigned)
			randquestions[index]={
				answerOptions: [
				],
				picture:require("../pictures/"+`${basepath}`+"/"+`${path}`+".png"),
			};
			randquestions[index].answerOptions[correctanswer]={
				answerText: ""+`${syntax}`+" "+`${path}`+"",isCorrect:true
			}
			for(let b=0;b<4;b++){
				if(b!=correctanswer){
					let randint=getRandomInt(0,signsarray.length)
					let randsign=""+signs[randint]
					while(randsign==path){
						randint=getRandomInt(0,signsarray.length)
						randsign=""+signs[randint]
					}
					randquestions[index].answerOptions[b]={
						answerText:""+`${syntax}`+" "+`${randsign}`+"",isCorrect:false
					}
				}
			}
		}
		return randquestions
	}

  return (
    <>
      <div class="rows">
        <Cursusoption link={"\levelholder"} questions={generate(7,"sign",["A","B","C","D","E","F","G","H","O","Q","R","S","U","V","X","Y","Z"],"Letter")} header="Alfabet" text="Oefen je gebarentaal kunsten" class="item"/>
        <Cursusoption link={"\levelholder"} questions={generate(7,"2eten-en-drinken",["koekje","koffie","macaroni","mandarijn","melk","peer","sinaasappel"],"")} header="Activiteiten" text="Hoeveel weet jij over activiteiten? Test jezelf" class="item"/>
        <Cursusoption link={"\Courses"} header="Sporten" text="Sporten is voor iedereen belangrijk" class="item"/>
        
      </div>
    </>
)
}

export default Courses