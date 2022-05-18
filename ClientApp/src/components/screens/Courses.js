import React from 'react'
import '../parts/levelholder';
import '../design/levels.css'
import Cursusoption from '../parts/cursusoption';
import '../design/courses.css'
import generate from '../Functions/Generators';


function Courses() {
  return (
    <>
      <div class="rows">
        <Cursusoption link={"\levelholder"} oefenlink={"\Oefenen"} 
			questions={generate(7,"sign",["A","B","C","D","E","F","G","H","O","Q","R","S","U","V","X","Y","Z"],"Letter")} 
			header="Alfabet" text="Oefen je gebarentaal kunsten" class="item"/>
        <Cursusoption link={"\levelholder"} oefenlink={"\Oefenen"}
			questions={generate(4,"2eten-en-drinken",["koekje","koffie","macaroni","mandarijn","melk","peer","sinaasappel"],"")} 
			header="Activiteiten" text="Hoeveel weet jij over activiteiten? Test jezelf" class="item"/>
        <Cursusoption link={"\Courses"} oefenlink={"\Oefenen"} 
			header="Sporten" text="Sporten is voor iedereen belangrijk" class="item"/>    
      </div>
    </>
)
}

export default Courses