import React from 'react'
import '../parts/levelholder';
import '../design/levels.css'
import Cursusoption from '../parts/cursusoption';
import '../design/courses.css'
import generate from '../Functions/Generators';


function Courses() {
  return (
      <div class="rows">
        <Cursusoption link={"\showlevels"} oefenlink={"\Oefenen"} 
			questions={generate(7,"sign",["A","B","C","D","E","F","G","H","O","Q","R","S","U","V","X","Y","Z"],"Letter")}
      webcam="/gesture" 
			path="sign" signs={["A","B","C","D","E","F","G","H","O","Q","R","S","U","V","X","Y","Z"]} syntax="Letter"
      oefentext="Zoals het gesproken Nederlands, heeft Nederlandse Gebarentaal (NGT) een alfabet. Ondanks dat NGT geen 'woorden heeft, kun je het handgebarenalfabet wel gebruiken om bijvoorbeeld je naam te spellen, of een woord te spellen waar je het gebaar niet van weet. "
      header="Alfabet" text="Leer het alfabet van Nederlandse gebarentaal" class="item"/>
        <Cursusoption link={"\levelholder"} oefenlink={"\Oefenen"}
			questions={generate(5,"2eten-en-drinken",["eten", "drinken", "koekje","koffie","macaroni","mandarijn","melk","peer","sinaasappel"],"")} 
      path="2eten-en-drinken" signs={["eten", "drinken", "koekje","koffie","macaroni","mandarijn","melk","peer","sinaasappel"]} syntax=""
			oefentext=""
      header="Eten en drinken" text="Woorden over voeding" class="item"/>
        <Cursusoption link={"\levelholder"} oefenlink={"\Oefenen"}
			questions={generate(5,"3omgang",["blij", "krijgen", "leuk", "naam", "niet", "tshirt","warm","zon"],"")} 
      path="3omgang" signs={["blij", "krijgen", "leuk", "naam", "niet", "tshirt","warm","zon"]} syntax=""
			oefentext=""
      header="Omgang" text="Meer woorden over communicatie" class="item"/>
   
      </div>
)
}

export default Courses